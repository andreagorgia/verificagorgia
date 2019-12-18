import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cassettiera',
  templateUrl: './cassettiera.component.html',
  styleUrls: ['./cassettiera.component.css']
})
export class CassettieraComponent implements OnInit {
  vet: string[];
  constructor() {
    this.vet= ['rino','pino','gino','lino','paolo','giancarlo','carlo','dino','andrea','gabriele'];

   }

  ngOnInit() {
  }

}
