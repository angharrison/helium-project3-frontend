import React, { Component } from "react";
import { Route, Switch, Link } from "react-router-dom";
import axios from 'axios'

class Profile extends Component {
  constructor (props) {
    super(props)
    this.state = {
    things2do: []
    }
  }

  deletethings2do(){


    axios({
        method: 'delete',
        url: 'http://localhost:3001/api/helium/things2do'
        })
        .then(function (response) {
            //handle success
            console.log(response);
        })
        .catch(function (response) {
            //handle error
            console.log(response);
        });
}


  
  componentDidMount(){
    axios.get('http://localhost:3001/api/helium/things2do')
    .then((response)=>{
      this.setState({
        things2do: response.data
      })
    }).catch((err)=>{
        console.log(err)
        
       })
  }
  
  render() {
      let profile = this.props.cityData.find(
        profile => profile.symbol === this.props.match.params.symbol
      )

    let things2do = this.state.things2do.map(item => {  
      return(
        <div>
        <p>{item.sightsee}</p>
        <p>{item.restaurant}</p>
        <p>{item.accommodation}</p>
        <p>{item.romanticPlace}</p>
        <img src={item.image}></img>
        </div>
        
      )
    })
    console.log('test')

    return (
      <div>
        <p>{profile.city}</p>
        <img src={profile.image} />
        <p>{profile.tagline}</p>
        {things2do}
        <input type="submit" value="Delete Thing2do" onClick={this.deletethings2do.bind(this)}></input>
      </div>
    )
  }
}

export default Profile;
