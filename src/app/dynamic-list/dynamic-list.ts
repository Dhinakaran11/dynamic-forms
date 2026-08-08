import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { DynamicForms } from '../dynamic-forms/dynamic-forms';

@Component({
  selector: 'app-dynamic-list',
  imports: [CommonModule, MatIconModule, DynamicForms],
  templateUrl: './dynamic-list.html',
  styleUrl: './dynamic-list.css',
})
export class DynamicList {
  @Input() ListingData: any;
  tableheader: any[] = [];
  editbtn: boolean = false;
  createbtn: boolean = false;
  editList: any[] = [];
  ngOnChanges() {
    console.log("Listing data", this.ListingData)
    if (this.ListingData.length > 0) {
      this.tableheader = Object.keys(this.ListingData[0]);
      console.log("Table header", this.tableheader)
    }

  }
  editOnClick(data: any) {
    this.editbtn = true;
    this.editList = data;
    console.log("Edit row Data", this.editList)
  }
  deleteOnClick(data: any) {
    this.ListingData = this.ListingData.filter((i: any) => i.id !== data.id)
  }
  UpdateData(data: any) {
    this.editbtn = false;
    console.log("Updated Value in Row", data)
    const index = this.ListingData.findIndex((index: any) => {
      return index.id === data.id
    })
    console.log("Index Value", index)
    this.ListingData[index] = data;
    console.log("Updated Row", this.ListingData)
  }
  createData() {
    this.createbtn = true;
    this.editList = []
  }
}
