import React, {Component} from 'react';
import  axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css'

class Router extends Component{
  state = [
    {
      name : "brand new socks",
      price : "666",
      user_id : '5e658f6c9930f50cb9991c18'
  },
]
  componentDidMount(){
    const BASE_URL = process.env.REACT_APP_BASE_URL;
    console.log(BASE_URL);

    this.allProduct(BASE_URL);
    this.deleteProduct(BASE_URL);
    this.addProduct(BASE_URL);

  }
  allProduct = (url) => {
    console.log(`${url}/allProduct`);
    axios.get(`${url}/allProduct`)
    .then(res =>{
      console.log(res.data);
    })
  }
  deleteProduct = (url) => {
    console.log(`${url}/deleteProduct/5e6059cbcf154f0deef08a6b`);
    axios.delete(`${url}/deleteProduct/5e6059cbcf154f0deef08a6b`)
    .then(res => {
      console.log('Product deleted');
    });
  }

  addProduct = (url) => {
    console.log(`${url}/registerProduct`);
    const post = {
      name : this.state[0].name,
      price : this.state[0].price,
      user_id : this.state[0].user_id
    }
    axios.post(`${url}/registerProduct`, post)
    .then(res => {
      console.log(res.data);
    })
  }

  render(){
    const myStyle = {
      backgroundColor : "green",
      color : "blue"
    }
    return(<h1 style={myStyle}>Get request to database</h1>)
  }
}

export default Router;
