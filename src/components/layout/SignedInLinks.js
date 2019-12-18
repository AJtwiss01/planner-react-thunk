import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { signOut }  from '../../store/actions/authActions'
 
const SignedInLinks = (props) => {
    return (
        <>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li><NavLink to="/create">New Project</NavLink></li>
                <li> <a href="/" onClick={props.signOut}>LogOut</a></li>
                <li><NavLink to="/" className="btn btn-floating pink lighten-1">AJ</NavLink></li>
            </ul>
        </>
    );
}
const mapDispatchToProps = (dispatch) => {
    return {
        signOut: () => dispatch(signOut())
    }
}
export default connect(null, mapDispatchToProps) (SignedInLinks);