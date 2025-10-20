import { Component, signal, OnInit  } from '@angular/core';

type Product = { id: number; title: string; price: number; };

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage implements OnInit {

  constructor() {}
    products = signal<Product[]>([]);

  ngOnInit() {
    // Mock سريع (بدّلها بـ Service/HTTP كي تحب)
    setTimeout(() => {
      this.products.set([
        { id: 1, title: 'Phone',  price: 799 },
        { id: 2, title: 'Laptop', price: 1499 },
        { id: 3, title: 'Watch',  price: 299  },
        { id: 4, title: 'TV',     price: 1099 },
      ]);
    }, 600);
  }

  // ✅ trackBy: باش DOM يبقى ثابت وما يتهدّش كل مرّة
  trackById = (_: number, p: Product) => p.id;

}
