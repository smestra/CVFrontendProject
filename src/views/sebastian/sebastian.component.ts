import { Component, OnInit } from '@angular/core';
import { ExperiencesService } from '../../services/experiences.service';
import { Experience } from '../../models/experiences.model';

@Component({
  selector: 'app-sebastian',
  templateUrl: './sebastian.component.html',
  styleUrls: ['./sebastian.component.css']
})
export class sebastianComponent implements OnInit {
  experiences: Experience[] = [];
  loading = false;

  constructor(private experiencesService: ExperiencesService) {}

  ngOnInit(): void {
    this.loading = true;
    this.experiencesService.getAllExperiences().subscribe({
      next: (data) => { this.experiences = data; this.loading = false; },
      error: () => { this.loading = false; }
    });
  }

  formatDate(date: string): string {
    return new Date(date).toLocaleDateString('es-CO', { year: 'numeric', month: 'long' });
  }
}