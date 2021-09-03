import { Spin } from "antd";
import { observer } from "mobx-react-lite";

const StartPage = observer(() => {
  return (
    <div className="fw_fh start-page">
      <div className="start-page__text">
        Извините, страница еще в разработке
      </div>
      <Spin size="large" />
    </div>
  );
});

export default StartPage;
