import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import StaffDirectory from './pages/StaffDirectory';
import ITRequest from './pages/ITRequest';
import Tickets from './pages/Tickets';
import ToDoList from './pages/TodoList';
import Layout from './components/Layout';
import UserProfile from './pages/UserProfile';

import '../build.css';

function App() {
  return (
    <Router>
      <div className="bg-gray-200 text-white min-h-screen">
      <Layout title="Staff Dashboard"> 
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/staff" element={<StaffDirectory />} />
          <Route path="/it-request" element={<ITRequest />} />
          <Route path="/tickets" element={<Tickets />} />
          <Route path="/todo-list" element={<ToDoList />} />
          <Route path="/UserProfile" element={<UserProfile />} />
        </Routes>
      </Layout>
      </div>
    </Router>
  );
}

export default App;
