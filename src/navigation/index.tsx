import React from 'react';
import AuthNavigator from './AuthNavigator'; // Auth-related screens
import MainNavigator from './MainNavigator.tsx'; // Main app navigation

const AppNavigator = () => {
  const isAuthenticated = false; // Access auth state

  return <>{isAuthenticated ? <MainNavigator /> : <AuthNavigator />}</>;
};

export default AppNavigator;
