import { useState, useEffect } from 'react';

export function useAuth() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Check for authentication token in localStorage
    const authToken = localStorage.getItem('authToken');
    setIsAuthenticated(!!authToken);
  }, []);

  const login = () => {
    // Implement login logic here
    localStorage.setItem('authToken', 'dummyToken');
    setIsAuthenticated(true);
  };

  const logout = () => {
    // Implement logout logic here
    localStorage.removeItem('authToken');
    setIsAuthenticated(false);
  };

  return { isAuthenticated, login, logout };
}