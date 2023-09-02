import React from "react";
import styled from "styled-components";
import {
  FiberManualRecord,
  Create,
  InsertComment,
  Inbox,
  Drafts,
  BookmarkBorder,
  PeopleAlt,
  Apps,
  FileCopy,
  ExpandLess,
  ExpandMore,
  Add,
} from "@mui/icons-material";
import { db } from "../firebase";
import { useCollection } from "react-firebase-hooks/firestore";

import SidebarOption from "./SidebarOption";

const Sidebar = () => {
  const [channels, loading, error] = useCollection(db.collection("rooms"));

  return (
    <SidebarContainer>
      <SidebarHeader>
        <SidebarInfo>
          <h3>Picardo Slack</h3>
          <h5>
            <FiberManualRecord />
            Jayant Sharma
          </h5>
        </SidebarInfo>
        <Create />
      </SidebarHeader>

      <SidebarOption Icon={InsertComment} title="Thread" />
      <SidebarOption Icon={Inbox} title="Mentions & reactions" />
      <SidebarOption Icon={Drafts} title="Saved items" />
      <SidebarOption Icon={BookmarkBorder} title="Channel browser" />
      <SidebarOption Icon={PeopleAlt} title="People & users groups" />
      <SidebarOption Icon={Apps} title="Apps" />
      <SidebarOption Icon={FileCopy} title="File Browser" />
      <SidebarOption Icon={ExpandLess} title="Show less" />
      <hr />

      <SidebarOption Icon={ExpandMore} title="Channels" />
      <hr />
      <SidebarOption Icon={Add} addChannelOption title="Add Channel" />

      {channels?.docs?.map((doc) => (
        <SidebarOption key={doc.id} id={doc.id} title={doc.data().name} />
      ))}
    </SidebarContainer>
  );
};

export default Sidebar;

const SidebarContainer = styled.div`
  background-color: var(--slack-color);
  color: white;
  flex: 0.3;
  border-top: 1px solid #49274b;
  margin-top: 60px;
  max-width: 260px;

  > hr {
    border: 1px solid #49274b;
    margin: 10px 0;
  }
`;

const SidebarHeader = styled.div`
  display: flex;
  border-bottom: 1px solid #49274b;
  padding: 13px;

  > .MuiSvgIcon-root {
    border-radius: 100%;
    background: white;
    color: #49274b;
    padding: 8px;
    font-size: 18px;
  }
`;

const SidebarInfo = styled.div`
  flex: 1;
  > h3 {
    margin-bottom: 5px;
    font-size: 15px;
  }

  > h5 {
    display: flex;
    align-items: center;
    font-weight: 400;
    font-size: 13px;
  }

  > h5 > .MuiSvgIcon-root {
    font-size: 14px;
    color: green;
    margin-top: 1px;
    margin-right: 2px;
  }
`;
