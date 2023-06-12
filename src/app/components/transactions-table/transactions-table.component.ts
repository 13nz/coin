import { Component, Input, OnInit } from '@angular/core';
import { BlockchainService } from '../../services/blockchain.service';
// @ts-ignore
import { Transaction } from '../../../blockchain/transaction';

@Component({
  selector: 'app-transactions-table',
  templateUrl: './transactions-table.component.html',
  styleUrls: ['./transactions-table.component.scss']
})
export class TransactionsTableComponent implements OnInit {
  @Input()
  public transactions: Transaction[] = [];

  constructor(public blockchainService: BlockchainService) { }

  ngOnInit() {
  }
}
