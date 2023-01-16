import { Component } from '@angular/core';
import { Nav } from '../../models/navs';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  nav: Nav[] = [
    {
      link: './home',
      name: 'home',
      exact: true,
      admin: false,
    },
    {
      link: './clientes',
      name: 'Clientes',
      exact: false,
      admin: false,
    },
  ]
}
