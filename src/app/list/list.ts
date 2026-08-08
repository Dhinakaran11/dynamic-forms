import { Component } from '@angular/core';
import { ListService } from '../service/list-service';
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-list',
  imports: [NgFor, FormsModule],
  templateUrl: './list.html',
  styleUrl: './list.css',
  standalone: true
})

export class List {

  userlist: any = [];
  filerlist: any = [];
  searchvalue: string = '';
  dropdownvalue: boolean | null = null;

  constructor(
    private datalistservice: ListService) {
  }


  ngOnInit() {
    console.log("List Component functiosn ")
    console.log("Seaech Value", this.searchvalue)
    this.datalistservice.getuserlisr().subscribe({
      next: value => {
        this.filerlist = value;
        this.userlist = value;
        //console.log("Response Value", this.userlist)
      }

    })
  }


  search() {
    console.log("Search Value", this.searchvalue)
    console.log("Dropdown Value", this.dropdownvalue)
    if (this.searchvalue.length == 0) {
      this.filerlist = this.userlist
    }
    else {
      console.log("Search type", this.searchvalue);
      this.filerlist = this.userlist.filter((i: any) => {
        return i.title.includes(this.searchvalue) && i.completed === this.dropdownvalue;
      })
      console.log("Filter value", this.filerlist)
    }


  }

  valuechange() {
    console.log("Value Update", this.dropdownvalue);
    this.filerlist = this.userlist.filter((i: any) => {
      return i.completed === this.dropdownvalue
    })
  }
}
