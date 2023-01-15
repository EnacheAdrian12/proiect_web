import Login from './Components/Login';
import Register from './Components/Register';
import FrontPage from './Components/FirstPage';
import AddPosts from './Components/addPosts';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Profile from './Components/Profile';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="frontpage" exact element={<FrontPage />} />
      <Route path='addpost' element={<AddPosts/>}/>
      <Route path='profile' element={<Profile/>}/>
    </Routes>
  );
}

export default App;
