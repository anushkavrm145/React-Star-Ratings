import logo from './logo.svg';
import './App.css';
import StarRating from './components';

function App() {
  return (
    <div className="App">
     <StarRating noOfStars={10}/>
    </div>
  );
}

export default App;
