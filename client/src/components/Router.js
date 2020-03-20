import React, {Component} from 'react';
import  axios from 'axios';

class Router extends Component{
  state = [
    {
      name : "brand new socks",
      price : "666",
      user_id : '5e658f6c9930f50cb9991c18'
  },
]
  componentDidMount(){
    this.allProduct();
    this.deleteProduct();
  }
  allProduct = () => {
    console.log('Get product function called');
    axios.get(`http://192.168.33.10:5000/allProduct`)
    .then(res =>{
      console.log(res.data);
    })
  }
  deleteProduct = () => {
    console.log("Delete product function called");
    axios.delete(`http://192.168.33.10:5000/deleteProduct/5e6059cbcf154f0deef08a6b`)
    .then(res => {
      console.log('Product deleted');
    });
  }

  addProduct = () => {
    console.log('Add product function called');
    const post = {
      name : this.state[0].name,
      price : this.state[0].price,
      user_id : this.state[0].user_id
    }
    axios.post(`http://192.168.33.10:5000/registerProduct`, post)
    .then(res => {
      console.log(res.data);
    })
  }

  render(){
    return(<h1>Get request to database</h1>)
  }
}

export default Router;
