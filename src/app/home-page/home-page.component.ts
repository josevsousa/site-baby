import { Component, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {
  
  ismeridian: boolean = true;

  public modalRef: BsModalRef; // {1}

  message: string;
  
  constructor(private modalService: BsModalService) { }

  ngOnInit() {
  }

  toggleMode(): void {
    this.ismeridian = !this.ismeridian;
  }


  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, {class: 'modal-sm'});
  }
 
  confirm(): void {
    this.message = 'Confirmed!';
    console.log(this.message);
    this.modalRef.hide();
  }
 
  decline(): void {
    this.message = 'Declined!';
    console.log(this.message);
    this.modalRef.hide();
  }

}
