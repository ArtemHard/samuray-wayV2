import React, { Component } from "react";

type ProfileStatusPropsType = {
  status: string;
};

export class ProfileStatus extends Component<ProfileStatusPropsType> {
  state = {
    editMode: false,
  };
  activateEditMode = () => {
    this.setState({
      editMode: true,
    });
  };
  dectivateEditMode = () => {
    this.setState({
      editMode: false,
    });
  };
  render() {
    return (
      <div>
        {!this.state.editMode && (
          <div>
            <span onDoubleClick={this.activateEditMode.bind(this)}>
              {this.props.status}
            </span>
          </div>
        )}
        {this.state.editMode && (
          <div>
            <input
              onBlur={this.dectivateEditMode.bind(this)}
              value={this.props.status}
            />
          </div>
        )}
      </div>
    );
  }
}
