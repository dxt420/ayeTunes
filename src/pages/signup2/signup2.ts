import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

/**
 * Generated class for the Signup2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup2',
  templateUrl: 'signup2.html',
})
export class Signup2Page {
  form: FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams,fb: FormBuilder) {
    this.form = fb.group({


			dob: ['', Validators.compose([Validators.required])],
			gender: ['', Validators.compose([Validators.required])]
		});
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Signup2Page');
  }



}
