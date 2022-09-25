import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-generaQR',
  templateUrl: './generaQR.page.html',
  styleUrls: ['./generaQR.page.scss'],
})
export class GeneraQRPage implements OnInit {

  constructor(private menuController: MenuController) { }

  ngOnInit() {
  }

  mostrarMenu(){
    this.menuController.open('first');
  }
}
