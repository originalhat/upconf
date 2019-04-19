import React, {Component} from 'react';
import PropTypes from 'prop-types';
import styles from './AppContainer.css';
import Header from "./App/Header";
import Authentication from "./App/Authentication";
import {connect} from "react-redux";

export class AppContainer extends Component {
  static propTypes = {
    users: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string
      })
    )
  };

  render() {
    return (
      <div className={styles['AppContainer']}>
        <Header users={this.props.users}/>
        <Authentication/>
      </div>
    );
  }
}

const mapStateToProps = (state /*, ownProps*/) => {
  return {
    conferences: state.conferences,
    presentations: state.presentations,
    users: state.users,
  }
};

const mapDispatchToProps = dispatch => ({
  increment: () => console.log('sdkjaskdjkasjd')
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppContainer)
