import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username:"",
      password:""
    };
  }

  handleUserChange = (e) =>{
    this.setState({username: e.target.value})
  }
  handlePassChange = (e) =>{
    this.setState({password: e.target.value})
  }
  handleSubmit = (e) =>{
    e.preventDefault()
    const { username, password } = this.state;

        if (!username || !password) {
          return;
        }

        this.props.onSubmit({ username, password });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Username
            <input id="test-username"
            type="text"
            name="username"
            value={this.state.username}
            onChange={this.handleUserChange}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="test-password"
            type="password"
            value={this.state.password}
            onChange={this.handlePassChange}
             />
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
