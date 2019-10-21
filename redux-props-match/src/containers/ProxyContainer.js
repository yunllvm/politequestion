import React from 'react'
import { Route, Link } from 'react-router-dom';

const ProxyContainer = (props) => {

    const url = '/signin/' + props.categoty;
    console.log(url)

    return (
        <div>
            <Link to={url}>move</Link>
        </div>
    );

};

export default ProxyContainer;