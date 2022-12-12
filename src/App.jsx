import './App.css';
import { Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar/Sidebar';
import MainPage from './components/Pages/MainPage';
import ProjectPage from './components/Pages/ProjectPage';

function App() {
  return (
    <div className="App">
      <Sidebar />

      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/:title" element={<ProjectPage />} />
      </Routes>

    </div>
  );
}

export default App;
