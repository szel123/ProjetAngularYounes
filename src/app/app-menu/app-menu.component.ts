import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-app-menu',
  templateUrl: './app-menu.component.html',
  styleUrls: ['./app-menu.component.scss']
})
export class AppMenuComponent implements OnInit {

  gauche : number =1;

  constructor() { }

  ngOnInit() {
  }

  gaucheDroite(){
    //this.gauche = ! this.gauche;
    if( this.gauche == 2){
      this.gauche =1;
    }
    else if(this.gauche == 1){
      this.gauche = 2;
    }
  }

}
