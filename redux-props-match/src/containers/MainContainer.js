import React from 'react'
import { Redirect } from 'react-router-dom'
import ProxyContainer from './ProxyContainer'

const MainContainer = () => {

    return (
        <div>
            MainContainer

            <ProxyContainer categoty={'test'} />
            
        </div>
    );
}

export default MainContainer;