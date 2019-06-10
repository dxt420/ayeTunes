import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the MorePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-more',
  templateUrl: 'more.html',
})
export class MorePage {

  pages: Array<{ title: string, component: any, icon: string }>;



  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.pages = [
      { title: 'Profile', component: 'WelcomePage', icon:"funnel" },
      { title: 'Offline Mode', component: 'WelcomePage', icon:"funnel" },
      { title: 'Show Lyrics', component: 'SchedulePage', icon:"list"  },
      { title: 'Share Listening Activity', component: 'SpeakersPage', icon:"people"  },
      { title: 'Download with Mobile Data', component: 'SpeakersPage', icon:"people"  },
      { title: 'Storage', component: 'SpeakersPage', icon:"people"  },
      { title: 'Notifications', component: 'SpeakersPage', icon:"people"  },
      { title: 'ABout', component: 'SpeakersPage', icon:"people"  },
      { title: 'Logout', component: 'SpeakersPage', icon:"people"  }

    ]

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MorePage');
  }

}
