import { Component } from "react";
import { connect } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { profileApi } from "../../../api/profileApi";
import { setUserProfile } from "../../../redux/actions/profileAC";
import { reducersType } from "../../../redux/redux-store";
import { ProfileType } from "../../../redux/types/reducersTypes/profileReducerType";
import { Profile } from "../Profile";

interface ProfileContainerPropsType extends WithRouterProps {
  profile: ProfileType | null;
  setUserProfile: (data: any) => void;
}

class ProfileContainer extends Component<ProfileContainerPropsType> {
  componentDidMount(): void {
    let location = this.props.location;
    let { userId } = this.props.params;
    console.log(location);
    console.log(userId);

    profileApi.getProfile(userId).then((data) => {
      this.props.setUserProfile(data);
    });
  }
  render() {
    return <Profile {...this.props} profile={this.props.profile} />;
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

export default connect(mapStateToProps, {
  setUserProfile,
})(withRouter2(ProfileContainer));
