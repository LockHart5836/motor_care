import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  newNoteContent: string = '';
  notes: { id: number; content: string; date: string }[] = [];
  isButtonDisabled: boolean = true;

  constructor(private router: Router) {}

  navigateTo(action: string, path: string): void {
    console.log(`Navigating to ${action}`);
    this.router.navigate([path]);
  }

  checkInput(): void {
    // Enable the button only if there's valid input
    this.isButtonDisabled = !this.newNoteContent.trim();
  }

  addNote(): void {
    const trimmedContent = this.newNoteContent.trim();
    if (trimmedContent) {
      const note = {
        id: Date.now(),
        content: trimmedContent,
        date: new Date().toLocaleDateString()
      };
      this.notes.unshift(note);
      this.newNoteContent = '';
      this.isButtonDisabled = true;
    }
  }

  deleteNote(id: number): void {
    this.notes = this.notes.filter(note => note.id !== id); // Remove the note
  }

  logout(): void {
    // Logout functionality
    console.log('Logging out...');
    // Clear session storage or any other user-related data
    sessionStorage.clear();

    // Navigate to the login page
    this.router.navigate(['/login']);
  }
}
