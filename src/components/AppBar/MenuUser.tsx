import {useContext} from 'react'
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import {AnchorElContext} from './AnchorElContext';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    menu: {
        zIndex: theme.zIndex.drawer + 150,
    },
  }),
);

const menuId = 'primary-search-account-menu';

function MenuUser() {

    const classes = useStyles();

    const [anchorEl, setAnchorEl] = useContext(AnchorElContext);

    const handleMenuClose = () => {
        setAnchorEl(null);
      };

      const isMenuOpen = Boolean(anchorEl);

    return (
        <div>
            <Menu
                className={classes.menu}
                anchorEl={anchorEl}
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                id={menuId}
                keepMounted
                transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                open={isMenuOpen}
                onClose={handleMenuClose}
            >
                <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
                <MenuItem onClick={handleMenuClose}>My account</MenuItem>
            </Menu>
        </div>
    )
}

export default MenuUser
export {menuId as UserMenuId};