import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, ValidatorFn, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent {
  empForm!: FormGroup;
  passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).{6,}$/;

  constructor(
    private authService: AuthService,
    private router: Router
  ) {
    this.initializeForm();
  }

  initializeForm() {
    this.empForm = new FormGroup({
      firstname: new FormControl('', Validators.required),
      lastname: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      phone: new FormControl('', [Validators.required, Validators.pattern('[0-9]{10}')])
    });
  }

  ngOnInit(): void {

  }

  addEmployee() {
    const token = localStorage.getItem('token');
    const role = localStorage.getItem('role');
    console.log("Hehe :" + this.empForm);
    this.authService.addEmployee(this.empForm.value, token).subscribe({
      next: (response) => {
        this.empForm.reset();
        this.router.navigate(['home']);
      },
      error: (err) => {
        console.log(err);
        window.alert("Email already registered"!);
      }
    })
  }


}
