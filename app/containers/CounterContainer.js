import React from 'react';
import Counter from './Counter';

class CounterContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            showCounter: true,
        };

        this.toggleCounter = this.toggleCounter.bind(this);
    };

    toggleCounter() {
        this.setState({
            showCounter: !this.state.showCounter
        });
    }

    render() {

        let CounterElement = "";

        if(this.state.showCounter) {
            CounterElement = <Counter />;
        }

        return (
            <div>
                {CounterElement}
                <button onClick={this.toggleCounter}>{ this.state.showCounter ? 'Unmount' : 'Mount' } Counter</button>
            </div>
        );
    }
}

export default CounterContainer;