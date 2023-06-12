import { Component, Input, OnInit, ChangeDetectorRef  } from '@angular/core';
import { BlockchainService } from 'src/app/services/blockchain.service';
// @ts-ignore
import { Block } from '../../../blockchain/blockchain';

@Component({
  selector: 'app-blockchain-viewer',
  templateUrl: './blockchain-viewer.component.html',
  styleUrls: ['./blockchain-viewer.component.scss']
})
export class BlockchainViewerComponent implements OnInit {
  public blocks = [];
  public selectedBlock = null;

  constructor(private blockchainService: BlockchainService, private changeDetection: ChangeDetectorRef) {
    this.blocks = blockchainService.blockchainInstance.chain;
    this.selectedBlock = this.blocks[0];
    console.log(this.blocks);
  }

  ngOnInit() {
    //this.blocks = this.blockchainService.getBlocks();
    this.changeDetection.detectChanges();
    console.log(this.blocks);
  }

  public trackItem (index: number, block: Block) {
    return block.trackId;
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
