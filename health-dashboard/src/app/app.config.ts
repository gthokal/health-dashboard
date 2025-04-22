import { ApplicationConfig, APP_INITIALIZER, importProvidersFrom } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppInitService } from './services/app-init.service';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';

export function initApp(appInitService: AppInitService) {
  return () => appInitService.loadEnv(); 
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    importProvidersFrom(HttpClientModule), 
    AppInitService,
    {
      provide: APP_INITIALIZER,
      useFactory: initApp,
      deps: [AppInitService],
      multi: true
    }
  ]
};
