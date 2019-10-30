import React from 'react';
import { connect } from 'react-redux';

const initialState = {
    count: 0
};
export function reducer(state = initialState, action) {
    switch(action.type) {
        case 'INCREMENT' : 
            return Object.assign({}, state, { count: state.count + 1 });
        case 'DECREMENT' :
            return Object.assign({}, state, { count: state.count - 1 });
        default : return state
    }
}

function incrementAC() {
    return {
        type: 'INCREMENT'
    }
}

function decrementAC() {
    return {
        type: 'DECREMENT'
    }
}

class Counter extends React.Component {
    render() {
        return (
            <div>
                <p>Counter : {this.props.count}</p>
                <button onClick={this.props.increment}> + </button>
                <button onClick={this.props.decrement}> - </button>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    count: state.count
})

const mapDispatchToProps = (dispatch) => ({
    increment: () => dispatch(incrementAC()),
    decrement: () => dispatch(decrementAC()),
})

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default withConnect(Counter);