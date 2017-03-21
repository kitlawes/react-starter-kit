import * as React from 'react';
import './HelloMessage.scss';

export default class HelloMessage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {cycle: 1};

        // We generally recommend binding in the constructor or using the property initializer syntax,
        // to avoid this sort of performance problem.
        // https://facebook.github.io/react/docs/handling-events.html
        this.onClickHandler = this.onClickHandler.bind(this);
    }

    onClickHandler() {
        this.setState((prevState) => ({
            cycle: prevState.cycle % 10 + 1
        }));
    }

    render() {
        return (
            <div>
                <div>Hello {this.props.name}</div>
                <button onClick={this.onClickHandler}>
                    cycle: {this.state.cycle}
                </button>
            </div>
        );
    }
}

HelloMessage.propTypes = {
    name: React.PropTypes.string
};
