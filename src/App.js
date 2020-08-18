import React, { Component } from 'react';
import getData from './api/Api';
import './App.css';

export default class App extends Component {

  constructor (props) {
    super(props)

    this.state = {
      womenList: []
    }

  }

  componentDidMount() {
    getData().then(data => {
      this.setState({
        womenList: data
      })
    })
  }

  render() {

    console.log(this.state.womenList)

    const { womenList } = this.state;
    
    return(
      <div className="App">
        {womenList}
      </div>

    )
  }
  
}

