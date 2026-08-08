import { ChangeDetectorRef, Component } from '@angular/core';
import { ListService } from '../service/list-service';
import { DynamicList } from '../dynamic-list/dynamic-list';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-listing-page',
  imports: [DynamicList, CommonModule],
  templateUrl: './listing-page.html',
  styleUrl: './listing-page.css',
})
export class ListingPage {
  listValue: any[] = [];
  constructor(private listService: ListService,
    private Cdr: ChangeDetectorRef,
  ) {

  }
  ngOnInit() {

  }
  getList(data: string) {
    this.listValue = [];

    this.listService.getListData(data).subscribe({
      next: (value) => {
        this.listValue = value;
        this.Cdr.detectChanges();
        console.log("Response", this.listValue)
      },
    })

  }

}
