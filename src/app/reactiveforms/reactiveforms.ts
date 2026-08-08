import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactiveforms',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './reactiveforms.html',
  styleUrl: './reactiveforms.css',
  standalone: true,
})
export class Reactiveforms {
  userforms = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', Validators.email),
    phone: new FormControl('', Validators.required),
    city: new FormControl('', Validators.required)
  })

  submit() {
    if (this.userforms.valid) {
      console.log("User form Data", this.userforms.value)
    }
    else {
      console.log("Invalied Form Value ")
    }

  }

}
