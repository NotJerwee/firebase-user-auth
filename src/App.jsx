import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from 'react';
import { auth } from './firebase';
import { onAuthStateChanged } from 'firebase/auth';

// Pages  
import { Home } from './pages/Home';
import { Signup } from './pages/Signup';
import { Login } from './pages/Login';
import { Private } from './pages/Private';
import { ProtectedRoute } from './components/ProtectedRoute';

function App() {
  const [user, setUser] = useState(null);
  const [isFetching, setIsFetching] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
      setIsFetching(false); 
    });
    return () => unsubscribe();
  }, []);

  if (isFetching) {
    return <h2>Loading...</h2>;
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup user={user}/>} />
        <Route path="/login" element={<Login user={user}/>} />
        <Route path="/private" 
          element={<ProtectedRoute user={user}><Private /></ProtectedRoute>} 
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
