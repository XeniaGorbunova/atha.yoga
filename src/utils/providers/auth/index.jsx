import React, {
  createContext, useEffect, useMemo, useState,
} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clearMessage } from '../../../slices/message';
import { loginSlice, registerSlice, logoutSlice } from '../../../slices/auth';

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const { user, isLoggedIn } = useSelector(state => state.auth);
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(clearMessage());
  }, [dispatch]);

  const register = ({ email, password }, callback) => {
    setIsLoading(true);
    dispatch(registerSlice({ email, password }))
      .unwrap()
      .then(callback)
      .catch(() => {
        setIsLoading(false);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const login = ({ email, password }, callback) => {
    setIsLoading(true);
    dispatch(loginSlice({ email, password }))
      .unwrap()
      .then(callback)
      .catch(() => {
        setIsLoading(false);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const logout = () => {
    dispatch(logoutSlice());
  };

  const value = useMemo(() => ({
    user, isLoggedIn, isLoading, login, register, logout,
  }), [user]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
