import { Component, OnInit, OnChanges, SimpleChanges, Input} from '@angular/core';
import { Store } from '@ngrx/store'

import * as pageAction from '../../../../../core/actions/page.actions';
import * as areaAction from '../../../../../core/actions/product.actions';
import * as productAction from '../../../../../core/actions/product.actions';
import * as fromCore from '../../../../../core/reducers';

@Component({
  selector: 'app-product-basic-summary-townhouse',
  templateUrl: './product-basic-summary-townhouse.component.html',
  styleUrls: ['./product-basic-summary-townhouse.component.css']
})
export class ProductBasicSummaryTownhouseComponent implements OnInit, OnChanges {
  @Input() owner: string;
  @Input() ownerData: any;

  productData: any;
  is_loading: boolean = true;
  constructor(private store: Store<any>) { 
      this.store.select(fromCore.getProduct)
      .subscribe(product => {
        // this.productData = JSON.parse(JSON.stringify(product.payload));
        this.is_loading = product.isLoading;
      });
  }

  header = {
    "competitor" : "คู่แข่ง",
    "user" : "เรา"
  }

  graphs = {
    "competitor" : "product",
    "user" : "product"
  }
  settingHeader : string;
  settingGraph: string;

  ngOnInit() {
    this.settingHeader = this.header[this.owner];
    this.settingGraph = this.graphs[this.owner];    
  }
 // TODO: User state store instead.
  ngOnChanges(changes: SimpleChanges) {
    try {
      let newOwnerData = changes.ownerData;
      this.ownerData = JSON.parse(JSON.stringify(newOwnerData.currentValue));
    } catch (e) {
      this.ownerData = { products: []}
    }
  }

}
