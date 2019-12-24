import React, { Component } from 'react'
import { connect } from "react-redux";

import { signUp} from '../../store/actions/authActions'

class SignUp extends Component {
    state = {
        email: '',
        password: '',
        firstName: '',
        lastName: '',
    }

    handleSubmit = (event) => {
        event.preventDefault()
        console.log(this.state)
        this.props.signUp(this.state)
    }
    handleChange = (event) => {
        this.setState({
            [event.target.id]: event.target.value
        })
    }
    render() {
        return (
            <div className="container">
                <div className="row">
                    <form className="white col s12 " onSubmit={this.handleSubmit}>
                        <h5 className="grey-text text-darken-3">Sign In</h5>
                        <div className="input-field">
                            <label htmlFor="email">Email</label>
                            <input type="email" id='email' onChange={this.handleChange} className="validate" />
                        </div>
                        <div className="input-field">
                            <label htmlFor="password">Password</label>
                            <input type="password" id='password' onChange={this.handleChange} className="validate" />
                        </div>
                        <div className="input-field ">
                            <label htmlFor="firstName">First Name</label>
                            <input type="text" id='firstName' onChange={this.handleChange} className="validate"/>
                        </div>
                        <div className="input-field">
                            <label htmlFor="lastName">Last Name</label>
                            <input type="text" id='lastName' onChange={this.handleChange} className="validate"/>
                        </div>
                        <div className="input-field">
                            <button className="btn pink lighten-1 z-depth-0">Login</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        authError: state.auth.authError
      };
}
const mapDistpatchToProps = (dispatch) => {
    return {
        signUp: (newUser) => dispatch(signUp(newUser))
    }
}
export default connect(mapStateToProps,mapDistpatchToProps)(SignUp)
