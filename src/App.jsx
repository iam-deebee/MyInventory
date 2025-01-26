import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function MyButton() {
  return (
    <button>
      hey ur changed billa in git
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
      <MyButton />
    </div>
    
}
