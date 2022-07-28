import './App.css';
import Categories from './components/Categories/Categories';
import Header from './components/Header/Header';
import PizzaBlock from './components/PizzaBlock/PizzaBlock';
import Sort from './components/Sort/Sort';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="content">
        <Categories />
        <Sort />
      </div>
      <PizzaBlock />
    </div>
  );
}

export default App;
