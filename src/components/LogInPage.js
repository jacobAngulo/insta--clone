import React from 'react';

class LogInPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: ''
        }
    }

    handleLoginSubmit = (e) => {
        e.preventDefault();
        if(this.state.username != '' && this.state.password != '') {
            this.props.login(e, this.state.username, this.state.password)
        }

    }

    handleChanges = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        return (
            <form onSubmit={this.handleLoginSubmit}>
                <input 
                name='username' 
                type='text' 
                value={this.state.username} 
                placeholder='username'
                onChange={this.handleChanges}
                />
                <input 
                name='password' 
                type='text' 
                value={this.state.password} 
                placeholder='password'
                onChange={this.handleChanges}
                />
                <button>login</button>
            </form>
        )    
    }
}

export default LogInPage