import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Experience } from 'src/models/experiences.model';
import { ExperiencesService } from 'src/services/experiences.service';

@Component({
  selector: 'app-experiences',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.css'],
})
export class ExperiencesComponent implements OnInit {
  experiences: Experience[] = [];
  loading = false;
  error = '';
  form!: FormGroup;
  editingId: string | null = null;

  constructor(
    private experiencesService: ExperiencesService,
    private fb: FormBuilder,
  ) {}

  ngOnInit(): void {
    this.showExperiences();
    this.form = this.fb.group({
      nombre: ['', Validators.required],
      cargo: ['', Validators.required],
      empresa: ['', Validators.required],
      fechaInicio: ['', Validators.required],
      fechaFin: ['', Validators.required],
      descripcion: [''],
    });
  }
  showExperiences(): void {
    this.loading = true;
    this.error = '';
    this.experiencesService.getAllExperiences().subscribe({
      next: (data) => {
        this.experiences = data;
        this.loading = false;
      },
      error: () => {
        this.error = 'Error al cargar la información';
        this.loading = false;
      },
    });
  }

  deleteExperience(id: string): void {
    if (confirm('¿Estás seguro de que deseas eliminar esta información?')) {
      this.experiencesService.deleteExperience(id).subscribe({
        next: () => {
          this.showExperiences();
        },
        error: () => {
          this.error = 'Error al tratar de eliminar la información';
        },
      });
    }
  }
  updateExperience(id: string): void {
    if (this.form.valid) {
      this.experiencesService.updateExperience(id, this.form.value).subscribe({
        next: () => {
          this.showExperiences();
          this.form.reset();
          this.editingId = null;
        },
        error: () => {
          this.error = 'Error al tratar de actualizar la información';
        },
      });
    }
  }

  addExperience(): void {
    if (this.form.valid) {
      this.experiencesService.postExperience(this.form.value).subscribe({
        next: () => {
          this.showExperiences();
          this.form.reset();
        },
        error: () => {
          this.error = 'Error al tratar de agregar nueva experiencia laboral';
        },
      });
    }
  }
}
