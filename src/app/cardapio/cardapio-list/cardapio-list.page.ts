import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cardapio-list',
  templateUrl: './cardapio-list.page.html',
  styleUrls: ['./cardapio-list.page.scss'],
})
export class CardapioListPage implements OnInit {
  products: any[] = [];

  constructor() { }

  ngOnInit() {

    for (let i = 0; i < 20; i++) {
      const product = {
        category: 'Hambúrguers',
        name: `Hambúrguer ${i + 1}`,
        price: (10.5 * (i + 1)),
        description: 'Pão artesanal de brioche, suculento blend de costela, cheddar cremoso, barbecue da casa, maionese da casa, crispy de bacon, onion rings',
        photoUrl: 'https://source.unsplash.com/sc5sTPMrVfk/640x531'
      };

      this.products.push(product);
    }
  }

}
