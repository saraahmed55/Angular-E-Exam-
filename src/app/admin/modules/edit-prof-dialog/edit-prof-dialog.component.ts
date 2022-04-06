import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';


@Component({
  selector: 'app-edit-prof-dialog',
  templateUrl: './edit-prof-dialog.component.html',
  styleUrls: ['./edit-prof-dialog.component.css']
})
export class EditProfDialogComponent implements OnInit {
  hide = true;


  email = new FormControl('', [Validators.required, Validators.email]);


  constructor() { }

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  ngOnInit(): void {
  }

}
