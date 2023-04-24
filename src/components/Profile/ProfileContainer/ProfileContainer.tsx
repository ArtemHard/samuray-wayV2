import { Component, ComponentType } from "react";
import { connect, ConnectedProps } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { compose } from "redux";
import { WithAuthRedirectComponent } from "../../../hocs/withAuthRedirectComponent";
import {
  getProfile,
  getStatus,
  updateStatus,
} from "../../../redux/actions/profileAC";
import { reducersType } from "../../../redux/redux-store";
import { ProfileType } from "../../../redux/types/reducersTypes/profileReducerType";
import { Profile } from "../Profile";
import { withRouter } from "../../../hocs/withRouter";

type ProfileContainerPropsType = PropsFromRedux & WithRouterProps;

export class ProfileContainer extends Component<ProfileContainerPropsType> {
  componentDidMount(): void {
    let { userId } = this.props.params;
    const authorizedUserId = this.props.authorizedUserId;

    if (!userId && authorizedUserId) {
      userId = authorizedUserId.toString();
    }

    this.props.getProfile(userId);
    this.props.getStatus(userId);
  }

  render() {
    return <Profile {...this.props} />;
  }
}

type mapStateToPropsType = {
  profile: ProfileType | null;
  status: string;
  authorizedUserId: number | null;
  isAuth: boolean;
};
const mapStateToProps = (state: reducersType): mapStateToPropsType => {
  return {
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserId: state.auth.id,
    isAuth: state.auth.isAuth,
  };
};

export interface WithRouterProps {
  location: ReturnType<typeof useLocation>;
  params: Record<string, string>;
  navigate: ReturnType<typeof useNavigate>;
}

export const withRouter2 = <Props extends WithRouterProps>(
  Component: React.ComponentType<Props>
) => {
  return (props: Omit<Props, keyof WithRouterProps>) => {
    const location = useLocation();
    const params = useParams();
    const navigate = useNavigate();

    return (
      <Component
        {...(props as Props)}
        location={location}
        params={params}
        navigate={navigate}
      />
    );
  };
};
export type WithRouterType = ReturnType<typeof withRouter2>;

type PropsFromRedux = ConnectedProps<typeof connector>;
const connector = connect(mapStateToProps, {
  getProfile,
  getStatus,
  updateStatus,
});
export default compose<ComponentType>(
  connector,
  withRouter,
  WithAuthRedirectComponent
)(ProfileContainer);
