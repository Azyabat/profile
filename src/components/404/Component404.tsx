import { Button, Empty } from "antd";
import { Link } from "react-router-dom";
import { rootPath } from "../../utils/path";

const getDescription = () => {
  return <div className="error-container__description-item">404</div>;
};

const getBackBtn = () => {
  return (
    <Link to={rootPath}>
      <Button type="primary" size="middle">
        На главную
      </Button>
    </Link>
  );
};

export const Component404 = () => {
  return (
    <div className="error-container">
      <Empty description={getDescription()}> {getBackBtn()} </Empty>
    </div>
  );
};
