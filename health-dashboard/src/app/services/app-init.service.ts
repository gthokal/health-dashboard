import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppInitService {
  private env: any;

  constructor(private http: HttpClient) {}

  loadEnv(): Promise<any> {
    return this.http.get('/assets/env.json')
      .toPromise()
      .then(data => {
        this.env = data;
      });
  }

  get(key: string): string {
    return this.env?.[key];
  }
}
