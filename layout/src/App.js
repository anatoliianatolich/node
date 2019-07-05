import React, { Component } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  authUser = (e) => {

    // console.log('click')
      axios({
              method: 'GET',
              headers: {
                  'Content-Type': 'application/json',
                  Authorization: "Basic cGFuZWw6cGFuZWw=",
              },
                // auth:"Basic cGFuZWw6cGFuZWw=",
                params:{
              // email:"MITKV04_2@MITIK.ua",
              // pass:"PT1nTTA0Q011QXpNdUl6TnhJV1o0Y0RabFZHTWtOelkyUW1ZeGdET3pRek1pUlRNMmdET2lGRE8wQVRONTA0ODFCODg2MTRCMzQzODgxQkQ2QzNEMEVFRDc4RUI="},
              access_token: "5bdf1fd070cdb1ed02d535c5710e5b9ee9a11785"
          },
              url: 'http://i-top-0.bi3x.org/api/v2/cart/city/'}
      ).then( (response)=>{
          console.log(response)
      })
  }
  authToken = (e) => {

    console.log('click')
      axios({
        method: 'POST',
        headers: {
            "params":"{\"email\":\"liutenkotest1@intertop.ua\",\"pass\":\"PT1BTXk0U091QXpNdUl6TnhZall5VUdPbE5HTWhSV1lpRkdNM0VUTmlSRE0zSVRPeFlUWXdZek5pTldaRUNCNzYwQTYxOTI3MDRCNTE3MEFCQURBMENFOEUyQjY=\"}",
            'Content-Type':'application/json',
            "Authorization": "Basic cGFuZWw6cGFuZWw="
        },

        url: 'https://api.intertop.ua/api/v2/user/auth/'
      }).then( (response) => {
        console.log(response);
        axios({
            method: "Post",
            headers: {
                "params": "{\"email\":\"liutenkotest1@intertop.ua\",\"pass\":\"lutik918172\"}",
            },
            params: {
                grant_type:'authorization_code',
                code:'0fa061a7fa50d1e3d25f0d2e93f226dac2e7e5b0'
            }
        }).then((responce)=> {console.log(responce)});

      })
  }

  auth

  render() {
    return (
      <div className="App">
            <button onClick={this.authUser}>registration</button>
          <button onClick={this.authToken}>AuthProd</button>
        <header className="App-header">
          
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
