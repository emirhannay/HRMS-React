import React from "react";
import { Icon, Menu } from "semantic-ui-react";

export default function SideBar() {
  return (
    <div>
      <Menu inverted icon="labeled" vertical color ="orange">
        <Menu.Item name="bullhorn">
          <Icon name="bullhorn" />
          Job Position
        </Menu.Item>

        <Menu.Item name="user">
          <Icon name="user" />
          Job Seeker
        </Menu.Item>

        <Menu.Item name="user">
          <Icon name="user" />
          Employer
        </Menu.Item>
        <Menu.Item name="user">
          <Icon name="tasks" />
          Job Advert
        </Menu.Item>
      </Menu>
    </div>
  );
}
