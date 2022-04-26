import React, { Component } from 'react';
import MenuItems from './MenuItems';
import Logo from '../../assets/logo.svg';
import './header.css';

const Menu = (props) => (
  <ul className={props.cName}>
    {MenuItems.map((menuItem) => (
      <li key={menuItem.id}>
        <a
          className={menuItem.cName}
          aria-label={menuItem.title}
          href={menuItem.href}
        >
          {menuItem.title}
        </a>
      </li>
    ))}
  </ul>
);
class Header extends Component {
  state = { clicked: false };

  handelClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  render() {
    return (
      <header className="header flex">
        <div className="header-logo">
          <img src={Logo} alt="Logo brand" />
        </div>
        <nav className="nav">
          <Menu cName="nav nav--main" />
          <button
            type="button"
            onClick={this.handelClick}
            className="btn--menu hidden"
          >
            <i
              className={
                this.state.clicked
                  ? 'ri-close-line ri-xl'
                  : 'ri-menu-2-line ri-xl'
              }
            />
          </button>
          {this.state.clicked && <Menu cName="nav nav--mobile" />}
        </nav>

        <div className="header-search">
          <i className="ri-search-line" />
          <input
            className="input-field"
            type="search"
            placeholder="Search for anything"
          />
        </div>
      </header>
    );
  }
}

export default Header;
