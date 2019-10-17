import React from 'react'
import { Route, Switch } from 'react-router'
import Home from '../components/Home'
import Counter from '../components/Counter'

const routes = (
    <div>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/counter" component={Counter} />
        </Switch>
    </div>
)

export default routes