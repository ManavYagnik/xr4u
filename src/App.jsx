
import './App.css'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Route, Routes } from 'react-router';
import HomePage from './components/pages/HomePage';
import Blog1 from './components/pages/Blog1';
import BlogPage from './components/pages/BlogPage';
import Blog2 from './components/pages/Blog2';

function App() {
return(
<div  className='overflow-hidden'>
<Navbar />
    <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blogs" element={<BlogPage />} />
        <Route path="/" element={<Blog1 />} />
        <Route path="/" element={<Blog2 />} />
    </Routes>
<Footer /> 
</div>
);
}

export default App
