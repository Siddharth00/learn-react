import React, { Component } from 'react';
import withAuthentication from './withAuthentication';

class ClassComponent extends Component {
  constructor(props) {
    super(props);
    console.log(`Constructor called with intial props and state !`);
    this.state = {
      update: false,
    };
    console.log(props);
    console.log(this.state);
  }

  componentDidMount() {
    console.log('The componenet is now mounted successfully !');
  }

  componentDidUpdate(nextProps, nextState) {
    if (this.state !== nextState) {
      console.log('The componenet is now updated successfully !');
    }
  }

  componentWillUnmount() {
    console.log('The componenet is now unmounted successfully !');
  }

  handleUpdate = () => {
    const { update } = this.state;
    this.setState({ update: !update });
  };

  render() {
    const { name } = this.props;
    return (
      <>
        <div>Hi {name}, I am class component and I am old :(</div>
        <div>
          I can have state and lifecycle methods, which allow me to
          manage my own data and respond to changes in the React
          lifecycle.Some of the important methods are below.
        </div>
        <div>1. constructor()</div>
        <div>2. componentDidMount()</div>
        <div>3. componentDidUpdate()</div>
        <button onClick={this.handleUpdate}>Update me</button>
        <div>4. componentWillUnmount()</div>
        <div>
          If you are curios to know how the lifecycle works, I
          recommend to check the console logs.
        </div>
      </>
    );
  }
}

export default withAuthentication(ClassComponent, false);
