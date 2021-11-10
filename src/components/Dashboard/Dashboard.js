import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import {
    // BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
} from 'react-router-dom';
import MyOrder from '../YourServices/MyOrder';
import ManageAllServices from '../ManageAllServices/ManageAllServices';
import AllOrders from '../ManageAllOrders/AllOrders';
import AddNewService from '../AddNewService/AddNewService';
import Payment from '../payment/Payment';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import useAuth from '../../hooks/useAuth';

const drawerWidth = 240;

function Dashboard(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const { user, admin, logOut } = useAuth();

    let { path, url } = useRouteMatch();

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div className="ms-2">
            <Toolbar />
            <Divider />
            <List>
                <Link to={`${url}`}>
                    <button className="btn fw-bold">YOUR ORDERS</button>
                </Link>

                {admin && (
                    <Box>
                        <Link to={`${url}/allOrders`}>
                            <button className="btn fw-bold">
                                MANAGE ALL ORDERS
                            </button>
                        </Link>

                        <Link to={`${url}/ManageAllServices`}>
                            <button className="btn fw-bold">
                                MANAGE SERVICES
                            </button>
                        </Link>

                        <Link to={`${url}/addNewService`}>
                            <button className="btn fw-bold">
                                ADD NEW SERVICES
                            </button>
                        </Link>

                        <Link to={`${url}/makeAdmin`}>
                            <button className="btn fw-bold">MAKE ADMIN</button>
                        </Link>
                    </Box>
                )}

                <Link to={`${url}/payment`}>
                    <button className="btn fw-bold">PAYMENT</button>
                </Link>
                <br />
            </List>
        </div>
    );

    const container =
        window !== undefined ? () => window().document.body : undefined;

    return (
        <div className="order-bg">
            <Box sx={{ display: 'flex' }}>
                <CssBaseline />
                <AppBar
                    position="fixed"
                    sx={{
                        width: { sm: `calc(100% - ${drawerWidth}px)` },
                        ml: { sm: `${drawerWidth}px` },
                    }}
                >
                    <Toolbar>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="start"
                            onClick={handleDrawerToggle}
                            sx={{ mr: 2, display: { sm: 'none' } }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography
                            className="nav-item d-flex"
                            variant="h6"
                            noWrap
                            component="div"
                        >
                            {/* Dream Camera */}
                            <Link className="nav-link active text-white" to="/">
                                Home
                            </Link>
                        </Typography>
                        <Typography
                            className="nav-item d-flex"
                            variant="h6"
                            noWrap
                            component="div"
                        >
                            {/* Dream Camera */}
                            <Link
                                className="nav-link active text-white"
                                to="/explore"
                            >
                                Explore
                            </Link>
                        </Typography>
                        {/* <Typography
                            className="nav-item d-flex me-2 justify-content-center align-items-center border px-2"
                            variant="h6"
                            noWrap
                            component="div"
                        >
                            {user.displayName}
                        </Typography> */}
                        <Typography
                            className="nav-item d-flex justify-content-center align-items-center"
                            variant="h6"
                            noWrap
                            component="div"
                        >
                            {user.email && (
                                <div className="nav-item">
                                    <button
                                        onClick={logOut}
                                        className="btn btn-warning"
                                    >
                                        <i className="fas fa-sign-out-alt"></i>{' '}
                                        Log Out
                                    </button>
                                </div>
                            )}
                        </Typography>
                    </Toolbar>
                </AppBar>
                <Box
                    component="nav"
                    sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                    aria-label="mailbox folders"
                >
                    {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                    <Drawer
                        container={container}
                        variant="temporary"
                        open={mobileOpen}
                        onClose={handleDrawerToggle}
                        ModalProps={{
                            keepMounted: true, // Better open performance on mobile.
                        }}
                        sx={{
                            display: { xs: 'block', sm: 'none' },
                            '& .MuiDrawer-paper': {
                                boxSizing: 'border-box',
                                width: drawerWidth,
                            },
                        }}
                    >
                        {drawer}
                    </Drawer>
                    <Drawer
                        variant="permanent"
                        sx={{
                            display: { xs: 'none', sm: 'block' },
                            '& .MuiDrawer-paper': {
                                boxSizing: 'border-box',
                                width: drawerWidth,
                            },
                        }}
                        open
                    >
                        {drawer}
                    </Drawer>
                </Box>
                <Box
                    component="main"
                    sx={{
                        flexGrow: 1,
                        p: 3,
                        width: { sm: `calc(100% - ${drawerWidth}px)` },
                    }}
                >
                    <Toolbar />

                    <Switch>
                        <Route exact path={path}>
                            <MyOrder></MyOrder>
                        </Route>
                        <Route path={`${path}/ManageAllServices`}>
                            <ManageAllServices />
                        </Route>
                        <Route path={`${path}/allOrders`}>
                            <AllOrders />
                        </Route>
                        <Route path={`${path}/addNewService`}>
                            <AddNewService />
                        </Route>
                        <Route path={`${path}/payment`}>
                            <Payment />
                        </Route>
                        <Route path={`${path}/makeAdmin`}>
                            <MakeAdmin />
                        </Route>
                    </Switch>
                </Box>
            </Box>
        </div>
    );
}

Dashboard.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default Dashboard;
