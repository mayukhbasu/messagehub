import { Component } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {
  formData = {
    date: '',
    textbox1: '',
    textbox2: ''
  };

  close() {
    console.log('Modal closed');
    // Add logic to close the modal
  }

  submit() {
    console.log('Form submitted:', this.formData);
    // Add logic to handle form submission
  }
}
