import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Character( {value}) {

  var str = 'images/' + value + '.png'
  var explanation = texts[value]
  var title = titles[value]

  return <>
    <div class="box">
      <img src={str}/>
      <div class="box-content">
        <h3 class="title">{title}</h3>
        <span class="post">{explanation}</span>
      </div>
      <ul class="icon">
        <li><a href="#"><i class="fa fa-search"></i></a></li>
        <li><a href="#"><i class="fa fa-link"></i></a></li>
      </ul>
    </div>
    </>
}

function App() {
  return (
    <div className={'background-grey'}>
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
      </div>
  );
 
}

export default App;

const titles = new Map();

const texts = new Map();

titles["A"] = "Address"
texts["A"] = "An account is an object containing an adress, balance, nonce, optional storage and code. Accounts can be user-controlled or used as smart contracts."

titles["B"] = "Block"
texts["B"] = "As the name suggests, the blockchain consists of a chain of several blocks. In these blocks are a lot of information. In addition, a block contains the hash of the previous block. This guarantees that no fraudulent block can be introduced, as otherwise all successive blocks would be invalid."

titles["C"] = "Consensus"
texts["C"] = "When a supermajority of nodes on the network all have the same blocks in their locally validated best blockchain."

titles["D"] = "Dezentralization"
texts["D"] = "Denztralization means that the control and execution of processes is not carried out by a central body."

titles["E"] = "Ethereum Improvement Protocol"
texts["E"] = "Ethereum Improvement Proposals (EIPs) are standards specifying potential new features or processes for Ethereum. EIPs contain technical specifications for the proposed changes and act as the “source of truth” for the community. Network upgrades and application standards for Ethereum are discussed and developed through the EIP process."

titles["F"] = "Fork"
texts["F"] = "Forks are when major technical upgrades or changes need to be made to the network – they typically stem from Ethereum Improvement Proposals (EIPs) and change the "rules" of the protocol."

titles["G"] = "Gas"
texts["G"] = "Gas refers to the unit that measures the amount of computational effort required to execute specific operations on the Ethereum network.Since each Ethereum transaction requires computational resources to execute, each transaction requires a fee. Gas refers to the fee required to execute a transaction on Ethereum, regardless of transaction success or failure."

titles["H"] = "Hash"
texts["H"] = "Cryptographic hash functions are an important cryptographic tool and form a separate area in cryptography. Cryptographic hash functions generate a character string with a fixed length from arbitrarily long data records and serve like a digital fingerprint. Requirements for this are uniqueness, reversibility, and collision resistance. Ethereum uses so-called secure hash algorithms."

titles["I"] = "Issuance"
texts["I"] = "The issuance of ETH is the process of creating ETH that did not previously exist. The burning of ETH is when existing ETH gets destroyed, removing it from circulation. The rate of issuance and burning gets calculated on several parameters, and the balance between them determines the resulting inflation/deflation rate of ether."

titles["K"] = "Key"
texts["K"] = "Ethereum is based on public private key cryptography. Each party has two keys: a public key and a private key. The public key is accessible to everyone. The private key remains secret."

titles["L"] = "Layer 2"
texts["L"] = "Layer 2 (L2) is a collective term to describe a specific set of Ethereum scaling solutions. A layer 2 is a separate blockchain that extends Ethereum and inherits the security guarantees of Ethereum."

titles["M"] = "Mainnet"
texts["M"] = "When people and exchanges discuss ETH prices, they're talking about the main environment. Mainnet ETH. Mainnet is the primary public Ethereum production blockchain, where actual-value transactions occur on the distributed ledger."

titles["N"] = "Node"
texts["N"] = ""

titles["O"] = "Oracles"
texts["O"] = "Oracles are applications that source, verify, and transmit external information (i.e. information stored off-chain) to smart contracts running on the blockchain. Besides “pulling” off-chain data and broadcasting it on Ethereum, oracles can also “push” information from the blockchain to external systems. An example of the latter could be an oracle that unlocks a smart lock once the user sends the fee via an Ethereum transaction. Oracles act as a “bridge” connecting smart contracts on blockchains to off-chain data providers. Without oracles, smart contract applications would only be able to access on-chain data. An oracle provides a mechanism for triggering smart contract functions using off-chain data."

titles["P"] = "Proof of Stake"
texts["P"] = "Proof-of-stake underlies certain consensus mechanisms used by blockchains to achieve distributed consensus. In proof-of-work, miners prove they have capital at risk by expending energy. Ethereum uses proof-of-stake, where validators explicitly stake capital in the form of ETH into a smart contract on Ethereum. This staked ETH then acts as collateral that can be destroyed if the validator behaves dishonestly or lazily. The validator is then responsible for checking that new blocks propagated over the network are valid and occasionally creating and propagating new blocks themselves."

titles["Q"] = ""
texts["Q"] = ""

titles["R"] = "Rollups"
texts["R"] = "Rollups perform transaction execution outside layer 1 and then the data is posted to layer 1 where consensus is reached. As transaction data is included in layer 1 blocks, this allows rollups to be secured by native Ethereum security.There are two different rollupS: Optimistc rollup and zero knowledge rollup."

titles["S"] = "Smart Contract"
texts["S"] = "Smart contracts are a type of Ethereum account. This means they have a balance and can be the target of transactions. However they're not controlled by a user, instead they are deployed to the network and run as programmed. User accounts can then interact with a smart contract by submitting transactions that execute a function defined on the smart contract. Smart contracts can define rules, like a regular contract, and automatically enforce them via the code. Smart contracts cannot be deleted by default, and interactions with them are irreversible."

titles["T"] = "Transaction"
texts["T"] = "An Ethereum transaction refers to an action initiated by an externally-owned account, in other words an account managed by a human, not a contract. For example, if Bob sends Alice 1 ETH, Bob's account must be debited and Alice's must be credited. This state-changing action takes place within a transaction.|

titles["U"] = ""
texts["U"] = ""

titles["V"] = "Validator"
texts["V"] = "validators receive new blocks from peers on the Ethereum network. The transactions delivered in the block are re-executed, and the block signature is checked to ensure the block is valid. The validator then sends a vote (called an attestation) in favor of that block across the network."

titles["W"] = "Wallet"
texts["W"] = "To receive or send cryptocurrency, you need a wallet. The wallet stores your private keys, which you can use to access and interact with decentralized applications, store digital assets and more."

titles["X"] = "Adresses"
texts["X"] = "Addresses are required to send and receive transactions on the blockchain. The Contract Address is usually created when a contract is provisioned on the Ethereum blockchain. Both Externally Owned and Contract Addresses have the same format of 42 hexadecimal characters. They usually start with a 0x."

titles["Y"] = ""
texts["Y"] = ""

titles["Z"] = "Zero Knowledge"
texts["Z"] = "A zero-knowledge protocol is a method by which one party (the prover) can prove to another party (the verifier) that something is true, without revealing any information apart from the fact that this specific statement is true."

//<a href="https://www.freepik.com/vectors/geometric-font">Image by rawpixel.com</a> on Freepik