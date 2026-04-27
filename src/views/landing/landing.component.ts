import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface Student {
  id: string;
  name: string;
  image: string;
  route: string;
}

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent {
  students: Student[] = [
    {
      id: 'daniela',
      name: 'Daniela Gómez',
      image: 'assets/Cc-1071351322 (1).jpg',
      route: '/daniela'
    },
    {
      id: 'gabriel',
      name: 'Gabriel Henao',
      image: 'assets/Cc-1045229487.jpg',
      route: '/gabriel'
    },
    {
      id: 'jose',
      name: 'José López',
      image: 'assets/picJose.jpg',
      route: '/jose'
    },
    {
      id: 'manuel',
      name: 'Manuel Hernández',
      image: 'assets/picManuel.JPG',
      route: '/manuel'
    },
    {
      id: 'sebastian',
      name: 'Sebastián Mestra',
      image: 'assets/picSebastian.png',
      route: '/sebastian'
    }
  ];
}
