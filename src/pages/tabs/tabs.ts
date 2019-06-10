import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Tabs } from 'ionic-angular';
import { Tab1Root, Tab2Root, Tab3Root, Tab4Root } from '../';


/**
 * Generated class for the TabsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {

  @ViewChild('myTabs') tabRef: Tabs;
  tab1Root: any = Tab1Root;
  tab2Root: any = Tab2Root;
  tab3Root: any = Tab3Root;
  tab4Root: any = Tab4Root;

  private selected: number;

  selectedIndex;
  color: string = "secondary";

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.selected = this.navParams.get('selectedTab') || 0;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabsPage');
  }

  ionViewWillEnter() {
    if(this.selected) {
      this.tabRef.select(this.selected);
    }
   }

   selectedTab(){
    this.color ="primary";
  }

}
