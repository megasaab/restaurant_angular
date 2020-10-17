import { Component, OnInit } from '@angular/core';
import { Dish } from "../shared/dish";

const DISHES : Dish[] = [
  {
    id: '0',
    name: 'Uthappizza',
    image: '/assets/images/uthappizza.png',
    category: 'mains',
    featured: true,
    label: 'Hot',
    price: '4.99',
    description: 'Unique combination  Of indian Uthappam'
  },
  {
    id: '1',
    name: 'Zucchipakoda',
    image: '/assets/images/zucchipakoda.png',
    category: 'appetizer',
    featured: false,
    label: '',
    price: '1.99',
    description: 'Deep fried Zucchini'
  },
  {
    id: '2',
    name: 'Elaicheesecake',
    image: '/assets/images/elaicheesecake.png',
    category: 'dessert',
    featured: false,
    label: '',
    price: '2.99',
    description: 'Delectable'
  },
  {
    id: '3',
    name: 'Vadonut',
    image: '/assets/images/vadonut.png',
    category: 'fried',
    featured: false,
    label: '',
    price: '2.99',
    description: 'Delectable'
  }
]

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  dishes: Dish[] = DISHES;

  constructor() { }

  ngOnInit(): void {
  }

}
