import { Component, Input } from '@angular/core';
import { BlockchainService } from 'src/app/services/blockchain.service';
// @ts-ignore
import { Block } from '../../../blockchain/blockchain';

@Component({
  selector: 'app-blockchain-viewer',
  templateUrl: './blockchain-viewer.component.html',
  styleUrls: ['./blockchain-viewer.component.scss']
})
export class BlockchainViewerComponent {
  public blocks = [];
  public selectedBlock = null;

  constructor(private blockchainService: BlockchainService) {
    this.blocks = blockchainService.getBlocks();
    this.selectedBlock = this.blocks[0];
  }

  
  showTransactions(block: Block) {
    console.log(block);
    this.selectedBlock = block;
    return false;
  }

  blockHasTx(block: Block) {
    return block.transactions.length > 0;
  }

  selectedBlockHasTx() {
    return this.blockHasTx(this.selectedBlock);
  }

  isSelectedBlock(block: Block) {
    return this.selectedBlock === block;
  }

  getBlockNumber(block: Block) {
    // @ts-ignore
    return this.blocks.indexOf(block) + 1;
  }
}
