import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'nx09-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app09';

  constructor(private router: Router) { }

  onLogout() {
    localStorage.removeItem('token');
    this.router.navigate(['/login'])
  }
}
