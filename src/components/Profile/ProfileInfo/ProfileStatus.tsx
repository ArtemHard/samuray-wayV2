import React, { Component } from "react";

type ProfileStatusPropsType = {
  status: string;
};

export class ProfileStatus extends Component<ProfileStatusPropsType> {
  statusInputRef = React.createRef();
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
    console.log("this", this);

    this.setState({
      editMode: false,
    });
    // this.props.updateStatus(this.statusInputRef.current.value)
  };
  render() {
    return (
      <div>
        {!this.state.editMode && (
          <div>
            <span onDoubleClick={this.activateEditMode}>
              {this.props.status ? this.props.status : "status doesnt exist"}
            </span>
          </div>
        )}
        {this.state.editMode && (
          <div>
            <input
              // ref={this.statusInputRef}
              onBlur={this.dectivateEditMode}
              value={this.props.status}
            />
          </div>
        )}
      </div>
    );
  }
}
