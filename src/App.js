import React, { Component } from 'react';
import getData from './api/Api';
import Home from './components/Home';
import './App.css';
import { Switch, Route } from 'react-router-dom';

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
      <div className="root">
        <div className="main_app">
        <h1 clasName="title">muSHEc</h1>


        <Switch>
          <Route
            path="/">
            <Home
              womenList={womenList}>

            </Home>

          </Route>
        </Switch>

        </div>
      </div>

    )
  }
  
}

