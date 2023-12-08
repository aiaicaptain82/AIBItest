import os
import uuid
from flask import request
from flask_restful import abort
from bi import models
from bi.handlers.base import BaseResource, json_response
from bi.permissions import (
    require_permission,
)
from bi import settings
import json
import requests
import threading


class DataReportFileResource(BaseResource):  # BaseResource
    @require_permission("list_data_sources")
    def get(self, data_report_file_id=None):
        result = {}
        user_id = self.current_user.id
        if data_report_file_id:
            try:
                data = models.DataReportFile.file_info(data_report_file_id, user_id)
                file_name = os.path.join(settings.DATA_SOURCE_FILE_DIR, data.filename)
                with open(file_name, 'r') as file:
                    report_data = json.load(file)
                result = report_data
            except ValueError:
                abort(404, message="Data source file not found.")
        else:
            result = models.DataReportFile.get_user_files(user_id)
            # Define state mapping
            status_mapping = {
                -1: '失败',
                0: '待生成',
                1: '生成中',
                2: '成功'
            }
            #
            # # Replace the value of is_generate with the corresponding text
            # for item in result:
            #     status_code = item.get('is_generate')
            #     if status_code is not None and status_code in status_mapping:
            #         item['is_generate'] = status_mapping[status_code]

            for item in result:
                status_code = item.get('is_generate')
                if status_code is not None and status_code in status_mapping:
                    if status_code == 0:
                        report_id = item.get('id')
                        file_name = item.get('file_name')
                        # 创建新线程并执行 POST 请求
                        thread = threading.Thread(target=self.send_post_request, args=(report_id, file_name))
                        thread.start()
                        print("线程结束")

        self.record_event(
            {"action": "view", "object_id": data_report_file_id, "object_type": "data_report_file"}
        )
        return json_response({'code': 200, 'data': result})

    @require_permission("list_data_sources")
    def post(self):
        """save report file"""
        if not settings.DATA_SOURCE_FILE_DIR:
            abort(400, message="Need set DATA_SOURCE_FILE_DIR")
        # get file from request
        user_id = self.current_user.id

        req = request.get_json(True)
        report_name = req["report_name"]
        report_desc = req["report_desc"]
        db_comment = req["db_comment"]
        databases_id = req["databases_id"]

        new_filename = str(user_id) + "_report_" + str(uuid.uuid4()) + '.json'
        file_name = os.path.join(settings.DATA_SOURCE_FILE_DIR, new_filename)

        data = {
            "report_name": report_name,
            "report_desc": report_desc,
            "db_comment": db_comment,
            "html_code": "",
            "chat_log": "report生成中，请耐心等待",
            "databases_id": databases_id
        }

        with open(file_name, 'w') as file:
            json.dump(data, file)

        pass
        result = models.DataReportFile(
            user_id=user_id,
            org_id=self.current_org.id,
            report_name=report_name,
            file_name=new_filename,
        )
        models.db.session.add(result)
        models.db.session.commit()



        return json_response(
            {
                'code': 200,
                'data': result.to_dict(),
            }
        )

    # @require_admin
    def delete(self, data_report_file_id):
        user_id = self.current_user.id
        try:
            data = models.DataReportFile.file_info(
                data_report_file_id,
                user_id
            )
            file_name = os.path.join(settings.DATA_SOURCE_FILE_DIR, data.filename)
            models.db.session.delete(data)
            self.record_event(
                {
                    "action": "delete",
                    "object_id": data_report_file_id,
                    "object_type": "data_report_file",
                }
            )
            if os.path.isfile(file_name):
                os.remove(file_name)
            models.db.session.commit()
        except Exception as e:
            abort(400, message=str(e))
        return {"message": "success", "code": 200}

    def send_post_request(self, report_id, file_name):
        user_name = str(self.current_user.id) + '_user'
        data = {"user_name": user_name, "report_id": report_id, "file_name": file_name
                }

        # 发送 POST 请求到服务器
        url = 'http://192.168.5.161:8340/api/autopilot'  # 根据你的实际地址修改
        response = requests.post(url, json=data)

        # 检查响应结果
        if response.status_code == 200:
            print('POST request successful')
            print('Response:', response.text)
        else:
            print('POST request failed with status code:', response.status_code)
