import React from 'react';
import './App.css';

function App() {
  const connectToMetamask = async () => {
    // Scroll to the connect page section immediately upon clicking the button
    document.querySelector('.connect-page').scrollIntoView({ behavior: 'smooth' });

    // Delay the MetaMask connection to allow the page to scroll
    setTimeout(async () => {
      if (window.ethereum) {
        try {
          // Request account access
          await window.ethereum.request({ method: 'eth_requestAccounts' });
          // Add Hypra Mainnet to MetaMask
          await window.ethereum.request({
            method: 'wallet_addEthereumChain',
            params: [{
              chainId: '0x97ec5', // Correct hexadecimal version of 622277
              chainName: 'Hypra Mainnet',
              nativeCurrency: {
                name: 'Hypra',
                symbol: 'HYP',
                decimals: 18,
              },
              rpcUrls: ['https://rpc.hypra.network/'],
              blockExplorerUrls: ['https://explorer.hypra.network/']
            }],
          });
          console.log('Connected to MetaMask and added Hypra Mainnet');
        } catch (addError) {
          console.error('Error adding Hypra Mainnet to MetaMask', addError);
        }
      } else {
        console.error('MetaMask is not installed');
      }
    }, 100); // Adjust delay as necessary
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToMiningInfo = () => {
    document.querySelector('.mining-info-section').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="app-container">
      <div className="navigation">
      <button className="nav-button" onClick={scrollToMiningInfo}>Mining</button> {/* Added onClick here */}
        <a href="https://explorer.hypra.network/" target="_blank" rel="noopener noreferrer" className="nav-button">Explorer</a>
        <a href="https://bridge.hypra.network/" target="_blank" rel="noopener noreferrer" className="nav-button">Bridge</a>
        <button className="nav-button" onClick={connectToMetamask}>Connect to Metamask</button>
      </div>
      <div className="main-container">
        <div className="logo-wrapper">
          <img src={`${process.env.PUBLIC_URL}/resized_hypra_logo.png`} alt="Logo" className="logo" />
        </div>
        <div className="cube-container">
          <div className="cube">
            <div className="face"></div>
            <div className="face"></div>
            <div className="face"></div>
            <div className="face"></div>
            <div className="face"></div>
            <div className="face"></div>
          </div>
        </div>
        <div className="intro-text">
          <h2>New standard in EVM blockchains.</h2>
          <p>Hyper is proof of work, tokens, NFTs, and smart contracts all on one network</p>
        </div>
      </div>
      <div className="features-section">
        <div className="feature-item">
          <h3>Lowest cost</h3>
          <p>7 second blocktime and lower block fees.</p>
        </div>
        <div className="feature-item">
          <h3>Global access</h3>
          <p>Decentralized blockchain with no barriers or limitations.</p>
        </div>
        <div className="feature-item">
          <h3>Asic Resistant</h3>
          <p>Brand new algorithm EthashB3 block ASICs off the network.</p>
        </div>
      </div>
      <div className="download-section">
        <a href="https://github.com/Rethereum-blockchain/go-rethereum/releases/tag/v1.13.5" target="_blank" rel="noopener noreferrer">
          <button className="download-node-button">Download Node</button>
        </a>
        <p className="download-description">
          DOWNLOAD THE GETH NODE<br/>
          Run your own node for safe network usage.<br/>
          All node releases are compiled for Windows, Mac, and Linux for both x86 and Arm processors.<br/>
          The latest release is v1.13.5.
        </p>
      </div>
      <div className="new-cubes-container">
        {[1.67, 3.33, 5].map((delay, index) => (
          <div key={index} className="new-cube" style={{ animationDelay: `${delay}s` }}>
            <div className="face front"></div>
            <div className="face back"></div>
            <div className="face left"></div>
            <div className="face right"></div>
            <div className="face top"></div>
            <div className="face bottom"></div>
          </div>
        ))}
      </div>
      

  
  <div className="mining-info-section">
    <h1>Mining Hypra</h1>
    <p>Proof-of-Work is how we like it</p>
    <div className="mining-details">
      <div className="mining-detail efficient">
        <h2>Efficient</h2>
        <p>EthashB3 is upto 38% more efficient when compared to Ethash.</p>
      </div>
      <div className="mining-detail publicly-tradable">
        <h2>Publicly Tradable</h2>
        <p>The cryptocurrency is available to trade on various Exchanges and Swap Protocols.</p>
      </div>
      <div className="mining-detail block-rewards">
        <h2>Block Rewards</h2>
        <p>The current block reward is 4.0, Uncle blocks are rewarded 0.1. Blocks which include uncle blocks gain an extra 0.1</p>
      </div>
      <div className="mining-detail asic-resistant">
        <h2>ASIC Resistant</h2>
        <p>EthashB3 has been carefully designed to be ASIC resistant, utilizing a new hashing algorithm Blake3 and memory DAG.</p>
      </div>
      <div className="mining-detail faster-block-times">
        <h2>Faster block times</h2>
        <p>The target blocktime is 7 seconds, this allows for faster transactions and cheaper fees.</p>
      </div>
      <div className="mining-detail community-driven">
        <h2>Community Driven</h2>
        <p>Hypra is not a company, has no investors and only goal is be community owned.</p>
      </div>
    </div>
    <div className="why-mine-hypra">
      <h2>Why mine Hypra?</h2>
      <p>Hypra is a Proof-of-Work only coin. All block rewards are rewarded to the miner including block fees.</p>
      <ul className="mining-benefits">
        <li>ASIC Resistant Algorithm</li>
        <li>7 Second Block time</li>
        <li>Block reward + transaction fees</li>
        <li>Transaction tipping</li>
        <li>Decentralized</li>
        <li>Programmable</li>
        <li>Fast</li>
        <li>Cheap</li>
      </ul>
    </div>
    <div className="mining-pools">
  <p>Over 20 mining pools to start mining Hypra today!</p>
  <a href="https://miningpoolstats.stream/hypra" target="_blank" rel="noopener noreferrer">
    <button className="find-pool-button">Find 1 for you</button>
  </a>
</div>
<div className="listed-exchanges">
  <h2>Our listed exchanges</h2>
  <table className="exchange-table">
    <thead>
      <tr>
        <th>NAME</th>
        <th>PAIRS</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Safe Trade</td>
        <td>HYP/USDT</td>
      </tr>
      <tr>
        <td>Xeggex</td>
        <td>HYPR/USDT, HYPR/BTC</td>
      </tr>
      <tr>
        <td>Trade Ogre</td>
        <td>HYP/USDT</td>
      </tr>
      <tr>
        <td>NonKYC</td>
        <td>HYP/USDT, HYP/ETH</td>
      </tr>
      <tr>
        <td>Exbitron</td>
        <td>HYP/USDT, HYP/ETH, HYP/DOGE</td>
      </tr>
      <tr>
        <td>BitMart</td>
        <td>HYP/USDT</td>
      </tr>
      {/* Add more rows as needed based on the content from the image */}
    </tbody>
  </table>
</div>
  </div>

  

      <div className="connect-page">
        <div className="token-info">
          <p><strong>Network name:</strong> Hypra Mainnet</p>
          <p><strong>New RPC URL:</strong> https://rpc.hypra.network/</p>
          <p><strong>Chain ID:</strong> 622277</p>
          <p><strong>Currency symbol:</strong> HYP</p>
          <p><strong>Block explorer URL:</strong> <a href="https://explorer.hypra.network/" target="_blank" rel="noopener noreferrer">https://explorer.hypra.network/</a></p>
        </div>
        <button className="back-to-top-button" onClick={scrollToTop}>Back to Top</button>
      </div>
      <footer className="footer-container">
  <div className="footer-section">
    <h4>MARKETS</h4>
    <ul>
      <li><a href="https://www.bitmart.com/trade/en-US?symbol=HYP_USDT" target="_blank" rel="noopener noreferrer">BitMart</a></li>
      <li><a href="https://xeggex.com/market/HYPRA_USDT?ref=64dfe1e74a8c2ffaaf1743e2" target="_blank" rel="noopener noreferrer">Xeggex</a></li>
      <li><a href="https://tradeogre.com/exchange/HYP-USDT" target="_blank" rel="noopener noreferrer">TradeOgre</a></li>
    </ul>
  </div>
  <div className="footer-section">
    <h4>INFORMATION</h4>
    <ul>
      <li><a href="https://github.com/Rethereum-blockchain" target="_blank" rel="noopener noreferrer">Github</a></li>
      <li><a href="https://github.com/Rethereum-blockchain/go-rethereum" target="_blank" rel="noopener noreferrer">Source Code</a></li>
      <li><a href="https://github.com/Rethereum-blockchain/whitepaper/blob/master/Rethereum_Whitepaper.pdf" target="_blank" rel="noopener noreferrer">Whitepaper</a></li>
      <li><a href="https://explorer.hypra.network/" target="_blank" rel="noopener noreferrer">Blockchain Explorer</a></li>
    </ul>
  </div>
  <div className="footer-section">
    <h4>CONTACT US</h4>
    <ul>
      <li><a href="https://twitter.com/HypraNetwork" target="_blank" rel="noopener noreferrer">Twitter</a></li>
      <li><a href="https://discord.com/invite/xCB4AJDEFb" target="_blank" rel="noopener noreferrer">Discord</a></li>
      <li><a href="https://t.me/HypraBlockchain" target="_blank" rel="noopener noreferrer">Telegram</a></li>
    </ul>
  </div>
  <div className="footer-disclaimer">
    <p>
      Copyright © 2023 Hypra Network. All Rights Reserved.
    </p>
    <p>
      Cryptocurrency involves high risks and may not be suitable for all investors. The value of cryptocurrencies is volatile and can fluctuate significantly in response to market conditions, regulatory developments, technical issues, and other factors. You should only trade with money that you can afford to lose and be aware of the legal status of cryptocurrency in your jurisdiction. Some countries may prohibit or restrict the use of cryptocurrency or impose sanctions on its users. You are solely responsible for complying with the laws and regulations of your country and any other applicable jurisdictions before engaging in any cryptocurrency-related activities.
    </p>
  </div>
</footer>

    </div>
  );
}

export default App;
