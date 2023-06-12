import { Blockchain, Transaction } from './blockchain';
import { ec as _ec } from 'elliptic';
const ec = new _ec('secp256k1');

const myKey = ec.keyFromPrivate('0cd64e6c817e7dc0b2576d3d777e1639a0800a3a3395b16cbd9e861c7791fbd8');
const myWallet = myKey.getPublic('hex');

let coin = new Blockchain();

const trans1 = new Transaction(myWallet, 'public key', 10);
trans1.signTransaction(myKey);
coin.AddTransaction(trans1);



console.log("Mining....");

coin.minePendingTransactions(myWallet);
coin.minePendingTransactions(myWallet);

console.log("Balance: " + coin.getBalanceOfAddress(myWallet));
//console.log(JSON.stringify(coin, null, 4));

//console.log("blockchain valid? " + coin.isChainValid());
