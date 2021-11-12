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
import Review from '../Review/Review';

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
        <div className="ms-3">
            <svg
                className="ms-5"
                xmlns="http://www.w3.org/2000/svg"
                width="70"
                height="65"
                fill="currentColor"
                class="bi bi-camera-fill"
                viewBox="0 0 16 16"
            >
                <path d="M10.5 8.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
                <path d="M2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2zm.5 2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm9 2.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0z" />
            </svg>
            {/* <Toolbar /> */}
            <Divider />
            <List>
                <Link to={`${url}`}>
                    <button className="btn fw-bold">YOUR ORDERS</button>
                </Link>

                <Link to={`${url}/payment`}>
                    <button className="btn fw-bold">PAYMENT</button>
                </Link>

                <br />

                <Link to={`${url}/review`}>
                    <button className="btn fw-bold">REVIEW</button>
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
                                MANAGE PRODUCT
                            </button>
                        </Link>

                        <Link to={`${url}/addNewService`}>
                            <button className="btn fw-bold">
                                ADD NEW PRODUCT
                            </button>
                        </Link>

                        <Link to={`${url}/makeAdmin`}>
                            <button className="btn fw-bold">MAKE ADMIN</button>
                        </Link>
                    </Box>
                )}

                {user.email && (
                    <div className="nav-item">
                        <button onClick={logOut} className="btn btn-warning">
                            <i className="fas fa-sign-out-alt"></i> Log Out
                        </button>
                    </div>
                )}
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
                            {/* {user.email && (
                                <div className="nav-item">
                                    <button
                                        onClick={logOut}
                                        className="btn btn-warning"
                                    >
                                        <i className="fas fa-sign-out-alt"></i>{' '}
                                        Log Out
                                    </button>
                                </div>
                            )} */}
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
                        <Route path={`${path}/review`}>
                            <Review />
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
