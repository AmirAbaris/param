import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Chance } from 'chance';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  private router = inject(Router);

  randomId: number | undefined;

  ngOnInit(): void {
    // generate random id
    let chance = new Chance();

    this.randomId = chance.integer();
  }

  goToRandomProduct(): void {
    this.router.navigate(['product', this.randomId]);
  }
}
