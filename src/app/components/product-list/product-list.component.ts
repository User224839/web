import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';
import { ProductCardComponent } from '../product-card/product-card.component';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductCardComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
products: Product[] = [
  {
    id: 1,
    name: 'Apple iPhone 13 128GB (Black)',
    description: 'Apple iPhone 13 с мощным процессором и отличным экраном.',
    price: 219990,
    rating: 4.5,
    image: 'https://placehold.co/400x400?text=iPhone+13+Black',
    images: [],
    link: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-chernyi-102298404/'
  },
  {
    id: 2,
    name: 'Apple iPhone 13 128GB (White)',
    description: 'Apple iPhone 13 в белом цвете.',
    price: 219990,
    rating: 4.5,
    image: 'https://placehold.co/400x400?text=iPhone+13+White',
    images: [],
    link: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-belyi-102298420/'
  },
  {
    id: 3,
    name: 'Apple iPhone 13 128GB (Blue)',
    description: 'Apple iPhone 13 в синем цвете.',
    price: 219990,
    rating: 4.5,
    image: 'https://placehold.co/400x400?text=iPhone+13+Blue',
    images: [],
    link: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-sinii-102298364/'
  },
  {
    id: 4,
    name: 'Apple iPhone 14 128GB (Black)',
    description: 'Apple iPhone 14 с улучшенной камерой.',
    price: 279990,
    rating: 4.6,
    image: 'https://placehold.co/400x400?text=iPhone+14',
    images: [],
    link: 'https://kaspi.kz/shop/p/apple-iphone-14-128gb-chernyi-106363023/'
  },
  {
    id: 5,
    name: 'Apple iPhone 14 Pro Max 256GB',
    description: 'Флагманский Apple iPhone 14 Pro Max.',
    price: 449990,
    rating: 4.8,
    image: 'https://placehold.co/400x400?text=iPhone+14+Pro+Max',
    images: [],
    link: 'https://kaspi.kz/shop/p/apple-iphone-14-pro-max-256gb-fioletovyi-106363342/'
  },
  {
    id: 6,
    name: 'Apple iPhone 15 128GB (Black)',
    description: 'Новейший Apple iPhone 15.',
    price: 399990,
    rating: 4.7,
    image: 'https://placehold.co/400x400?text=iPhone+15',
    images: [],
    link: 'https://kaspi.kz/shop/p/apple-iphone-15-128gb-chernyi-113137790/'
  },
  {
    id: 7,
    name: 'Apple iPhone 15 Pro Max 256GB',
    description: 'Максимальная версия iPhone 15.',
    price: 599990,
    rating: 4.9,
    image: 'https://placehold.co/400x400?text=iPhone+15+Pro+Max',
    images: [],
    link: 'https://kaspi.kz/shop/p/apple-iphone-15-pro-max-256gb-seryi-113138420/'
  },
  {
    id: 8,
    name: 'Чехол для Apple iPhone 13 (Прозрачный)',
    description: 'Прозрачный защитный чехол.',
    price: 4990,
    rating: 4.2,
    image: 'https://placehold.co/400x400?text=iPhone+13+Case',
    images: [],
    link: 'https://kaspi.kz/shop/p/chehol-dlja-apple-iphone-13-prozrachnyi-106185651/'
  },
  {
    id: 9,
    name: 'Apple iPhone 13 128GB (Pink)',
    description: 'Яркий iPhone 13 в розовом цвете.',
    price: 219990,
    rating: 4.5,
    image: 'https://placehold.co/400x400?text=iPhone+13+Pink',
    images: [],
    link: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-rozovyi-102298145/'
  },
  {
    id: 10,
    name: 'Apple iPhone 16 128GB (Black)',
    description: 'Новое поколение Apple iPhone 16.',
    price: 689990,
    rating: 4.7,
    image: 'https://placehold.co/400x400?text=iPhone+16',
    images: [],
    link: 'https://kaspi.kz/shop/p/apple-iphone-16-128gb-chernyi-123713453/'
  }
];

}
