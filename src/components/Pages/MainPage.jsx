import './MainPage.css';

import ProjectList from '../ProjectList/ProjectList';
import Header from '../Header/Header';

function MainPage() {
  return (
    <div className="main-page">
      <Header />

      <ProjectList />
    </div>
  );
}

export default MainPage;
