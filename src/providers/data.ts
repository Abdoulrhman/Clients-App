import { Storage } from '@ionic/storage';
import {Injectable} from '@angular/core';

@Injectable()
export class Data {

  constructor(public storage: Storage){

  }


/*
|--------------------------------------------------------------------------
| Here we are get and set to the storage
| --------------------------------------------------------------------------
*/

  getData() {
    return this.storage.get('clients');  
  }

  save(data){
    this.storage.set('clients', data);
  }



  /*
|--------------------------------------------------------------------------
|  NOTE:-
|  We Can Use LocalStorage to get an set data 
|--------------------------------------------------------------------------
*/
  
}