import { Component, OnInit, signal } from '@angular/core';
import { EventType, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  
  currentRoute = signal('');

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    this.router.events.subscribe((e) => {
      if (e.type === EventType.NavigationEnd) {
        this.currentRoute.set(e.url);
      }
    })
  }

  

}
