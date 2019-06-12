import React from "react";
import { TweenMax } from "gsap";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      hideLogo: false
    };
  }

  componentDidMount() {
    const appHeader = document.querySelector(".app-header");
    const toggleLogo = document.querySelector(".toggle");
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 100) {
        TweenMax.to(appHeader, 0.1, { height: 50 });
        TweenMax.to(toggleLogo, 0.1, { opacity: 0 });
        this.setState({
          ...this.state,
          hideLogo: true
        });
      } else if (window.pageYOffset < 100) {
        TweenMax.to(appHeader, 0.1, { height: 76 });
        TweenMax.to(toggleLogo, 0.1, { opacity: 1 });
        this.setState({
          ...this.state,
          hideLogo: false
        });
      }
    });
  }

  handleChanges = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.handleSearch(e, this.state.search);
    this.setState({
      search: ""
    });
  };

  handleLogOut = () => {
    localStorage.removeItem("user");
    window.location.reload();
  };

  render() {
    return (
      <header className="app-header">
        <div className="logo" onClick={() => window.location.reload()}>
          <img src={require("../../../assets/logo.png")} />
          <div
            className="toggle"
            // style={{ display: `${this.state.hideLogo ? "none" : "flex"}` }}
          >
            <p>|</p>
            <img src={require("../../../assets/logo-name.png")} />
          </div>
        </div>
        <form onSubmit={this.handleSubmit}>
          <input
            placeholder="search"
            type="text"
            value={this.state.search}
            name="search"
            onChange={this.handleChanges}
          />
        </form>
        <nav>
          <a>activity</a>
          <a>profile</a>
          <button onClick={this.handleLogOut}>log out</button>
        </nav>
      </header>
    );
  }
}

export default SearchBar;
