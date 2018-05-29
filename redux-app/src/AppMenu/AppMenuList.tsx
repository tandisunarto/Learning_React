import * as React from "react";
import Paper from "material-ui/Paper/Paper";
import MenuList from "material-ui/Menu/MenuList";
import MenuItem from "material-ui/Menu/MenuItem";
import { ListItemText, ListItemIcon } from "material-ui/List";
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';

// function AppMenu(props: any) {
//   const { classes } = props;

//   return (
//     <Paper>
//       <MenuList>
//         <MenuItem className={classes.MenuItem}>
//           <ListItemIcon>
//             <SendIcon />
//           </ListItemIcon>
//           <ListItemText primary="Manage Diseases" />
//         </MenuItem>
//         <MenuItem>
//           <ListItemIcon>
//             <DraftsIcon />
//           </ListItemIcon>
//           <ListItemText primary="Manage News" />
//         </MenuItem>
//         <MenuItem>
//           <ListItemIcon>
//             <InboxIcon />
//           </ListItemIcon>
//           <ListItemText primary="Manage Resources" />
//         </MenuItem>
//       </MenuList>
//     </Paper>
//   )
// }

// AppMenu.propTypes = {
//   classes: PropTypes.object.isRequired,
// };


class AppMainMenuList extends React.Component {

  classes: any;
  // static propTypes: { classes: PropTypes.Validator<any>; };

  constructor(props: any) {
    super(props);
    this.classes = props;
  }

  render() {
    return (
      <Paper>
        <MenuList>
          <MenuItem className={this.classes.menuItem}>
            <ListItemIcon className={this.classes.icon}>
              <SendIcon />
            </ListItemIcon>
            <ListItemText classes={{ primary: this.classes.primary }} inset={true} primary="Manage Diseases" />
          </MenuItem>
          <MenuItem className={this.classes.menuItem}>
            <ListItemIcon className={this.classes.icon}>
              <DraftsIcon />
            </ListItemIcon>
            <ListItemText classes={{ primary: this.classes.primary }} inset={true} primary="Manage News" />
          </MenuItem>
          <MenuItem className={this.classes.menuItem}>
            <ListItemIcon className={this.classes.icon}>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText classes={{ primary: this.classes.primary }} inset={true} primary="Manage Resources" />
          </MenuItem>
        </MenuList>
      </Paper>
    )
  }
}

export default AppMainMenuList;