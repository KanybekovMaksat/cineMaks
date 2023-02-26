import './App.scss';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Onboarding from './pages/Onboarding';
import Authentication from './pages/Authentication';
import Reset from './pages/Authentication/Reset';
import Home from './pages/Home';
import Explore from './pages/Explore';
import Profile from './pages/Profile';
import Favorite from './pages/Favorite';

import Navigation from './components/organisms/Navigation';
import NotFound from './pages/NotFound';


function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Onboarding />} />
        <Route path='/auth' element={<Authentication />} />
        <Route path='/reset' element={<Reset />} />
        <Route path="/" element={<Navigation />}>
          <Route path="home" element={<Home />} />
          <Route path="explore" element={<Explore />} />
          <Route path="favorite" element={<Favorite />} />
          <Route path="profile" element={<Profile />} />
        </Route>
        <Route path='*' element={<NotFound />} />
      </Routes>
    </Router>

  );
}

export default App;
