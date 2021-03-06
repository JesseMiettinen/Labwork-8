// Jesse Miettinen 1601555

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { User } from "../../models/user";
import { AngularFireAuth } from "angularfire2/auth";



@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  user = {} as User;

  constructor(private afAuth: AngularFireAuth, 
    
    public navCtrl: NavController, public navParams: NavParams) {
  }

//Registers user to firebase

async register(user : User) {
  try {
const result = await this.afAuth.auth.createUserWithEmailAndPassword(user.email, user.password)
  
    console.log(result);
    }

//checks for errors
catch (e) {
  console.error(e);
}
}
}

