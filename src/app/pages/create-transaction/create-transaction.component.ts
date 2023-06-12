import { Component } from '@angular/core';
import { BlockchainService } from 'src/app/services/blockchain.service';
import { Router } from '@angular/router';
// @ts-ignore
import Transaction from '../../../blockchain/blockchain';
@Component({
  selector: 'app-create-transaction',
  templateUrl: './create-transaction.component.html',
  styleUrls: ['./create-transaction.component.scss']
})
export class CreateTransactionComponent {
  public newTx = new Transaction();
  public walletKey;

  constructor(private blockchainService: BlockchainService, private router: Router) {
    this.walletKey = blockchainService.walletKeys[0];
  }

  ngOnInit() {
    this.newTx = new Transaction();
  }

  createTransaction() {
    this.newTx.fromAddress = this.walletKey.publicKey;
    //this.newTx.signTransaction(this.walletKey.keyObj);

    this.blockchainService.addTransaction(this.newTx);

    this.router.navigate(['/new/transaction/pending', { addedTx: true }]);
    this.newTx = new Transaction();
  }

}
