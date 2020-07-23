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
        <TopNav>
          <TopNav.Header>
            <TopNav.Brand>
              <a href="#">Software Shopper</a>
            </TopNav.Brand>
          </TopNav.Header>
        </TopNav>
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