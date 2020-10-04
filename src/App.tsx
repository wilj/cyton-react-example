import React from 'react';
import logo from './logo.svg';
import './App.css';
import {AuthProvider, useAuth} from 'cyton-react'

function SayHello() {
  const {auth, login, logout} = useAuth()
  
  if (auth && auth.user) {
    return  <>
      <div>Hello {auth.user.preferredUsername}</div>
      <div><a onClick={logout}>Log out</a></div>
    </>
  }
  return <a onClick={login}>Log in</a>
}
function App() {
  return (
    <AuthProvider baseDomain="cyton.biz" realm="cyton" clientId="cyton-dev" apiDomain="admin.cyton.biz">
      <SayHello />
    </AuthProvider>
  );
}

export default App;
