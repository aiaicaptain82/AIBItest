import React from "react";
import { wrap as itemsList, ControllerType } from "@/components/items-list/ItemsList";
import routeWithUserSession from "@/components/ApplicationArea/routeWithUserSession";
import { ResourceItemsSource } from "@/components/items-list/classes/ItemsSource";
import { StateStorage } from "@/components/items-list/classes/StateStorage";
import Link from "@/components/Link";
import PageHeader from "@/components/PageHeader";
import Paginator from "@/components/Paginator";
import EmptyState, { EmptyStateHelpMessage } from "@/components/empty-state/EmptyState";
import DynamicComponent from "@/components/DynamicComponent";
import ItemsTable, { Columns } from "@/components/items-list/components/ItemsTable";
import Alert from "@/services/alert";
import { currentUser } from "@/services/auth";
import routes from "@/services/routes";
import DashboardPage from "@/pages/dashboards/DashboardPage";
import Dialogue from "./components/Dialogue";
import DialogueListLeft from "./components/DialogueListLeft";
import LogWorkflow from "./components/LogWorkflow";

import "./index.less";

import { toUpper } from "lodash";
let timeoutId = null;

function DialogueList(props) {
  const { currentPage, chatType } = props;
  // const [chatType, setChatType] = React.useState("chat");
  const [isShowReport, setisShowReport] = React.useState(false);
  const [dashboardId, setDashboardId] = React.useState("");
  const [dashboardKey, setDashboardKey] = React.useState(0);
  const [uuid, setUuid] = React.useState("");
  const [isShowNoData, setIsShowNoData] = React.useState(false);
  const switchMode = (item) => {
    setUuid(item.uuid);
  };
  const handleError = () => {
  };
  const scrollToBottom = () => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => {
    const messageContainer = document.querySelector('.dashbord_page');
    if (messageContainer) {
        const scrollHeight = messageContainer.scrollHeight;
      const clientHeight = messageContainer.clientHeight;
      messageContainer.scrollTo({
        top: scrollHeight - clientHeight,
        behavior: 'smooth',
      });
    }
  }, 80);
  };
  const sendUrl = (item) => {
    if(item=="new_report"){
      setIsShowNoData(true);
      setDashboardId("");
      setDashboardKey((prevKey) => prevKey + 1);
      return;
    }
    setIsShowNoData(false);
    setDashboardId(item);
    setDashboardKey((prevKey) => prevKey + 1);
      // scrollToBottom()
  }
  const NoDashboardData=({})=> {
    return (
        <div style={{ flex: '1 1 0%', overflow: 'auto', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <img
            src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNDEiIHZpZXdCb3g9IjAgMCA2NCA0MSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCiAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCAxKSIgZmlsbD0ibm9uZSIgZmlsbFJ1bGU9ImV2ZW5vZGQiPg0KICAgIDxlbGxpcHNlIGZpbGw9IiNkZGQiIGN4PSIzMiIgY3k9IjMzIiByeD0iMzIiIHJ5PSI3IiAvPg0KICAgIDxnIGZpbGxSdWxlPSJub256ZXJvIiBzdHJva2U9IiM5OTkiPg0KICAgICAgPHBhdGgNCiAgICAgICAgZD0iTTU1IDEyLjc2TDQ0Ljg1NCAxLjI1OEM0NC4zNjcuNDc0IDQzLjY1NiAwIDQyLjkwNyAwSDIxLjA5M2MtLjc0OSAwLTEuNDYuNDc0LTEuOTQ3IDEuMjU3TDkgMTIuNzYxVjIyaDQ2di05LjI0eiIgLz4NCiAgICAgIDxwYXRoDQogICAgICAgIGQ9Ik00MS42MTMgMTUuOTMxYzAtMS42MDUuOTk0LTIuOTMgMi4yMjctMi45MzFINTV2MTguMTM3QzU1IDMzLjI2IDUzLjY4IDM1IDUyLjA1IDM1aC00MC4xQzEwLjMyIDM1IDkgMzMuMjU5IDkgMzEuMTM3VjEzaDExLjE2YzEuMjMzIDAgMi4yMjcgMS4zMjMgMi4yMjcgMi45Mjh2LjAyMmMwIDEuNjA1IDEuMDA1IDIuOTAxIDIuMjM3IDIuOTAxaDE0Ljc1MmMxLjIzMiAwIDIuMjM3LTEuMzA4IDIuMjM3LTIuOTEzdi0uMDA3eiINCiAgICAgICAgZmlsbD0iI2UxZTFlMSIgLz4NCiAgICA8L2c+DQogIDwvZz4NCjwvc3ZnPg=="
            alt="Holmes"
            style={{ width: '120px', height: '120px', margin: '0 auto' }}
          />
          <p style={{ textAlign: 'center', marginTop: '20px', fontSize: '14px', fontWeight: 'bold' }}>
          {
            chatType==="report"?window.W_L.start_your_dialogue:window.W_L.no_dialogue
          }
          </p>
        </div>
    );
  }
  return (
    <div className="page-alerts-list">
      {
        chatType === "viewConversation"&&
        (<DialogueListLeft chat_type={chatType} switchMode={switchMode}></DialogueListLeft>)
      }
      <div style={{ display: 'flex', flexDirection: 'column', flex: 1, borderRadius: '10px', position: "relative", background: "rgb(243 243 243)",overflow: "auto"}}>
      {
        chatType === "viewConversation"&& !uuid?
        <NoDashboardData />
        :
          <Dialogue chat_type={chatType} sendUrl={sendUrl} key={chatType} uuid={uuid} /> 
      }
      </div>
      {
        chatType === "report" && dashboardId?
          <div style={{ flex: "1",overflow: "auto" }} className="dashbord_page">
            <DashboardPage key={dashboardKey} isShowReport={isShowReport} dashboardId={dashboardId} dashboardSlug="-" onError={handleError} />
          </div>
          : null
      }
      {
        chatType === "report" && isShowNoData&&
        (
          <NoDashboardData />
        )
      }
    </div>
  );
}

function registerDialogueListRoute() {

  routes.register(
    "Dialogue.List.Dialogue",
    routeWithUserSession({
      path: "/dialogue-list",
      title: "Dialogue",
      render: (pageProps) => <DialogueList {...pageProps} chatType="viewConversation" />,
    })
  );


  routes.register(
    "Dialogue.List.Report",
    routeWithUserSession({
      path: "/report-route",
      title: "Report",
      render: (pageProps) => <DialogueList {...pageProps} chatType="report" />,
    })
  );
  
  routes.register(
    "Dialogue.List",
    routeWithUserSession({
      path: "/",
      title: window.W_L.dialogue,
      render: (pageProps) => <DialogueList {...pageProps} currentPage="testdialogue" chatType="chat" />,
    })
  );
  
}

registerDialogueListRoute();