import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { HttpClientModule } from '@angular/common/http'; // Import here

const bootstrap = () => bootstrapApplication(AppComponent, {
  providers: [
    HttpClientModule // Include HttpClientModule here for SSR (server-side rendering)
  ]
});

export default bootstrap;
