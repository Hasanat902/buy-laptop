import './App.css';
import Products from './components/Products/Products';
import Question from './components/Question/Question';

function App() {
  return (
    <div>
      <h1 className='site-header'>Buy Laptop from Us</h1>
      <h3 className='site-header2'>Various brands are here</h3>
      <Products></Products>
      <Question></Question>
    </div>
  );
}

export default App;
