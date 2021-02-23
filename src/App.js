import Listing from './components/listing/Listing';
import data from './data/data.json';
import './App.css';

function App() {
  return (
    <Listing items={data} />
  );
}

export default App;
