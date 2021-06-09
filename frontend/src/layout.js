import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import App from "./App";
import { Carrito } from "./components/Carrito";
import { Celulares } from "./components/Celulares";
import { ClientePage } from "./components/ClientePage";
import { LogIn } from "./components/LogIn";
import { Planes } from "./components/Planes";
import { PlanesCel } from "./components/PlanesCel";
import { SignUp } from "./components/SignUp";

import injectContext from "./store/appContext";

const Layout = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <App />
                </Route>
                <Route exact path="/planes" component={Planes}></Route>
                <Route exact path="/celulares" component={PlanesCel}></Route>
                <Route exact path="/ingresar" component={LogIn}></Route>
                <Route exact path="/registrarse" component={SignUp}></Route>
                <Route exact path="/clientepage" component={ClientePage}></Route>
                <Route exact path="/carrito" component={Carrito}></Route>
            </Switch>
        </BrowserRouter>
    );
};

// export default Layout;
export default injectContext(Layout);