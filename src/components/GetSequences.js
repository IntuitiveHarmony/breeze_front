import { Component } from 'react'
import axios from 'axios'

class GetSequences extends Component {
  componentDidMount(){
    axios.get('https://breeze-back.herokuapp.com/api/sequences')
      .then(res => {
        console.log(res.data)
      })
  }
  render(){
    return (
      <h3>Hai</h3>
    )
  }


}


export default GetSequences
