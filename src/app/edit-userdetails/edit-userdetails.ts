import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, output, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-edit-userdetails',
  imports: [FormsModule, CommonModule],
  templateUrl: './edit-userdetails.html',
  styleUrl: './edit-userdetails.css',
  standalone: true
})
export class EditUserdetails {
  @Input() editData: any;

  @Input() isEditbtn: any;

  @Output() updateData = new EventEmitter<any>;

  @Output() savedData = new EventEmitter<any>;
  constructor() {

  }
  ngOnInit() {



    console.log("Edit Data", this.isEditbtn)
  }
  updateUserdata(data: any) {
    console.log("data", data)
    this.updateData.emit(data);

  }
  savedUserData(data: any) {
    console.log("Data", data)
    this.savedData.emit(data);
  }



}
