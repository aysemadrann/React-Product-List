import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import ProductDetails from './components/ProductDetails';
import Product from './components/Product';
import Navbar from './components/navbar';
import {PriceContext} from './contexts/PriceContext'
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
  const [basketPrice, setBasketPrice] = useState(0)
  return (
    <PriceContext.Provider value={{basketPrice, setBasketPrice, basketNumber, setBasketNumber}}>
      <Router>
        <div>
          <Switch>
            <Route exact path="/">
              <Navbar number={basketNumber} price={basketPrice}  />
              <Product number={basketNumber} numberEdit={setBasketNumber} priceEdit={setBasketPrice}  />
            </Route>
            <Route path="/list/:id" children={<ProductDetails />}>
            <Navbar number={basketNumber} price={basketPrice} />
            <ProductDetails number={basketNumber} numberEdit={setBasketNumber} priceEdit={setBasketPrice} />
            </Route>
          </Switch>
        </div>
      </Router>
    </PriceContext.Provider>
  );
}

// You can think of these components as "pages"
// in your app.

export default App;
