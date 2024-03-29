import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { take } from 'rxjs';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent implements OnInit {
  //#region injections
  private route = inject(ActivatedRoute);
  //#endregion injections

  //#region vars
  productId: string | undefined;
  //#endregion vars

  //#region ng life cycle
  ngOnInit(): void {
    this.route.params.pipe(take(1)).subscribe({
      next: (params) => {
        this.productId = params['id'];
      }
    });
  }
  //#endregion ng life cycle
}
