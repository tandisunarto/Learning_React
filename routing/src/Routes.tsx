import * as React from "react";

import Atlantic from "./Components/Atlantic";
import Pacific from "./Components/Pacific";

import {
   Route, Switch,
} from 'react-router-dom';

const AppRoutes = () => {
   return (
      <Switch>
         <Route path="/atlantic" component={Atlantic} />
         <Route path="/pacific" component={Pacific} />
      </Switch>      
   )
}

export { AppRoutes };