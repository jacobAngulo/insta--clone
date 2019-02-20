import React from 'react';
import HomePage from './components/HomePage';
import LogInPage from './components/LogInPage'
import './App.css';

const Display = (props) => {
    if(localStorage.getItem("user")) {
        return (
            <HomePage />
        )
    }
    return (
        <LogInPage 
        login={props.login}
        />
    )
}

class App extends React.Component {
    login = (e, un, pw) => {
        e.preventDefault();
        localStorage.setItem("user", un);
        window.location.reload();    
    }

    render() {
        return (
            <Display 
            login={this.login}
            />
        )    
    }
}

export default App