import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { HttpClientModule } from '@angular/common/http'; // Import here

bootstrapApplication(AppComponent, {
  providers: [
    HttpClientModule // Add HttpClientModule here for Standalone AppComponent
  ],
})
  .catch((err) => console.error(err));
