import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function MyButton() {
  return (
    <button>
      hey ur changed as billav2 in git
    </button>
     <button>
      hey thisis a new button added!!
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
      <MyButton />
    </div>
  )
}
