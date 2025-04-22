import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { AppInitService } from './app-init.service';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PatientsService {

  private apiUrl: string | undefined;

  constructor(private http:HttpClient, private auth:AuthService, private appInit:AppInitService) { 
    this.apiUrl = this.appInit.get('apiUrl');
  }

  getPatientProfile() {
    const headers = new HttpHeaders(this.auth.getAuthHeaders());
    const endPoint = `${this.apiUrl}`;
    return this.http.get<any[]>(endPoint, { headers }).pipe(
      map(patients => patients.find(
        p => p.name === 'Jessica Taylor'
      ))
    );
  }
}
