import { useOpenConnectModal } from '@ethconnect/core'
import { useDisconnect, useAccount } from 'wagmi'
import './Homepage.css';

function Homepage() {
  const { address, connector, isConnected } = useAccount()
  const openConnectModal = useOpenConnectModal()
  const { disconnect } = useDisconnect()

  return (
    <div className="App">
      <header className="App-header">
        {isConnected ? (
          <>
            <button className="Button" onClick={() => { disconnect() }}>
              Disconnect
            </button>
            <div>Connected wallet: {connector?.name}</div>
            <div>Connected address: {address}</div>
          </>
        ) : (
          <button className="Button" onClick={() => { openConnectModal && openConnectModal(true) }}>
            Connect
          </button>
        )}

      </header>
    </div>
  );
}

export default Homepage;
