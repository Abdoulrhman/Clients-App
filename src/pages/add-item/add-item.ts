import { Component } from '@angular/core';
import { NavController, ViewController } from 'ionic-angular';

@Component({
  selector: 'page-add-item',
  templateUrl: 'add-item.html'
})
export class AddItemPage {
	
    /*
    |--------------------------------------------------------------------------
		| here is the variables which indicates the values of the inputs 
		| Using Two way binding throught [(ngModel)]
    |--------------------------------------------------------------------------
    */

	title: string;
	description: string;
	price:number;

	constructor(public nav: NavController, public view: ViewController) {

	}

/*
    |--------------------------------------------------------------------------
		| This function create new object from the data that the user 
		|  Enter it.
		| using the View Controller which used with Modals to dismiss (close) them.
		| we send the data by the view then close it .
    |--------------------------------------------------------------------------
    */	

	saveItem(){

		let newItem = {
		  title: this.title,
			description: this.description,
			price:this.price
		};

		this.view.dismiss(newItem);

	}

	/*
    |--------------------------------------------------------------------------
		| This function close the model andreturn back to the root page
    |--------------------------------------------------------------------------
    */	

	close(){
		this.view.dismiss();
	}

}