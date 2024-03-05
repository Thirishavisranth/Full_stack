// EditProfile.js

import React, { Component } from 'react';

class EditProfile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      editing: false,
      userName: 'User Name',
      dateOfBirth: '01/01/1990',
      password: '******',
    };
  }

  handleEditClick = () => {
    this.setState({ editing: true });
  };

  handleCancelClick = () => {
    this.setState({ editing: false });
  };

  handleSubmit = () => {
    // Handle submission logic (e.g., update user details)
    // ...

    // After submission, hide the form
    this.setState({ editing: false });
  };

  handleInputChange = (field, value) => {
    this.setState({ [field]: value });
  };

  render() {
    const { userName, dateOfBirth, password, editing } = this.state;

    return (
      <div className="flex-1 p-0">
        {/* Edit Profile Button */}
        <button className="bg-Teal text-white px-4 py-2 rounded-full" onClick={this.handleEditClick}>
          Edit Profile
        </button>

        {/* Edit Profile Form */}
        {editing && (
          <div className="mt-4">
            <table className="border-collapse w-full">
              <tbody>
                <tr>
                  <td className="p-2">User Name</td>
                  <td className="p-2">
                    <input
                      type="text"
                      value={userName}
                      onChange={(e) => this.handleInputChange('userName', e.target.value)}
                    />
                  </td>
                </tr>
                <tr>
                  <td className="p-2">Date of Birth</td>
                  <td className="p-2">
                    <input
                      type="text"
                      value={dateOfBirth}
                      onChange={(e) => this.handleInputChange('dateOfBirth', e.target.value)}
                    />
                  </td>
                </tr>
                <tr>
                  <td className="p-2">Password</td>
                  <td className="p-2">
                    <input
                      type="password"
                      value={password}
                      onChange={(e) => this.handleInputChange('password', e.target.value)}
                    />
                  </td>
                </tr>
              </tbody>
            </table>

            <div className="mt-4">
              <button className="bg-Teal text-white px-4 py-2 rounded-full" onClick={this.handleSubmit}>
                Submit
              </button>
              <button className="ml-2 px-4 py-2 rounded-full" onClick={this.handleCancelClick}>
                Cancel
              </button>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default EditProfile;
