import { Menu } from "antd";
import { IRouteCustom } from "../../configs/routes.types";
import HeaderMenuItem from "../HeaderMenuItem/HeaderMenuItem";
import { IHeaderMenu } from "./HeaderMenu.types";

const getHeaderItems = (items: IRouteCustom[]) => {
  return items
    .filter((item) => {
      return item.path;
    })
    .map((item) =>
      item.path && item.key ? (
        <HeaderMenuItem key={`Item_${item.key}`} item={item} />
      ) : null
    );
};

const HeaderMenu = (props: IHeaderMenu) => {
  return (
    <Menu key="Menu" className="header-menu" activeKey={""} mode="horizontal">
      {getHeaderItems(props.routes)}
    </Menu>
  );
};

export default HeaderMenu;
