import React from 'react';

const Component = (props) => <div>
        {JSON.stringify(props)}
        <h1>Hello, {props.name} {props.surname}!</h1>
        <div>{props.children}</div>
    </div>;

export default Component;