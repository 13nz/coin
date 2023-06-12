import { Component, OnInit, Input } from '@angular/core';
import { BlockchainService } from '../../services/blockchain.service';
// @ts-ignore
import { Block } from '../../../blockchain/blockchain';

@Component({
  selector: 'app-block-view',
  templateUrl: './block-view.component.html',
  styleUrls: ['./block-view.component.scss']
})
export class BlockViewComponent implements OnInit {
  @Input()
  public block: Block;

  @Input()
  public selectedBlock: Block;

  private blocksInChain;

  constructor(private blockchainService: BlockchainService) {
    this.blocksInChain = blockchainService.blockchainInstance.chain;
  }


  ngOnInit() {
    this.blocksInChain = this.blockchainService.getBlocks();
  }

  blockHasTx() {
    return this.block.transactions.length > 0;
  }

  isSelectedBlock() {
    return this.block === this.selectedBlock;
  }

  getBlockNumber() {
    console.log(JSON.stringify(this.blockchainService.getLatestBlock()));
    return this.blocksInChain.indexOf(this.block) + 1;
  }
}