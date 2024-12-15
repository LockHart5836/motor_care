import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';  
import { routes } from './app.routes';
import { AuthenticationService } from './services/authentication.service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    CommonModule,
    AuthenticationService,
    HttpClientModule,  // Only HttpClientModule should be provided here
  ]
};
