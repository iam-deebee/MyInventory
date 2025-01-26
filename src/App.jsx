import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function MyButton() {
  return (
    <button>
      hey this is changed in local
      yes it iss
<<<<<<< HEAD
      hvjnkml
=======
      <button>
      hey this is changed in local
      yes it iss
    </button>
>>>>>>> 8f48619c8cb5f7e1e6c1a9280226f7a7cb5ab580
    </button>
  );
}

export default function MyApp() {
  return (
    <div>
      <h1>Welcome to my app</h1>
      <h1>New heading added in Local</h1>
      <h1>New heading2 added in Local</h1>
      <h1>New heading3 added in Local</h1>
      <h1>New heading4 added in Local</h1>
      <h1>New heading5 added in Local</h1>
      <MyButton />
    </div>
  )
}
