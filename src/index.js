import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
function App() {
  return (
    <>
    <div className='container-fluid'>
      <header>
        <div>
          <h1>Hi Everyone i am Jackmatt</h1>
          <p>The Coding Journey is really sweet and enjoyable
            <br></br>Lets break in to it Together
          </p>
        </div>
      </header>
    </div>
    </>
  )
}
const mattme = document.getElementById('root');
const root = ReactDOM.createRoot(mattme);
root.render(<App/>)
