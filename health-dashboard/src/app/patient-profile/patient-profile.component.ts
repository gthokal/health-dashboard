import { Component } from '@angular/core';
import { PatientsService } from '../services/patients.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-patient-profile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './patient-profile.component.html',
  styleUrl: './patient-profile.component.css'
})
export class PatientProfileComponent {

  patientListing : undefined | {};
  patientProfile: any;


  constructor(private patient:PatientsService){}

  ngOnInit(){

    this.patient.getPatientProfile().subscribe({
      next: (data) => {
        this.patientProfile = data;
        console.log('Jessica data:', this.patientProfile);
      },
      error: (err) => {
        console.error('Error fetching Jessica profile:', err);
      }
    });
  }

}
