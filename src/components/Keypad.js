// Code Keypad Component Here
import React, {Component} from 'react'

export default class Keypad extends Component {
    
    log = () => {
        console.log('Entering password...')
    }
    render() {
        return (
            <input type="password" onKeyUp={this.log}></input>
        )
    }
}
