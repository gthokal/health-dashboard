import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PatientProfileComponent } from './patient-profile/patient-profile.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PatientProfileComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'health-dashboard';
}
