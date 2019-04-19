import React, {Component} from 'react';
import styles from './AppContainer.css';
import Header from "./App/Header";
import Authentication from "./App/Authentication";

export default class AppContainer extends Component {
  render() {
    return (
      <div className={styles['AppContainer']}>
        <Header />
        <Authentication />
      </div>
    );
  }
}
