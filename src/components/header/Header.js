import React, { Component } from 'react';
import './Header.css';
import { FaPinterest, FaSearch, FaBell, FaComment, FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { SEARCH_IMAGE_REQUEST } from '../../redux/actions/image/searchImage/actionType';

class Header extends Component {
    constructor(props){
        super(props);
        this.state = {
            searchImage: {
                value: ""
            }
        }
        this.changeInput = this.changeInput.bind(this)
        this.getDataSearch = this.getDataSearch.bind(this)
    }

    changeInput(event){
        this.setState({
            searchImage: {
                value: event.target.value
            }
        })
    }

    getDataSearch = (event) => {
        event.preventDefault();
        const {getDataSearchImage} = this.props;
        const {searchImage} = this.state;
        const valueSearch = searchImage.value
        getDataSearchImage(valueSearch)
    }

    render() {
        const { dataSearchImage } = this.props;
        const {searchImage} = this.state
        console.log("longtest: ", dataSearchImage)

        return (
            <div className="header">
                <div className="row">
                    <div className="col-10 left-header">
                        <ul className="list-group list-group-horizontal">
                            <li className="logo">
                                <i ><FaPinterest /></i>
                            </li>
                            <li className="btn-home">
                                <Link to="/">
                                    Home
                                </Link>
                            </li>
                            <li className="btn-following">
                                <a href="#">
                                    Following
                                </a>
                            </li>
                            {/* form search */}
                            <li className="style-search">
                                <form className="form-inline" onSubmit={this.getDataSearch}>
                                    <input onChange={this.changeInput} value={searchImage.value} type="text" className="form-control" placeholder="search" id="search" />
                                    <button type="submit" className="btn"><FaSearch/></button>
                                </form>
                            </li>
                        </ul>
                    </div>
                    <div className="col-2 right-header">
                        <ul className="list-group list-group-horizontal">
                            <li>
                                <a href="#">
                                    <i><FaBell /></i>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <i><FaComment /></i>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <i><FaUser /></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        dataSearchImage: state.searchImage.data
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getDataSearchImage: (valueSearch) => dispatch({ type: SEARCH_IMAGE_REQUEST, payload: valueSearch })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);