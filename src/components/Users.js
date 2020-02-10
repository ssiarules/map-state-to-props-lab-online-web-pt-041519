import React, { Component } from 'react';
// add any needed imports here
import { connect } from 'react-redux'

class Users extends Component {

  renderUsers(){
    return this.props.users.map(user => {
      return (
        <li key={user.username}>
          <div>{user.username}</div>
          <div>{user.hometown}</div>
        </li>
      )
    })
  }

  render() {
    return (
      <div>
        <ul>
          {/* Write code here that displays the usernames of all users in the Redux store */}
            {this.renderUsers}
          {/* In addition, display the total number of users curently in the store */}

            <h3> Total User: {this.props.userCount} </h3>
        </ul>
      </div>
    )
  }
}

//add mapStateToProps here

const mapStateToProps = state => (
  {users: state.users, userCount: state.users.length}
)

// connect this component to Redux
export default connect(mapStateToProps)(Users)
