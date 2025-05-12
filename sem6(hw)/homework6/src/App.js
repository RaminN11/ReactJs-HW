import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import AddProduct from './components/AddComponent';
import ProductList from './components/productList';
import store from './store/store';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <h1>Каталог продуктов</h1>
        <AddProduct />
        <ProductList />
      </Provider>
    </div>
  );
}

export default App;
