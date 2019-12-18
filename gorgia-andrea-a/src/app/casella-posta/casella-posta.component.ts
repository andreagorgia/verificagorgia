import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-casella-posta',
  templateUrl: './casella-posta.component.html',
  styleUrls: ['./casella-posta.component.css']
})
export class CasellaPostaComponent implements OnInit {
  @Input() posta: string;
  vet2: string[];
  constructor() {

    this.vet2= ['lettera1','lettera2','lettera3'];

   }

  ngOnInit() {
  }

}
