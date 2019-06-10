import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SearchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class SearchPage {

  // currentItems: any = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchPage');
  }

  // getItems(ev) {
  //   let val = ev.target.value;
  //   if (!val || !val.trim()) {
  //     this.currentItems = [];
  //     return;
  //   }
  //   this.currentItems = this.items.query({
  //     name: val
  //   });
  // }

  /**
   * Navigate to the detail page for this item.
   */
  // openItem(item: Item) {
  //   this.navCtrl.push('ItemDetailPage', {
  //     item: item
  //   });
  // }

}
