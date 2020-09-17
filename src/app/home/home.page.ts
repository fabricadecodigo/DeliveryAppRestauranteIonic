import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  public selectedIndex = 0;
  public appPages = [
    {
      title: 'Dashboard',
      url: '/dashboard',
      icon: 'information-circle-outline'
    },
    {
      title: 'Informações',
      url: '/info',
      icon: 'information-circle-outline'
    },
    {
      title: 'Cardápio',
      url: '/cardapio',
      icon: 'fast-food-outline'
    },
    {
      title: 'Categorias',
      url: '/categories',
      icon: 'list-circle-outline'
    },
    {
      title: 'Pedidos',
      url: '/orders',
      icon: 'basket-outline'
    },
    {
      title: 'Horário de funcionamento',
      url: '/business-hours',
      icon: 'information-circle-outline'
    },
    {
      title: 'Entrega',
      url: '/delivery',
      icon: 'bicycle-outline'
    }
  ];

  constructor() { }

  ngOnInit() { }

}
