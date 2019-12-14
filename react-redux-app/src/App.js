import React from 'react';
import { Jumbotron, Button } from 'reactstrap';
import './App.css';

// Component
import MemberList from './components/MemberList';

function App() {
  const link = () => {
    window.location.href='https://discord.gg/mF6WPT';
  };

  return (
    <div className="App">
      <Jumbotron inverse style={{color: "black", background: "rgba(0, 0, 0, 0.3)"}}>
        <h1 className="display-3">The Overlord's Blades</h1>
        {/* <p className="lead">This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.</p> */}
        <hr className="my-2" />
        {/* <p>It uses utility classes for typography and spacing to space content out within the larger container.</p> */}
        <p className="lead">
          <Button inverse style={{color: "black", border: "1px solid black"}} onClick={link}>Click to join our Discord!</Button>
        </p>
      </Jumbotron>
      <MemberList />
    </div>
  );
}

export default App;
