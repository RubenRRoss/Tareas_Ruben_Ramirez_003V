import { Component } from '@angular/core';

interface Componente{
  icon:string;
  name:string;
  redirecTo:string;
}

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor() {}


  componentes: Componente[] = [ 
    {
      icon: 'wifi-outline',
      name: 'Inicio',
      redirecTo: '/inicio',
    },
    {
      icon: 'bug-outline',
      name: 'Alert',
      redirecTo: '/alert',
    },
    {
      icon: 'bicycle-outline',
      name: 'Action-sheet',
      redirecTo:'/action-sheet',
    },
    {
      icon: 'albums-outline',
      name: 'Card',
      redirecTo:'/card',
    },
    {
      icon: 'walk-outline',
      name: 'Inputs',
      redirecTo:'/inputs',
    },
    {
      icon: 'eye-outline',
      name: 'Noticias',
      redirecTo:'/noticias',
    },
    {
      icon: 'diamond-outline',
      name: 'Comentarios',
      redirecTo:'/comentarios',
    },
  ];




}
