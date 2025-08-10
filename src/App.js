
import './App.css';
import { Route,Routes } from 'react-router-dom';
import Movie from './components/movie';

function App() {
  return (
    <section>
      <Routes>
        <Route path="/" element={<Movie/>}/>
      </Routes>

    </section>
  );
}

export default App;
