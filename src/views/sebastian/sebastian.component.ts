import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ExperiencesService } from '../../services/experiences.service';
import { Experience } from '../../models/experiences.model';
import { STUDENT_CODES } from 'src/constants/student.constants';
import { ExperienceFormComponent } from '../../components/experience-form/experience-form.component';

@Component({
  selector: 'app-sebastian',
  standalone:true,
  imports: [CommonModule, RouterModule, ExperienceFormComponent],
  templateUrl: './sebastian.component.html',
  styleUrls: ['./sebastian.component.css']
})
export class SebastianComponent implements OnInit {
  experiences: Experience[] = [];
  loading = false;
  studentName = 'Sebastián Mestra';
  studentCode = STUDENT_CODES.SEBASTIAN;
  showFormModal = false;
  editingExperience: Experience | null = null;

  constructor(private experiencesService: ExperiencesService) {}

  ngOnInit(): void {
    this.loadExperiences();
  }

  loadExperiences(): void {
    this.loading = true;
    this.experiencesService.getExperiencesByStudent(this.studentCode).subscribe({
      next: (data) => {
        this.experiences = data;
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      }
    });
  }

  openFormModal(): void {
    this.editingExperience = null;
    this.showFormModal = true;
  }

  editExperience(experience: Experience): void {
    this.editingExperience = experience;
    this.showFormModal = true;
  }

  deleteExperience(id: string): void {
    if (confirm('¿Estás seguro de que deseas eliminar esta experiencia?')) {
      this.experiencesService.deleteExperience(id).subscribe({
        next: () => {
          this.loadExperiences();
        },
        error: () => {
          alert('Error al eliminar la experiencia');
        }
      });
    }
  }

  onFormClose(): void {
    this.showFormModal = false;
  }

  onFormSaved(): void {
    this.loadExperiences();
  }

  formatDate(date: string): string {
    return new Date(date).toLocaleDateString('es-CO', { year: 'numeric', month: 'long' });
  }
}