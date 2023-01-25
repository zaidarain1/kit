import { useEffect } from 'react';
import { useOpenConnectModal } from '@ethconnect/core'
import { useConnect } from 'wagmi'
import logo from './logo.svg';
import './Homepage.css';

function Homepage() {
  const connect = useConnect()
  console.log('react app use connect....', connect)
  const openConnectModal = useOpenConnectModal()

  useEffect(() => {
    console.log('open connect modall....////////', openConnectModal)
    if (openConnectModal) {
      openConnectModal(true)
    }
  }, [openConnectModal])
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default Homepage;
