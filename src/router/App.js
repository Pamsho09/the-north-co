import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Meat from "../containers/Meat";
import Coffe from "../containers/Coffe";
import Soda from "../containers/Soda";
import NotFound from "../containers/NotFound";
import Cart from "../containers/Cart";
import Layout from "../containers/Layout";
const App = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path="/" component={Meat} />
        <Route exact path="/coffe" component={Coffe} />
        <Route exact path="/soda" component={Soda} />
        <Route exact path="/cart" component={Cart} />

        <Route component={NotFound} />
      </Switch>
    </Layout>
  </BrowserRouter>
);
export default App;
