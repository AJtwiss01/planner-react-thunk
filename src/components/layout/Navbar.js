import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import SignedInLinks from "./SignedInLinks";
import SignedOutLinks from "./SignedOutLinks";

const Navbar = props => {
  const { auth, profile } = props;
  const links = auth.uid ? (
    <SignedInLinks profile={profile} />
  ) : (
    <SignedOutLinks />
  );
  return (
    <>
      <nav className="nav-wrapper grey darken-3">
        <div className="nav-wrapper container">
          <Link to="/" className="brand-logo">
            {profile.initials ? `${profile.initials}'s Plan` :  'Planner App'}
          </Link>
          {links}
        </div>
      </nav>
    </>
  );
};
const mapStateToProps = state => {
  console.log(state);
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile
  };
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
