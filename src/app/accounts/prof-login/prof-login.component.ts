import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginModel } from 'src/app/Models/LoginModel';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-prof-login',
  templateUrl: './prof-login.component.html',
  styleUrls: ['./prof-login.component.css']
})
export class ProfLoginComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    private route: Router,
    private auth: AuthService
  ) { }

    dangerMessage: string;
    loginForm! : FormGroup;
    logmodel: LoginModel;

  ngOnInit(): void {

    this.dangerMessage = '';

    this.logmodel = {
      email: '',
      password: '',
    }
    this.loginForm = this.fb.group({
      email:['', Validators.required],
      password: ['', Validators.required],
    });
  }

  login(){
    if (this.loginForm.valid){
      this.validateLoginModel();
      this.auth.ProfessorLogin(this.logmodel).subscribe(success => {
        const email = this.loginForm.value.email;
        this.auth.installStorage(email);
        this.route.navigate(['/professor_defalt']).then(x=>{window.location.reload();});
      }, err => {
        console.log(err);
        this.dangerMessage = 'Cannot login. Please, try again';
      } )
    }
  }

  validateLoginModel() {
    this.logmodel.email = this.loginForm.value.email;
    this.logmodel.password = this.loginForm.value.password;
  }

}
