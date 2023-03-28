import { Component } from "react";
import { connect, ConnectedProps } from "react-redux";
import {
  redirect,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import { getProfile } from "../../../redux/actions/profileAC";
import { reducersType } from "../../../redux/redux-store";
import { ProfileType } from "../../../redux/types/reducersTypes/profileReducerType";
import { Profile } from "../Profile";

// interface ProfileContainerPropsType extends WithRouterProps {
//   profile: ProfileType | null;
//   setUserProfile: (data: any) => void;
// }

type ProfileContainerPropsType = PropsFromRedux & WithRouterProps;

export class ProfileContainer extends Component<ProfileContainerPropsType> {
  componentDidMount(): void {
    // let location = this.props.location;
    let { userId } = this.props.params;
    this.props.getProfile(userId);
  }

  render() {
    return <Profile profile={this.props.profile} />;
  }
}

type mapStateToPropsType = {
  profile: ProfileType | null;
};
const mapStateToProps = (state: reducersType): mapStateToPropsType => {
  return {
    profile: state.profilePage.profile,
  };
};

export interface WithRouterProps {
  location: ReturnType<typeof useLocation>;
  params: Record<string, string>;
  navigate: ReturnType<typeof useNavigate>;
  // redirect: ReturnType<typeof redirect>;
}
/*
export function withRouter<ComponentProps>(
  Component: React.ComponentType<ComponentProps>
) {
  function ComponentWithRouterProp(props: ComponentProps) {
    const location = useLocation();
    const navigate = useNavigate();
    const params = useParams();

    return <Component {...props} router={{ location, navigate, params }} />;
  }

  return ComponentWithRouterProp;
}
*/
// withRouter(ProfileContainer);

export const withRouter2 = <Props extends WithRouterProps>(
  Component: React.ComponentType<Props>
) => {
  return (props: Omit<Props, keyof WithRouterProps>) => {
    const location = useLocation();
    const params = useParams();
    const navigate = useNavigate();
    // const toRedirect = (to: string) => redirect(to);

    return (
      <Component
        {...(props as Props)}
        location={location}
        params={params}
        navigate={navigate}
        // redirect={toRedirect}
      />
    );
  };
};
export type WithRouterType = ReturnType<typeof withRouter2>;

type PropsFromRedux = ConnectedProps<typeof connector>;
const connector = connect(mapStateToProps, {
  getProfile,
});
export default connector(withRouter2(ProfileContainer));
