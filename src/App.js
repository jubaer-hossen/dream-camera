import './App.css';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Home from './components/home/Home';
import LogIn from './components/login/LogIn';
import About from './components/about/About';
import Error from './components/error/Error';
import Details from './components/details/Details';
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Footer from './components/Footer/Footer';
import MyOrder from './components/YourServices/MyOrder';
import ManageAllServices from './components/ManageAllServices/ManageAllServices';
import AddNewService from './components/AddNewService/AddNewService';
import Shipping from './components/Shipping/Shipping';
import AllOrders from './components/ManageAllOrders/AllOrders';
import SignUp from './components/login/SignUp/SignUp';
import Explore from './components/Explore/Explore';
import Dashboard from './components/Dashboard/Dashboard';

function App() {
    return (
        <div>
            <AuthProvider>
                <Router>
                    <NavBar></NavBar>
                    <Switch>
                        <Route exact path="/">
                            <Home></Home>
                        </Route>
                        <Route path="/home">
                            <Home></Home>
                        </Route>
                        <Route path="/explore">
                            <Explore></Explore>
                        </Route>
                        <PrivateRoute path="/dashboard">
                            <Dashboard></Dashboard>
                        </PrivateRoute>
                        <PrivateRoute path="/myOrder">
                            <MyOrder></MyOrder>
                        </PrivateRoute>
                        <PrivateRoute path="/allOrders">
                            <AllOrders></AllOrders>
                        </PrivateRoute>
                        <PrivateRoute path="/details/:id">
                            <Details></Details>
                        </PrivateRoute>
                        <PrivateRoute path="/shipping/:id">
                            <Shipping></Shipping>
                        </PrivateRoute>
                        <PrivateRoute path="/ManageAllServices">
                            <ManageAllServices></ManageAllServices>
                        </PrivateRoute>
                        <Route path="/AddNewService">
                            <AddNewService></AddNewService>
                        </Route>
                        <Route path="/about">
                            <About></About>
                        </Route>
                        <Route path="/login">
                            <LogIn></LogIn>
                        </Route>
                        <Route path="/signUp">
                            <SignUp></SignUp>
                        </Route>
                        <Route exact path="*">
                            <Error></Error>
                        </Route>
                    </Switch>
                    <Footer></Footer>
                </Router>
            </AuthProvider>
        </div>
    );
}

export default App;
