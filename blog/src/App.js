import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './pages/About';
import Home from './pages/Home';
import Article from './pages/Article';
import ArticlesList from './pages/ArticlesList';
import Navbar from './Components.js/Navbar';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Router>
      <Navbar></Navbar>
    <div className="max-w-screen-md mx-auto pt-20">
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/articles-list' element={<ArticlesList/>} />
        <Route path='/article/:name' element={<Article/>} />
        <Route path='*' element={<NotFound/>} />
      </Routes>
    </div>
    </Router>
  );
}

export default App;
