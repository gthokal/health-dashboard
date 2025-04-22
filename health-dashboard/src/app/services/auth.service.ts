import { Injectable } from '@angular/core';
import { AppInitService } from './app-init.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private appInit: AppInitService) {}

  getAuthHeaders(): { [header: string]: string } {
    const username = this.appInit.get('apiUsername');
    const password = this.appInit.get('apiPassword');

    const encoded = btoa(`${username}:${password}`);

    return {
      'Authorization': `Basic ${encoded}`,
      'Content-Type': 'application/json'
    };
  }
}


