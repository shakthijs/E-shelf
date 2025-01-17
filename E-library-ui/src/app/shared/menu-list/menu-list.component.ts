import { Component } from '@angular/core';
import {CommonModule} from "@angular/common";
import {Router, RouterModule} from "@angular/router";

@Component({
  selector: 'app-menu-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './menu-list.component.html',
  styleUrl: './menu-list.component.css'
})
export class MenuListComponent {
  menuList = [
    {path: '/', name: "Home", },
    {path: '/books', name: "Books" },
    {path: '/about', name: "About"},
    {path:'', name:'Contact'}
  ]

  constructor(private router: Router) {
  }

  isActive(path: string): boolean {
    return this.router.url === path || (path === '/' && this.router.url === '/');
  }

}
