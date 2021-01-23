import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
@Component({
  selector: 'app-vista-escritura',
  templateUrl: './vista-escritura.component.html',
  styleUrls: ['./vista-escritura.component.css']
})
export class VistaEscrituraComponent implements OnInit {

  constructor(private location:Location) { }

  ngOnInit(): void {
  }

  atras(){
    this.location.back();
  }
  /*
  prueba(){
    let output = document.getElementById('output');
    let buttons: any = document.getElementsByClassName('tool--btn');
    //for(var _i = 0; _i < buttons.length; _i++){
    for (let btn of buttons) {
      btn.addEventListener('click', () => {
        let cmd = btn.dataset['command'];
        if(cmd === 'createlink') {
          let url = prompt("Enter the link here: ", "http:\/\/");
          document.execCommand(cmd, false, url);
        } else {
          document.execCommand(cmd, false, null);
        }
      })
    }
    buttons.forEach(btn => {
      
    });
  }*/

}
/*
let output = document.getElementById('output');
let buttons = document.getElementsByClassName('tool--btn');
for (let btn of buttons) {
	btn.addEventListener('click', () => {
		let cmd = btn.dataset['command'];
		if(cmd === 'createlink') {
			let url = prompt("Enter the link here: ", "http:\/\/");
			document.execCommand(cmd, false, url);
		} else {
			document.execCommand(cmd, false, null);
		}
	})
}*/
