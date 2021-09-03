import { DownOutlined } from "@ant-design/icons";
import { Menu } from "antd";
import { Link } from "react-router-dom";
import { IRouteCustom } from "../../configs/routes.types";
import { IHeaderMenuItem } from "./HeaderMenuItem.types";

const getSubMenuTitle = (title: string) => {
  return (
    <span>
      {title}
      <DownOutlined style={{ marginLeft: "5px" }} />
    </span>
  );
};

const HeaderMenuItem = (props: IHeaderMenuItem) => {
  const { Item, SubMenu } = Menu;
  const { item } = props;

  if (item.routes) {
    return (
      <SubMenu key={item.key} title={getSubMenuTitle(item.menuTitle as string)}>
        {item.routes &&
          item.routes.map((route: IRouteCustom) => {
            if (route.menuTitle) {
              return (
                <Item key={route.key}>
                  <Link to={route.path as string}> {route.menuTitle} </Link>
                </Item>
              );
            }

            return null;
          })}
      </SubMenu>
    );
  } else {
    return (
      <Item key={item.key}>
        <Link to={item.path as string}> {item.menuTitle} </Link>
      </Item>
    );
  }
};

export default HeaderMenuItem;
