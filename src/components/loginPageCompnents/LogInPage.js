import React from 'react';
import styled from 'styled-components';
import { CustomInput, Form, FormGroup, Label } from 'reactstrap';

const StylishForm = styled.form`
color: blue;
height: 300px;
width: 300px;
margin: auto;
justify-content: space-evenly;
display: flex;
flex-direction: column;
background: purple
`

class LogInPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: ''
        }
    }

    handleLoginSubmit = (e) => {
        const user = this.state.username
        if(this.state.username != '' && this.state.password != '') {
            localStorage.setItem("user", user);
            window.location.reload();        
        }
        this.setState({
            username: '',
            password: ''
        })
    }
    
    handleChanges = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        return (
            <Form onSubmit={this.handleLoginSubmit}>
                <CustomInput 
                    name='username' 
                    type='text' 
                    value={this.state.username} 
                    placeholder='username'
                    onChange={this.handleChanges}
                />
                <CustomInput 
                    name='password' 
                    type='text' 
                    value={this.state.password} 
                    placeholder='password'
                    onChange={this.handleChanges}
                />
                <button>login</button>
            </Form>
        )    
    }
}

export default LogInPage