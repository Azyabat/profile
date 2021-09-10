import { StarOutlined } from "@ant-design/icons";
import { Card } from "antd";
import { ISearchItemProps } from "./SearchItem.types";

const SearchItem = (props: ISearchItemProps) => {
  return (
    <Card className="search-item__wrapper">
      <div>
        <StarOutlined />
      </div>
      <h2>{props.title}</h2>
      <div dangerouslySetInnerHTML={{ __html: props.snippet }}></div>
    </Card>
  );
};

export default SearchItem;
