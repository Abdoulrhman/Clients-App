import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';

@Component({
  selector: 'page-item-detail',
  templateUrl: 'item-detail.html'
})
export class ItemDetailPage {

  title;
  description;
  price;

  constructor(public navParams: NavParams){

  }

/*
|--------------------------------------------------------------------------
|  grap the data whic sent from he home page and put it in variables to use it
| in the html template.
| i use the ionViewDidLoad cuze once the page load the variables assigned
|--------------------------------------------------------------------------
*/

  ionViewDidLoad() {
    this.title = this.navParams.get('item').title;
    this.description = this.navParams.get('item').description;
    this.price = this.navParams.get('item').price;
  }

}