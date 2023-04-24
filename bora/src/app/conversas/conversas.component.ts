import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BaseBoraComponent } from '../shared/components/base-bora/base-bora.component';

@Component({
  selector: 'app-conversas',
  templateUrl: './conversas.component.html',
  styleUrls: ['./conversas.component.scss'],
})
export class ConversasComponent extends BaseBoraComponent {
  menuOpen = false;

  constructor(private router: Router) {
    super();
  }

  ngOnInit(): void {}

  goToChat() {
    this.router.navigate(['/chat']);
  }

  goToFeed() {
    this.router.navigate(['/feed']);
  }

  goToEdit() {
    this.router.navigate(['/perfil']);
  }

  goToConversas() {
    this.router.navigate(['/conversas']);
  }

  public toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }

  exit() {
    this.router.navigate(['/']);
    this.onDestroy;
  }
}
