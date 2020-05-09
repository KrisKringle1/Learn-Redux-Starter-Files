import React from 'react';
import { Link } from 'react-router';
import SignIn from './SignIn';

const Main = React.createClass({
  render() {
    return (
      <div>
        <h1>
          <Link to="/">Fakestagram</Link>
        </h1>
        <div>
          <SignIn />
        </div>

        {React.cloneElement(this.props.children, this.props)}
      </div>
    )
  }
})

export default Main;
