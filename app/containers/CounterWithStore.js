import React from 'react';

class Counter extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 1
        };


        this.incrementCount = this.incrementCount.bind(this);
        this.decrementCount = this.decrementCount.bind(this);
    };

    incrementCount(e) {
        this.setState({ count: this.state.count + 1 }, () => {
            if(this.state.count > 0) {
                this.decrementBtn.disabled = false;
            }
        });
    };

    decrementCount() {
        
        this.setState({ count: this.state.count - 1 }, () => {
            if(this.state.count === 0) {
                this.decrementBtn.disabled = true;
            }
        });
    };

    render() {
        return (
            <div>
                <p>Counter : {this.state.count}</p>
                <button onClick={this.incrementCount}> + </button>
                <button onClick={this.decrementCount} ref={(btn) => this.decrementBtn = btn} > - </button>
            </div>
        );
    }
}

export default Counter;