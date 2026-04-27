import { Component, OnInit } from '@angular/core';
import { ExperiencesService } from '../../services/experiences.service';
import { Experience } from '../../models/experiences.model';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { STUDENT_CODES } from '../../constants/student.constants';

@Component({
  selector: 'app-gabriel',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './gabriel.component.html',
  styleUrls: ['./gabriel.component.css']
})
export class GabrielComponent implements OnInit {
  experiences: Experience[] = [];
  loading = false;
  studentName = 'Gabriel Henao';

  constructor(private experiencesService: ExperiencesService) {}

  ngOnInit(): void {
    this.loading = true;
    this.experiencesService.getExperiencesByStudent(STUDENT_CODES.GABRIEL).subscribe({
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
