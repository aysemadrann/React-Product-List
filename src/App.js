import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import ProductDetails from './components/ProductDetails';
import Product from './components/Product';
import Navbar from './components/navbar';

// This site has 3 pages, all of which are rendered
// dynamically in the browser (not server rendered).
//
// Although the page does not ever refresh, notice how
// React Router keeps the URL up to date as you navigate
// through the site. This preserves the browser history,
// making sure things like the back button and bookmarks
// work properly.


function App() {
      
  const [basketNumber, setBasketNumber] = useState(0);
  const [price, setPrice] = useState(0);
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <Navbar number={basketNumber} price={price}  />
            <Product  />
          </Route>
          <Route path="/list/:id" children={<ProductDetails />}>
          <Navbar number={basketNumber} price={price} />
          <ProductDetails number={basketNumber} numberEdit={setBasketNumber} priceEdit={setPrice} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

// You can think of these components as "pages"
// in your app.

export default App;
