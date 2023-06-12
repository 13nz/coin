import { Injectable } from '@angular/core';
// @ts-ignore
import Blockchain from '../../blockchain/blockchain';
// @ts-ignore
import Transaction from '../../blockchain/blockchain';
// @ts-ignore
import Block from '../../blockchain/blockchain';
import EC from 'elliptic';

@Injectable({
  providedIn: 'root'
})
export class BlockchainService {

  public blockchainInstance = new Blockchain();
  public walletKeys: Array<IWalletKey> = [];

  constructor() {
    this.blockchainInstance.difficulty = 2;
    this.blockchainInstance.minePendingTransactions('my-wallet-address');

    this.generateWalletKeys();
   }

   getBlocks() {
    return this.blockchainInstance.chain;
   }

   private generateWalletKeys() {
    const ec = new EC.ec('secp256k1');
    const key = ec.genKeyPair();

    this.walletKeys.push({
      keyObj: key,
      publicKey: key.getPublic('hex'),
      privateKey: key.getPrivate('hex')
    });
   }

   // @ts-ignore
   addressIsFromCurrentUser(address) {
    return address === this.walletKeys[0].publicKey;
  }

  
  addTransaction(tx: Transaction) {
    this.blockchainInstance.addTransaction(tx);
  }

  getPendingTransactions() {
    return this.blockchainInstance.pendingTransactions;
  }

  minePendingTransactions() {
    this.blockchainInstance.minePendingTransactions(
      this.walletKeys[0].publicKey
    );
  }

  getLatestBlock() {
    return this.blockchainInstance.getLatestBlock();
  }
}

export interface IWalletKey {
  keyObj: any;
  publicKey: string;
  privateKey: string;
}