import { Component } from '@angular/core';
import { ModalController, NavController } from 'ionic-angular';
import { AddItemPage } from '../add-item/add-item'
import { ItemDetailPage } from '../item-detail/item-detail';
import { Data } from '../../providers/data';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public items = [];

  constructor(public navCtrl: NavController, public modalCtrl: ModalController, public dataService: Data) {

    /*
|--------------------------------------------------------------------------
|  we get here the stored clients array and push the items to it Using the
| Data Servie provider
|--------------------------------------------------------------------------
*/

    this.dataService.getData().then((clients) => {

      if(clients){
        this.items = clients;
      }

    });

  }

  ionViewDidLoad(){

  }

  addItem(){

/*
|--------------------------------------------------------------------------
| put the additem  page in model , using onDisDismiss listener here,
| which will grab that item that is being passed back and then save it using
| the saveItem function.
|--------------------------------------------------------------------------
*/	
    let addModal = this.modalCtrl.create(AddItemPage);
    
    addModal.onDidDismiss((item) => {

          if(item){
            this.saveItem(item);
          }

    });

    addModal.present();

  }

  /*
|--------------------------------------------------------------------------
| save the item by pushing it to the items then send the items  to Data Service
|--------------------------------------------------------------------------
*/

  saveItem(item){
    this.items.push(item);
    this.dataService.save(this.items);
  }

/*
|--------------------------------------------------------------------------
| sending the added item to the item Details page to show it
|--------------------------------------------------------------------------
*/

  viewItem(item){
    this.navCtrl.push(ItemDetailPage, {
      item: item
    });
  }

}