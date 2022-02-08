import { BrowserRouter as Router, Route } from 'react-router-dom';
import ProductList from './components/pages/ProductList';
// import AddProduct from "./components/AddProduct";

function App() {
  return (
    <Router>
      <div className="container">
        <div className="columns">
          <div className="column is-half is-offset-one-quarter">
            <h1>Welcome to white screen</h1>
            <ProductList />
            {/* <Route path="/" element={<AddProduct />} /> */}
            {/* <AddProduct /> */}
          </div>
        </div>
      </div>
    </Router>

  );
}

export default App;
