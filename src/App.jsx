import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Layout from './components/shared/Layout';
import Dashboard from './components/Dashboard';
import Account from './components/Account';
import Settings from './components/Settings';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path='account' element={<Account />} />
          <Route path='settings' element={<Settings />} />
        </Route>
        <Route path='login' element={<div>Log In!</div>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
