import React from 'react';

export default class Button extends React.Component {

    constructor (props) {
        super(props);
        this.state = {
            isToggleOn: true
        }

        this.onClick = this.onClick.bind(this);
    }

    onClick () {
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }));
    }

    render() {
      return <button class="button {this.state.class}"
                     onClick={this.onClick}>
            {this.state.isToggleOn ? 'ON' : 'OFF'}
        </button>;
    }
  }