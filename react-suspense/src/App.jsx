import React, { useState,lazy, Suspense } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
const UserList = React.lazy(()=>import('./components/UserList'))
function App() {

  return (
    <Suspense fallback={<Loading />}>
      <UserList />
    </Suspense>
  )
}

export default App

function Loading() {
  return <div>Loading...</div>;
}
