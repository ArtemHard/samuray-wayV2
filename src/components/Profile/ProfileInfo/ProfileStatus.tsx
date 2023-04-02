import React, { Component } from "react";

type ProfileStatusPropsType = {
  status: string;
  updateStatus: (newStatus: string) => void;
};

export class ProfileStatus extends Component<ProfileStatusPropsType> {
  state = {
    editMode: false,
    status: this.props.status,
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
    this.props.updateStatus(this.state.status);
  };
  onStatusChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      status: e.currentTarget.value,
    });
  };
  render() {
    return (
      <div>
        {!this.state.editMode && (
          <div>
            <span onDoubleClick={this.activateEditMode}>
              {this.props.status || "status doesnt exist"}
            </span>
          </div>
        )}
        {this.state.editMode && (
          <div>
            <input
              // ref={this.statusInputRef}
              onChange={this.onStatusChange}
              autoFocus={true}
              onBlur={this.dectivateEditMode}
              value={this.state.status}
            />
          </div>
        )}
      </div>
    );
  }
}
