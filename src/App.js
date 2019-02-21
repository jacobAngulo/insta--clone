import React from 'react';
import HomePage from './components/HomePage';
import LogInPage from './components/loginPageCompnents/LogInPage';
import authenticate from './components/authentication/authenticate'
import './App.css';

const Display = authenticate(LogInPage)(HomePage) 

class App extends React.Component {
    render() {
        return (
            <Display />
        )    
    }
}

export default App