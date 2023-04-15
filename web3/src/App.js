import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from 'react-bootstrap/Modal';
import React, { useState } from 'react';

function Character( {value}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  var str = 'images/' + value + '.png'
  var explanation = texts[value]
  var title = titles[value]
  var link = links[value]
  return <>
      <Modal
          show={show}
          onHide={handleClose}
          keyboard={true}
          centered
      >
        <Modal.Body>
        <h1 className='title'> {title} </h1>
        <h2 className='body'> {explanation} </h2>
        <a href={link} target="_blank">
          <button class="button-18" role="button">More Info</button>
        </a>
        </Modal.Body>
      </Modal>
      <div className="container">
        <img src={str} alt={value} onClick={handleShow} height="300" width="auto"/>
      </div>
    </>
}


function App() {
  return (
    <div className={'background-grey'}>
      <div className="flexbox-header">
        <div>
          <h1 className='header'>Web3 from A to Z</h1>
          <br/>
          <br/>
          <h2 className='subheader'> This website provides easy to understand explanations for basic web3 terminology to let you dive into blockchain and crypto.</h2>
        </div>
        <img src="images/monster.png" height="500" width="auto"/>
      </div>
      <div className="flexbox-container">
        <Character value="A" />
        <Character value="B" />
        <Character value="C" />
      </div>
      <div className="flexbox-container">
        <Character value="D" />
        <Character value="E" />
        <Character value="F" />
      </div>
      <div className="flexbox-container">
        <Character value="G" />
        <Character value="H" />
        <Character value="I" />
      </div>
      <div className="flexbox-container">
        <Character value="J" />
        <Character value="K" />
        <Character value="L" />
      </div>
      <div className="flexbox-container">
        <Character value="M" />
        <Character value="N" />
        <Character value="O" />
      </div>
      <div className="flexbox-container">
        <Character value="P" />
        <Character value="Q" />
        <Character value="R" />
      </div>
      <div className="flexbox-container">
        <Character value="S" />
        <Character value="T" />
        <Character value="U" />
      </div>
      <div className="flexbox-container">
        <Character value="V" />
        <Character value="W" />
        <Character value="X" />
      </div>
      <div className="flexbox-container">
        <Character value="Y" />
        <Character value="Z" />
      </div>
      </div>
  );
 
}

export default App;

const titles = new Map();
const texts = new Map();
const links = new Map();

titles["A"] = "Account"
texts["A"] = "An account is an object containing an address, balance, nonce, optional storage and code. Accounts can be user-controlled or smart contracts."
links["A"] = "https://ethereum.org/en/developers/docs/accounts/"

titles["B"] = "Block"
texts["B"] = "Transactions are bundled in blocks. A block contains some metadata including the hash of the previous block. This guarantees that no fraudulent block can be introduced, as otherwise all successive blocks would be invalid."
links["B"] ="https://ethereum.org/en/developers/docs/blocks/"

titles["C"] = "Consensus"
texts["C"] = "Nodes in the network need to agree on an ordering of transactions, this ordering is achieved by a consensus protocol."
links["C"] = "https://ethereum.org/en/developers/docs/consensus-mechanisms/"

titles["D"] = "Decentralization"
texts["D"] = "Decentralization is one of the core philosophies of web3. It means that there is no central body that controls the processes and can make decisions."
links["D"] = "https://ethereum.org/en/governance/#decentralized-governance"

titles["E"] = "Ethereum Improvement Proposal"
texts["E"] = "Ethereum Improvement Proposals (EIPs) are standards specifying potential new features or processes for Ethereum. EIPs contain technical specifications for the proposed changes and act as the “source of truth” for the community. Network upgrades and application standards for Ethereum are discussed and developed through the EIP process."
links["E"] = "https://ethereum.org/en/eips/"

titles["F"] = "Fork"
texts["F"] = "Forks happen when major technical upgrades or changes need to be made to the network. They typically stem from Ethereum Improvement Proposals (EIPs) and change the \"rules\" of the protocol. All participants need to choose between the forks by running either the old or an updated version of the node software."
links["F"] = "https://ethereum.org/en/history/#accordion-button-:R40slalaeiau:"

titles["G"] = "Gas"
texts["G"] = "Gas is a unit that measures computational effort required to execute specific operations on the Ethereum network, for example adding two numbers costs 3 gas. Gas price refers to the price a user is willing to pay per unit of gas. The cost of a transaction is calculated as gas * gasPrice."
links["G"] = "https://ethereum.org/en/developers/docs/gas/"

titles["H"] = "Hash"
texts["H"] = "Cryptographic hash functions are an important cryptographic tool and form a separate area in cryptography. Cryptographic hash functions generate a character string with a fixed length from arbitrarily long data records and serve like a digital fingerprint."
links["H"] = ""

titles["I"] = "Issuance"
texts["I"] = "The issuance of ETH is the process of creating ETH that did not previously exist. The burning of ETH is when existing ETH gets destroyed, removing it from circulation. The rate of issuance and burning gets calculated on several parameters, and the balance between them determines the resulting inflation/deflation rate of ether."
links["I"] = "https://ethereum.org/en/roadmap/merge/issuance/#components-of-eth-issuance"

titles["J"] = "Journey"
texts["J"] = ""
links["J"] = "https://ethereum.org/en/guides/#ethereum-guides"

titles["K"] = "Key"
texts["K"] = "Ethereum is based on public private key cryptography. Each party has two keys: a public key and a private key. The public key is accessible to everyone. The private key remains secret. Transactions are signed with the private key to prove ownership of the funds"
links["K"] = "https://ethereum.org/en/developers/docs/consensus-mechanisms/pos/keys/"

titles["L"] = "Layer 2"
texts["L"] = "Layer 2 (L2) is a collective term to describe a specific set of Ethereum scaling solutions. A layer 2 is a separate system that extends Ethereum and inherits the security guarantees of Ethereum."
links["L"] = "https://ethereum.org/en/layer-2/"

titles["M"] = "Mainnet"
texts["M"] = "When people and exchanges discuss ETH prices, they're talking about the main blockchain. Mainnet ETH. Mainnet is the primary public Ethereum production blockchain, where actual-value transactions occur on the distributed ledger."
links["M"] = "https://ethereum.org/en/developers/docs/networks/"

titles["N"] = "Node"
texts["N"] = "Ethereum is a distributed system that consists of computers that run a node software. The node software connects to other nodes and verifies all blocks and transactions."
links["N"] = "https://ethereum.org/en/developers/docs/nodes-and-clients/"

titles["O"] = "Oracles"
texts["O"] = "Oracles are applications that source, verify, and transmit external information (i.e. information stored off-chain) to smart contracts running on the blockchain. Besides “pulling” off-chain data and broadcasting it on Ethereum, oracles can also “push” information from the blockchain to external systems. An example of the latter could be an oracle that unlocks a smart lock once the user sends the fee via an Ethereum transaction. Oracles act as a “bridge” connecting smart contracts on blockchains to off-chain data providers."
links["O"] = "https://ethereum.org/en/developers/docs/oracles/"

titles["P"] = "Proof of Stake"
texts["P"] = "Proof-of-Stake is the consensus mechanism used by Ethereum. In proof-of-work, miners prove they have capital at risk by expending energy. In proof-of-stake validators explicitly stake capital in the form of ETH into a smart contract on Ethereum. This staked ETH then acts as collateral that can be destroyed if the validator behaves dishonestly or lazily. The validator is responsible for checking that new blocks propagated over the network are valid and occasionally creating and propagating new blocks themselves."
links["P"] = "https://ethereum.org/en/developers/docs/consensus-mechanisms/pos/"

titles["Q"] = "Quantum Resistance"
texts["Q"] = "Quantum resistance refers to algorithms that withstand code-breaking efforts from quantum computers. These cryptographic algorithms are known as quantum-secure, post-quantum or quantum-safe formulas. Unlike current algorithms, quantum-resistant ones have much larger key sizes.Although quantum computers are probably decades away from being a genuine threat to modern cryptography, Ethereum is being built to be secure for centuries to come. This means making Ethereum quantum resistant as soon as possible."
links["Q"] = "https://ethereum.org/en/roadmap/future-proofing/#quantum-resistance"

titles["R"] = "Rollups"
texts["R"] = "Rollups perform transaction execution outside layer 1 and then the data is posted to layer 1 where consensus is reached. As transaction data is included in layer 1 blocks, this allows rollups to be secured by native Ethereum security.There are two different flavors of rollups: Optimistc rollups and zero knowledge rollups."
links["R"] = "https://ethereum.org/en/developers/docs/scaling/#rollups"

titles["S"] = "Smart Contract"
texts["S"] = "Smart contracts are uncensorable programs that run on Ethereum. They have a balance and can be the target of transactions. They are not controlled by a user, instead they are deployed to the network and run as programmed. User accounts can then interact with a smart contract by submitting transactions that execute a function defined on the smart contract. Smart contracts can define rules, like a regular contract, and automatically enforce them via the code. Smart contracts cannot be deleted by default, and interactions with them are irreversible."
links["S"] = "https://ethereum.org/en/developers/docs/smart-contracts/"

titles["T"] = "Transaction"
texts["T"] = "An Ethereum transaction refers to an action initiated by an externally-owned account (an account managed by a human, not a contract). For example, if Bob sends Alice 1 ETH, Bob's account must be debited and Alice's must be credited. This state-changing action takes place within a transaction. Transactions are signed with a private key."
links["T"] = "https://ethereum.org/en/developers/docs/transactions/"

titles["U"] = "Community"
texts["U"] = ""
links["U"] = "https://ethereum.org/en/community/"

titles["V"] = "Validator"
texts["V"] = "Validators receive new blocks from peers on the Ethereum network. The transactions delivered in the block are re-executed, and the block signature is checked to ensure the block is valid. The validator then sends a vote (called an attestation) in favor of that block across the network. Every 12 seconds a validator is chosen to bundle transactions together and produce a block."
links["V"] = "https://ethereum.org/en/staking/"

titles["W"] = "Wallet"
texts["W"] = "To receive or send cryptocurrency, you need a wallet. The wallet stores your private keys, which you can use to access and interact with decentralized applications, store digital assets and more."
links["W"] = "https://ethereum.org/en/wallets/"

titles["X"] = "0x"
texts["X"] = "Addresses are required to send and receive transactions on the blockchain. Both the addresses of externally owned accounts and smart contracts have the same format of 42 hexadecimal characters. They usually start with a 0x. The address for a contract is created when a contract is provisioned on the Ethereum blockchain."
links["X"] = "https://ethereum.org/en/wallets/"

titles["Y"] = "Y (Why)"
texts["Y"] = ""
links["Y"] = "https://ethereum.org/en/what-is-ethereum/"

titles["Z"] = "Zero Knowledge"
texts["Z"] = "A zero-knowledge protocol is a method by which one party (the prover) can prove to another party (the verifier) that something is true, without revealing any information apart from the fact that this specific statement is true."
links["Z"] = "https://ethereum.org/en/developers/docs/scaling/zk-rollups/"

//<a href="https://www.freepik.com/vectors/geometric-font">Image by rawpixel.com</a> on Freepik