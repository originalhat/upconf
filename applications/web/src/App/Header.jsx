import React, {Component} from 'react';

export default class Header extends Component {
  render() {
    console.log(`this.props: `, this.props);

    return (
      <h1>UpConf</h1>
    );
  }
}

