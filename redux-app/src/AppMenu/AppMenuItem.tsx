import * as React from 'react';
import * as PropTypes from 'prop-types';
import MenuItem from "material-ui/Menu/MenuItem";
import { ListItemText, ListItemIcon } from "material-ui/List";
import { withStyles } from "material-ui/styles";

const styles = (theme: any) => ({
   menuItem: {
     '&:focus': {
       backgroundColor: theme.palette.primary.blue,
       '& $primary, & $icon': {
         color: theme.palette.common.white,
       },
     },
   },
   primary: {},
   icon: {},
 });

class AppMenuItem extends React.Component
{
   static propTypes: { classes: PropTypes.Validator<any>; };
   classes: any;

   constructor(props: any) {
      super(props);   
   }

   render() {      

      return (
         <div>
            <MenuItem className={this.classes.menuItem}>
            <ListItemIcon className={this.classes.icon}>
            {/* <SendIcon /> */}
            </ListItemIcon>
            <ListItemText classes={{ primary: this.classes.primary }} inset={true} primary="Manage Diseases" />
            </MenuItem>
         </div>
      )
   }
}

AppMenuItem.propTypes = {
   classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(AppMenuItem);