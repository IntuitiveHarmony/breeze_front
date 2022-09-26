import { Component } from 'react'
import axios from 'axios'


//using https://www.youtube.com/watch?v=4uzEUATtNHQ&ab_channel=TheNetNinja for inspiration on this
//LifeCyle Hooks, class based componets...
class GetSequences extends Component {
    state = {
        sequences: [ ]
    }
    componentDidMount() {
        axios.get('https://breeze-back.herokuapp.com/api/sequences')
        .then(res => {
            console.log(res.data)
            this.setState({
            post: res.data
            })
        })
    }
    render(){
        return (
        <>
        </>
        )
    }


}


export default GetSequences
