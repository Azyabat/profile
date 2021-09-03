import { PureComponent } from "react";
import MainContainer from "../MainContainer/MainContainer";
import { StartPageContainerProps } from "./StartPageContainer.types";

class StartPageContainer extends PureComponent<StartPageContainerProps> {
  public render() {
    return <MainContainer isShowMenu={true} {...this.props} />;
  }
}

export default StartPageContainer;
