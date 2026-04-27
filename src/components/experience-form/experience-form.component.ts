import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Experience } from '../../models/experiences.model';
import { ExperiencesService } from '../../services/experiences.service';

@Component({
  selector: 'app-experience-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './experience-form.component.html',
  styleUrls: ['./experience-form.component.css'],
})
export class ExperienceFormComponent implements OnInit {
  @Input() studentCode: number = 0;
  @Input() showModal: boolean = false;
  @Input() editingExperience: Experience | null = null;

  @Output() close = new EventEmitter<void>();
  @Output() saved = new EventEmitter<void>();

  form!: FormGroup;
  loading = false;
  error = '';
  successMessage = '';

  constructor(
    private fb: FormBuilder,
    private experiencesService: ExperiencesService
  ) {}

  ngOnInit(): void {
    this.initForm();
  }

  ngOnChanges(): void {
    if (!this.form) return;

    if (this.editingExperience) {
      this.form.patchValue({
        nombre: this.editingExperience.nombre,
        cargo: this.editingExperience.cargo,
        empresa: this.editingExperience.empresa,
        fechaInicio: this.formatDateForInput(
          this.editingExperience.fechaInicio
        ),
        fechaFin: this.formatDateForInput(this.editingExperience.fechaFin),
        descripcion: this.editingExperience.descripcion || '',
      });
    } else {
      if( this.showModal){
      this.form.reset();
      this.error = ''
      this.successMessage = '';
    }
  }
  }

  private initForm(): void {
    this.form = this.fb.group({
      nombre: ['', Validators.required],
      cargo: ['', Validators.required],
      empresa: ['', Validators.required],
      fechaInicio: ['', Validators.required],
      fechaFin: ['', Validators.required],
      descripcion: [''],
    });
  }

  private formatDateForInput(date: any): string {
    if (!date) return '';
    const d = new Date(date);
    return d.toISOString().split('T')[0];
  }

  onSubmit(): void {
  if (this.form.invalid) {
    this.error = 'Por favor completa todos los campos requeridos';
    return;
  }

  this.loading = true;
  this.error = '';

  const formValue = this.form.value;

  // ✅ Construye el objeto sin _id cuando es creación
  const experience: Experience = {
    nombre:      formValue.nombre,
    cargo:       formValue.cargo,
    empresa:     formValue.empresa,
    fechaInicio: formValue.fechaInicio,
    fechaFin:    formValue.fechaFin,
    descripcion: formValue.descripcion,
    studentCode: this.studentCode,
  };

  if (this.editingExperience?._id) {
    // Actualizar — aquí sí incluye el _id
    this.experiencesService
      .updateExperience(this.editingExperience._id, experience)
      .subscribe({
        next: () => {
          this.successMessage = 'Experiencia actualizada correctamente';
          this.loading = false;
          setTimeout(() => { this.onClose(); this.saved.emit(); }, 1500);
        },
        error: () => {
          this.error = 'Error al actualizar la experiencia';
          this.loading = false;
        }
      });
  } else {
    // Crear nueva — sin _id en el body
    this.experiencesService.postExperience(experience).subscribe({
      next: () => {
        this.successMessage = 'Experiencia agregada correctamente';
        this.loading = false;
        setTimeout(() => { this.onClose(); this.saved.emit(); }, 1500);
      },
      error: () => {
        this.error = 'Error al agregar la experiencia';
        this.loading = false;
      }
    });
  }
}

  onClose(): void {
    this.form.reset();
    this.error = '';
    this.successMessage = '';
    this.editingExperience = null;
    this.close.emit();
  }
}
