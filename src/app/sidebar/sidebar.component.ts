import { Component, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent {
  constructor(private renderer: Renderer2) {}

  toggleDashboard() {
    const dashbar = document.querySelector('.dashbar') as HTMLElement;

    if (dashbar.style.display === 'none' || !dashbar.style.display) {
      this.renderer.setStyle(dashbar, 'display', 'flex');
    } else {
      this.renderer.setStyle(dashbar, 'display', 'none');
    }
  }
}
