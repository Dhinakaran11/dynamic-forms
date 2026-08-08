import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { ListService } from '../service/list-service';
import { CommonModule, NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PhonenumconversionPipe } from '../phonenumconversion-pipe';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';
import { EditUserdetails } from '../edit-userdetails/edit-userdetails';

@Component({
  selector: 'app-userdetails',
  imports: [FormsModule, PhonenumconversionPipe, MatIconModule, EditUserdetails, CommonModule],
  templateUrl: './userdetails.html',
  styleUrl: './userdetails.css',
  standalone: true
})
export class Userdetails {
  constructor(
    private userService: ListService,
    private cdr: ChangeDetectorRef,
  ) {

  }

  userDetails: any[] = [];
  editUserData: any = {};
  isEdit: boolean = false;
  isCreateData: boolean = false;
  createData: any[] = [];

  ngOnInit() {
    this.userService.getUserDetails().subscribe({
      next: value => {
        this.userDetails = value;
        console.log("User Details Response", this.userDetails)
        this.cdr.detectChanges();
      }
    })
  }


  editData(data: any) {
    console.log("Edit Section", this.isEdit)
    this.isEdit = true;
    this.editUserData = data;


  }

  deleteData(data: any) {
    console.log("Delete Data", data);
    this.userDetails = this.userDetails.filter(i => i.id !== data.id)
    console.log("DeletedRow", this.userDetails)
  }
  updateEditdata(data: any) {
    console.log("updateEditdata", data)
    const index = this.userDetails.findIndex(value => {
      value.id === data.id
    })
    this.userDetails[index] = data
    console.log("updatedata", this.userDetails)
    this.isEdit = false;

  }
  createdData() {
    console.log("Create Functions")
    this.isCreateData = true;
    this.editUserData = {};
  }

  savedData(data: any) {
    this.isCreateData = false
    console.log("Create Data", data);
    this.userDetails = [...this.userDetails, data]
  }



}
