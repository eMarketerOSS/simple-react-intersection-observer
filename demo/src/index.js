import React, {Component} from 'react';
import {render} from 'react-dom';
import ObserverWrapper from '../../src'
import './index.css';

class Demo extends Component {
  render() {
    return <div>
      <h1>simple-react-intersection-observer Demo</h1>
      <div className="box">
        <h1>Scroll Down</h1>
      </div>
      <ObserverWrapper>
        <div className="box red">
          <h1>Entered Observer View</h1>
        </div>
      </ObserverWrapper>
      <div className="box">
        <h1>Scroll Up</h1>
      </div>
    </div>
  }
}

render(<Demo/>, document.querySelector('#demo'))
