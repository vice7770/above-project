import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './index';
import AddEpisode from './AddEpisode/index';
import Details from './Details/index';
import Layout from './Layout';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/addEpisode" element={<AddEpisode />} />
          <Route path="/details/:id" element={<Details />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
