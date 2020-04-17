import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'

import Inicial from './pages/inicial'
import Details from './pages/details'

export default function Routes(){

  return(
    <BrowserRouter>
        <Switch>
    <Route path = '/' xact component= {Inicial}/>

    <Route path = '/details' component = {Details}/>
        </Switch>>
  
    </BrowserRouter>
  );
}