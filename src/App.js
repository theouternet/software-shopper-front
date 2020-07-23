import React, { Component } from 'react';
import {Navbar} from 'react-bootstrap';
import { connect } from 'react-redux';

import { fetchSoftware } from './actions/actions';
import SoftwareList from './components/ResultsContainer';
//


class App extends Component {

  componentDidMount() {
    this.props.fetchSoftware();
  }


  //edit Navbar + header/brand__
  render() {
    return (
      <div className="App">
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#">Software Shopper</a>
            </Navbar.Brand>
          </Navbar.Header>
        </Navbar>
        <SoftwareList softwarePics={this.props.softwarePics}/>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    softwarePics: state.software.pictures
  };
}

export default connect(mapStateToProps, { fetchSoftware })(App);