import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LandingPage from './src/LoginAndSignup/LandingPage';
import Signup from './src/LoginAndSignup/Signup';
import Login from './src/LoginAndSignup/Login';
import { AuthProvider } from './src/Context/AuthContext';
import AppNav from './AppNav';


const Stack = createNativeStackNavigator();

function App() {
  return (
    <AuthProvider>

      <AppNav />

    </AuthProvider>
  );
}

export default App;