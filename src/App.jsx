import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Service from './pages/Service';

import Service2 from './pages/Service2';
import Service3 from './pages/Service3';
import Service4 from './pages/Service4';
import ServiceDetails from './pages/ServiceDetails';
import Project from './pages/Project';
import ProjectDetails from './pages/ProjectDetails';
import ProjectMasonary from './pages/ProjectMasonary';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="service" element={<Service />} />
          <Route path="service2" element={<Service2 />} />
          <Route path="service3" element={<Service3 />} />
          <Route path="service4" element={<Service4 />} />
          <Route path="service-details" element={<ServiceDetails />} />
          <Route path="project" element={<Project />} />
          <Route path="project-details" element={<ProjectDetails />} />
          <Route path="project-masonary" element={<ProjectMasonary />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
