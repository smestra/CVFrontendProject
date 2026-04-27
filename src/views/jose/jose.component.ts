import { Component, OnInit } from '@angular/core';
import { ExperiencesService } from '../../services/experiences.service';
import { Experience } from '../../models/experiences.model';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { STUDENT_CODES } from '../../constants/student.constants';

@Component({
  selector: 'app-jose',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './jose.component.html',
  styleUrls: ['./jose.component.css']
})
export class JoseComponent implements OnInit {
  experiences: Experience[] = [];
  loading = false;
  studentName = 'José López';

  constructor(private experiencesService: ExperiencesService) {}

  ngOnInit(): void {
    this.loading = true;
    this.experiencesService.getExperiencesByStudent(STUDENT_CODES.JOSE).subscribe({
      next: (data) => {
        this.experiences = data;
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      }
    });
  }

  formatDate(date: string): string {
    return new Date(date).toLocaleDateString('es-CO', { year: 'numeric', month: 'long' });
  }
}

