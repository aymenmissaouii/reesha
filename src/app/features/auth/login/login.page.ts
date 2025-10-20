import { Component, OnInit, signal } from '@angular/core';
import { Router } from '@angular/router';

type Product = { id: number; title: string; price: number; };

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: false
})
export class LoginPage implements OnInit {

  constructor(
    private router: Router
  ) {}
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

  navigate(){
    this.router.navigateByUrl('/dashboard');
  }
  // ✅ trackBy: باش DOM يبقى ثابت وما يتهدّش كل مرّة
  trackById = (_: number, p: Product) => p.id;

}
