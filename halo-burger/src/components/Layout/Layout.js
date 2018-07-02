import React from 'react'

import Aux from 'hoc/Aux';
import classes from './Layout.css';

const layout = (props) => (
   <Aux>
      <div>
         Toolbar, SideDrawer, Backdrop
      </div>
      <div className={classes.Content}> 
         {props.children}   
      </div>
   </Aux>
);

export default layout; 