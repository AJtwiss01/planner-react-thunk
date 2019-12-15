import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'



const Navbar = () => {
    return (
        <>
            <nav className="nav-wrapper grey darken-3">
                <div className="nav-wrapper container">
                    <Link to="/" className="brand-logo">AJ's Plan</Link>
                    <SignedInLinks />
                    <SignedOutLinks />
                </div>
            </nav>
        </>
    );
}
const mapStateToProps = (state) => {
   return  {
      
    
}
}

const mapDispatchToProps = {
    
    
}

export default connect(mapStateToProps,mapDispatchToProps) (Navbar);