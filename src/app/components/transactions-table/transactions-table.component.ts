import { Component, Input, OnInit } from '@angular/core';
import { BlockchainService } from '../../services/blockchain.service';
// @ts-ignore
import { Transaction } from '../../../blockchain/blockchain';
import { BlockViewComponent } from '../block-view/block-view.component';

@Component({
  selector: 'app-transactions-table',
  templateUrl: './transactions-table.component.html',
  styleUrls: ['./transactions-table.component.scss']
})
export class TransactionsTableComponent implements OnInit {
  @Input()
  // @ts-ignore
  public transactions = [];

  constructor(public blockchainService: BlockchainService) { 
    
  }

  ngOnInit() {
  }
}
