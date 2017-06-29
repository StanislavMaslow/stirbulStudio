/**
 * Created by stasMaslow on 6/28/17.
 */
import React, { Component } from 'react';
import { Link} from 'react-router-dom';

class Header extends Component {
  render() {
    return (
        <header>
            <div className="logo">
                <Link to="/"><img src="./images/stirbulLogo3.png" alt="logo"/></Link>
            </div>
            <nav>
                <ul>
                    <li className="first"><Link to="/about">About</Link></li>
                    <li><Link to="/work">Work</Link></li>
                    <li><Link to="/blog">Blog</Link></li>
                    <li className="last"><Link to="/contacts">Contacts</Link></li>
                </ul>
            </nav>
        </header>
    );
  }
}

export default Header;
