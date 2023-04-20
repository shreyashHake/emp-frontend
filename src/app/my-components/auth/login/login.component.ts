import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  formLogin!: FormGroup;
  userdata: any;

  constructor(
    private authService: AuthService,
    private router: Router) {
    this.initialize();
  }

  ngOnInit(): void {
  }

  initialize() {
    this.formLogin = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required)
    })
  }

  login() {
    this.authService.login(this.formLogin.value.email).subscribe(
      (response) => {
        this.userdata = response;

        if (this.userdata != null && this.userdata.password === this.formLogin.value.password) {
          this.router.navigate(['home']);
        } else {
          window.alert("Invalid credentials !");
        }
      },
      (error) => {
        console.log(error);
        window.alert("Invalid credentials!");
      }
    )
  }

}