import { Component } from '@angular/core';
import { NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';
import { CustomDateFormatterService } from '../services/custom-date-formatter.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
  providers: [{ provide: NgbDateParserFormatter, useClass: CustomDateFormatterService }]

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
