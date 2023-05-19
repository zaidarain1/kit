import { useContext } from 'react'
import { useOpenConnectModal } from '@0xsequence/kit-core'
import { useOpenWalletModal } from '@0xsequence/kit-wallet'
import { useCheckoutModal, CheckoutSettings } from '@0xsequence/kit-checkout'
import { useDisconnect, useAccount, useWalletClient, usePublicClient } from 'wagmi'
import { ModalThemeContext } from '../contexts'

import './Homepage.css';

function Homepage() {
  const { setIsDarkMode, isDarkMode } = useContext(ModalThemeContext)
  const { address, connector, isConnected } = useAccount()
  const openConnectModal = useOpenConnectModal()
  const openWalletModal = useOpenWalletModal()
  const { triggerCheckout } = useCheckoutModal()
  const { disconnect } = useDisconnect()
  const { data: walletClient } = useWalletClient()
  const publicClient = usePublicClient()

  const signMessage = async () => {
    if (!walletClient) {
      return
    }

    try {
      const message = `Two roads diverged in a yellow wood,
        Robert Frost poet
        
        And sorry I could not travel both
        And be one traveler, long I stood
        And looked down one as far as I could
        To where it bent in the undergrowth;
        
        Then took the other, as just as fair,
        And having perhaps the better claim,
        Because it was grassy and wanted wear;
        Though as for that the passing there
        Had worn them really about the same,
        
        And both that morning equally lay
        In leaves no step had trodden black.
        Oh, I kept the first for another day!
        Yet knowing how way leads on to way,
        I doubted if I should ever come back.
        
        I shall be telling this with a sigh
        Somewhere ages and ages hence:
        Two roads diverged in a wood, and I—
        I took the one less traveled by,
        And that has made all the difference.`
  
      // sign
      const sig = await walletClient.signMessage({
        message
      })
      console.log('signature:', sig)

      const [account] = await walletClient.getAddresses()
  
      const isValid = await publicClient.verifyMessage({
        address: account,
        message,
        signature: sig
      })

      console.log('isValid?', isValid)
    } catch (e) {
      console.error(e)
    }
  }

  const abi = [
    {
      "inputs": [
        {
          "internalType": "uint256[]",
          "name": "_tokenIds",
          "type": "uint256[]"
        },
        {
          "internalType": "uint256[]",
          "name": "_tokensBoughtAmounts",
          "type": "uint256[]"
        },
        {
          "internalType": "uint256",
          "name": "_maxCurrency",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_deadline",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "_recipient",
          "type": "address"
        },
        {
          "internalType": "address[]",
          "name": "_extraFeeRecipients",
          "type": "address[]"
        },
        {
          "internalType": "uint256[]",
          "name": "_extraFeeAmounts",
          "type": "uint256[]"
        }
      ],
      "name": "buyTokens",
      "outputs": [
        {
          "internalType": "uint256[]",
          "name": "",
          "type": "uint256[]"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ]

  const getCheckoutSettings = () => {
    const deadline = String(Math.round(new Date().getTime()/ 1000) + 3600)

    const usdcAmount = '3'

    const checkoutSettings: CheckoutSettings = {
      chainId: 137,
      receiptTitle: 'Custom Sequence Kit Checkout Demo',
      abi: JSON.stringify(abi),
      methodName: 'buyTokens',
      methodArguments: {
        "_recipient":"$WALLET",
        "_deadline": deadline,
        "_maxCurrency": `${Number(usdcAmount) * 10 ** 6}`,
        "_tokenIds":["66616"],
        "_tokensBoughtAmounts":["100"],
        "_extraFeeRecipients":[],
        "_extraFeeAmounts":[]
      },
      recipientAddress: address || '',
      contractAddress: '0x8bb759bb68995343ff1e9d57ac85ff5c5fb79334',
      currency: 'USDC',
      currencyAmount: `${usdcAmount}`,
      collectionContractAddress: '0x631998e91476da5b870d741192fc5cbc55f5a52e',
      onSuccess: () => { console.log('success') },
      onError: () => { console.log('error') },
    }

    return checkoutSettings
  }

  return (
    <div className="App">
      <header className="App-header">
        <button className="Button" onClick={() => { setIsDarkMode && setIsDarkMode(!isDarkMode) }}>Change Modal Theme</button>
        <div>Modal theme: {isDarkMode ? 'dark' : 'light'}</div>
        {isConnected ? (
          <>
            <button className="Button" onClick={() => { disconnect() }}>
              Disconnect
            </button>
            <button className="Button" onClick={() => { openWalletModal && openWalletModal(true) }}>
              Open Wallet UI
            </button>
            <button className="Button" onClick={() => { triggerCheckout && triggerCheckout(getCheckoutSettings()) }}>
              Open Checkout UI
            </button>
            <button className="Button" onClick={() => { signMessage() }}>
              Sign Message
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
