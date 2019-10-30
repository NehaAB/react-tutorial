import React from 'react';

const List = ({propsObj: { listItems, text }}) => <ul>
    {listItems.map((item, index) => <li key={index} > {item} </li>)}
</ul>;

export default List;

export const text = "cdhbchds";