import React from 'react';
import Logo from '../ig-logo.png'

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            search: ''
        }
    }

    handleChanges = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.handleSearch(e, this.state.search);
        this.setState({
            search: ''
        })
    }

    handleLogOut = () => {
        localStorage.removeItem('user');
        window.location.reload();    
    }

    render() {
        return (
            <header className='app-header'>
                <img src={Logo}/>
                <form
                    onSubmit={this.handleSubmit}
                    >
                    <input 
                        placeholder="search \u26B2"
                        type='text'
                        value={this.state.search}
                        name='search'
                        onChange={this.handleChanges}
                    />
                </form> 
                <nav>
                    <a>activity</a>
                    <a>profile</a>
                    <button onClick={this.handleLogOut}>log out</button>
                </nav>
            </header>
        )
    }
}

export default SearchBar