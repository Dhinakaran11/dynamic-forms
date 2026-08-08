import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-dynamic-forms',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './dynamic-forms.html',
  styleUrl: './dynamic-forms.css',
})
export class DynamicForms {
  @Input() EditData: any;
  @Output() EditformData = new EventEmitter<any>;
  userforms = new FormGroup({})

  ngOnInit() {
    console.log("Input Value", this.EditData)
    this.buidForms(this.EditData)
  }
  buidForms(data: any) {
    Object.keys(data).forEach(key => {
      this.userforms.addControl(key, new FormControl(data[key], Validators.required))
    })
  }
  update() {
    const val = this.userforms.value;
    this.EditformData.emit(val);
    console.log("Form Update Value", val)
  }

}
