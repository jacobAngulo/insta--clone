import React from "react";
import styled from "styled-components";

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  height: 400px;
  width: 350px;
  margin: 50px auto;
  background: white;
  border: 1.5px solid #e6e6e6;
`;

const StyledInput = styled.input`
  background: #e8f0fe;
  width: 250px;
  height: 36px;
  border: 1.5px solid #e6e6e6;
  border-radius: 2px;
`;

const StyledImg = styled.img`
  width: 200px;
`;

const StyledBtn = styled.button`
  height: 30px;
  width: 250px;
  background: #3897f0;
  color: white;
  font-weight: 700;
  border: none;
  border-radius: 5px;
`;

class LogInPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }

  handleLoginSubmit = e => {
    const user = this.state.username;
    if (this.state.username != "" && this.state.password != "") {
      localStorage.setItem("user", user);
      window.location.reload();
    }
    this.setState({
      username: "",
      password: ""
    });
  };

  handleChanges = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    return (
      <StyledForm onSubmit={this.handleLoginSubmit}>
        <StyledImg src={require("../../assets/logo.png")} />
        <StyledInput
          name="username"
          type="text"
          value={this.state.username}
          placeholder="username"
          onChange={this.handleChanges}
        />
        <StyledInput
          name="password"
          type="text"
          value={this.state.password}
          placeholder="password"
          onChange={this.handleChanges}
        />
        <StyledBtn>login</StyledBtn>
      </StyledForm>
    );
  }
}

export default LogInPage;
