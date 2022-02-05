import ProductList from "./components/ProductList";

function App() {
    return (
        <div className="container">
            <div className="columns">
              <div class="column is-half is-offset-one-quarter">
                  <center>
                        <h2>Genshin Impact Items Store</h2>
                  </center>
                <ProductList />
            </div>
            </div>
            
        </div>
    );
}

export default App;