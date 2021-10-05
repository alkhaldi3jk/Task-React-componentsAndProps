
import './App.css'
import productsData from './products'
import product from './components/product'
import home from './components/home'

function App() { 

  let dataArray= productsData.map(element =>
    <product info={element}/>
    )

  return (
<div>
    <home />
<div className="product-List">{dataArray}</div>

</div>
  );
}

export default App;
