import React from 'react';

const Component = ({ list }) => {
    return <ul> 
        {list.map((item) => <li>{item}</li>)} 
    </ul>;
};

export default Component;