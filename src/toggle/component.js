import React from 'react';

export default class Button extends React.Component {

    constructor (props) {
        super(props);

        this.state = {
            isToggleOn: true,
            onText: props.onText || 'ON',
            offText: props.offText || 'OFF',
        };

        this.onClick = this.onClick.bind(this);
    }

    onClick () {
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }));
    }

    render() {
      return <div class="toggle">
            <button class="button {this.state.class}"
                    onClick={this.onClick}>
                {this.state.isToggleOn ? this.state.onText : this.state.offText}
            </button>
            <span class="toggle__label">{this.props.children}</span>
        </div>;
    }
  }