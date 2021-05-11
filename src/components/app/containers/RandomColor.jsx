import React, { Component } from 'react';
const randomColor = require('randomcolor');
import Display from '../presentation/Display';
// Containers are class based components

export default class RandomColor extends Component {
    state = {
        color: "",
    }

    colorChange = () => {
        let newColor = randomColor();
        this.setState({
            color: newColor
    });
    }

    componentDidMount = () => {
        this.interval = setInterval(this.colorChange, 300);
        }

    render() {
        return (
            <>
            <Display color={this.state. color}/>
            </>

        )
    }
}