import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from './modal/modal.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  

  title = 'dropdown';

  constructor(private modalService: NgbModal) {}

  open() {
    console.log("test")
    const modalRef = this.modalService.open(ModalComponent);
  }
}
