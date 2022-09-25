import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { ComentariosService } from 'src/app/services/comentarios.service';

@Component({
  selector: 'app-comentarios',
  templateUrl: './comentarios.page.html',
  styleUrls: ['./comentarios.page.scss'],
})
export class ComentariosPage implements OnInit {

  comentarios : any;

  constructor(private menuController: MenuController, private comentariosService: ComentariosService) { }

 //Declarar la detencion
  frenar;

  ngOnInit() {
  }

  mostrarMenu(){
    this.menuController.open('first');
  }

  mostrarComentarios(){
    this.comentariosService.getComments().subscribe(resp =>{
      console.log('comentarios', resp);
      this.comentarios = resp;
      //Se ordena la deshabilitacion en mostrarComentarios() que se activa con Click, por ende, se debe incluir en el html al ordenar el disabled
      //creditos https://forum.ionicframework.com/
      this.frenar='disabled';
    })

}
}
