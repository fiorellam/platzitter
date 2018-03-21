import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  //SE CREA UNA LISTA QUE ES N ARRAY QUE TENGA TWITTS
  listado:Array<twitt> = [
      {img:'http://www.impactoedu.com/uploads/4/6/1/1/46118149/7484265.jpg?275', nick_name:'@freddier', text:'platzitter es lo mas'},
      {img:'https://pbs.twimg.com/profile_images/703539825853464577/jppQNmXD_400x400.jpg', nick_name:'@cvander', text:'que chulo que esta esta app en iOS'},
      {img:'https://avatars1.githubusercontent.com/u/5982204?s=460&v=4', nick_name:'@jorgeucano', text:'test 1234'}
    ];

  constructor(public navCtrl: NavController) {

  }

}

interface twitt{
  img:string; //AVATAR
  nick_name:string; //NICKNAME
  tect:string;
}
