import Chat from '@/components/chat/index.jsx';
import Login from '@/components/login/index.jsx';
import NotFound from '@/pages/404/index.jsx';
import { useState } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

const App = () => {
  const [user, setUser] = useState(null);
  const [secret, setSecret] = useState(null);
  const isAuth = Boolean(user) && Boolean(secret);
  return (
    <iv className="app">
      <Routes>
        <Route
          path="/"
          element={
            isAuth ? (
              <Navigate to="/chat" />
            ) : (
              <Login setUser={setUser} setSecret={setSecret} />
            )
          }
        />
        <Route
          path="/chat"
          element={
            isAuth ? <Chat user={user} secret={secret} /> : <Navigate to="/" />
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </iv>
  );
};

export default App;
