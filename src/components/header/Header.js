import React, { Component } from 'react';
import './Header.css';
import { FaPinterest, FaSearch, FaBell, FaComment, FaUser } from 'react-icons/fa';
import { Link, NavLink,withRouter  } from 'react-router-dom';
import { connect } from 'react-redux';
import { SEARCH_IMAGE_REQUEST } from '../../redux/actions/image/searchImage/actionType';
import { GET_SIZE_IMAGE_REQUEST } from '../../redux/actions/image/getSizeImage/actionType';

class Header extends Component {
    constructor(props){
        super(props);
        this.state = {
            searchImage: {
                value: ""
            }
        }
        this.changeInput = this.changeInput.bind(this);
        this.getDataSearch = this.getDataSearch.bind(this)
    }

    changeInput(event) {
        this.setState({
            searchImage: {
                value: event.target.value
            }
        })
    }

    getDataSearch = (event) => {
        event.preventDefault();
        this.props.history.push('/search');
        const {getDataSearchImage} = this.props;
        const {searchImage} = this.state;
        const valueSearch = searchImage.value
        getDataSearchImage(valueSearch)
    }

    render() {
        const { dataSearchImage,loading,getDataSizeImage } = this.props;
        const {searchImage} = this.state
        // console.log("long test: ",loading)

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
                                <Link onClick={getDataSizeImage}>
                                    Following
                                </Link>
                            </li>
                            {/* form search */}
                            <li className="style-search">
                                <form to="/search" className="form-inline" onSubmit={this.getDataSearch}>
                                    <input onChange={this.changeInput} value={searchImage.value} type="text" className="form-control" placeholder="search" id="search" />
                                    <Link to="/search" onClick={this.getDataSearch} className="btn"><FaSearch/></Link>
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
        dataSearchImage: state.searchImage.data,
        loading: state.searchImage.loading
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getDataSearchImage: (valueSearch) => dispatch({ type: SEARCH_IMAGE_REQUEST, payload: valueSearch }),
        getDataSizeImage: () => dispatch({ type: GET_SIZE_IMAGE_REQUEST })
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));