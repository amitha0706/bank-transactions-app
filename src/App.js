import { Routes, Route } from 'react-router-dom';

import RecentTransactions from './pages/RecentTransactions';
import AllTransactions from './pages/AllTransactions';

function App() {
  return (
    <Routes>
      <Route path="/" element={<RecentTransactions />} />
      <Route path="/transactions" element={<AllTransactions />} />
    </Routes>
  );
}

export default App;