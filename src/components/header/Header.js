import React, { Component } from 'react';
import './Header.css';
import { FaPinterest, FaSearch, FaBell, FaComment, FaUser } from 'react-icons/fa';

class Header extends Component {
    render() {
        const search = (
            <div>
                <i><FaSearch /></i>
                <span>Search</span>
            </div>
        )
        return (
            <div className="header">
                <div className="row">
                    <div className="col-10 left-header">
                        <ul className="list-group list-group-horizontal">
                            <li className="logo">
                                <i ><FaPinterest /></i>
                            </li>
                            <li className="btn-home">
                                <a href="#">
                                    Home
                                </a>
                            </li>
                            <li className="btn-following">
                                <a href="#">
                                    Following
                                </a>
                            </li>
                            <li className="style-search">
                                <form action="#" class="form">
                                    <i class="form__icon"><FaSearch/></i>
                                    <input type="text" name="search" class="form__input" placeholder="Search" />
                                </form>
                            </li>
                        </ul>
                    </div>
                    <div className="col-2 right-header">
                        <ul className="list-group list-group-horizontal">
                            <li>
                                <a href="#">
                                    <i><FaBell/></i>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <i><FaComment/></i>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <i><FaUser/></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;