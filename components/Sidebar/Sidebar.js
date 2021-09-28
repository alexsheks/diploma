import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarLink,
  SidebarRoute,
  SideBtnWrap,
  SidebarMenu,
} from "./SidebarElements";

const Sidebar = ({ isOpen, HandleClick }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={HandleClick}>
      <Icon onClick={HandleClick}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="about" onClick={HandleClick}>
            About
          </SidebarLink>
          <SidebarLink to="services" onClick={HandleClick}>
            Services
          </SidebarLink>
          <SidebarLink to="signup" onClick={HandleClick}>
            Sign Up
          </SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRoute to="/signin">Sign In</SidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
