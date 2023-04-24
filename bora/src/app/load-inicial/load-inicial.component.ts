import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-load-inicial',
  templateUrl: './load-inicial.component.html',
  styleUrls: ['./load-inicial.component.scss']
})
export class LoadInicialComponent {
  constructor(private router: Router) {}

  ngOnInit(): void {
    setTimeout(() => {
      this.router.navigate(['/inicial']);
    }, 2000);
  }
}
