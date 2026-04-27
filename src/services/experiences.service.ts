import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environment/environment';
import { Experience } from '../models/experiences.model';

@Injectable({
  providedIn: 'root'
})
export class ExperiencesService {
private apiUrl = `${environment.apiUrl}/experiences`;

  constructor(private http: HttpClient) { }

  getAllExperiences(): Observable<Experience[]> {
    return this.http.get<Experience[]>(this.apiUrl);
  }
  getExperienceById(id: string): Observable<Experience>{
    return this.http.get<Experience>(`${this.apiUrl}/${id}`)
  }
  postExperience(experience: Experience): Observable<Experience> {
    return this.http.post<Experience>(this.apiUrl, experience);
  }
  updateExperience(id: string, experience: Experience): Observable<Experience> {
    return this.http.put<Experience>(`${this.apiUrl}/${id}`, experience);
  }
  deleteExperience(id: string): Observable<void>{
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}