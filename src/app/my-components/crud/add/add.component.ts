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
  registerForm!: FormGroup;
  passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).{6,}$/;

  constructor(
    private authService: AuthService,
    private router: Router
  ) {
    this.initializeForm();
  }

  initializeForm() {
    this.registerForm = new FormGroup({
      firstname: new FormControl('', Validators.required),
      lastname: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6), Validators.pattern(this.passwordPattern)])
    })
  }

  ngOnInit(): void {

  }

  register() {
    console.log(this.registerForm);
    this.authService.register(this.registerForm.value).subscribe({
      next: (response) => {
        this.registerForm.reset();
        this.router.navigate(['login']);
      },
      error: (err) => {
        console.log(err);
        window.alert("Email already registered"!);
      }
    })
  }

  matchValues(matchTo: string): ValidatorFn {
    return (control: AbstractControl) => {
      if (control.parent && control.parent instanceof FormGroup) {
        return control.value === control.parent.controls[matchTo].value ? null : { isMatching: true };
      }
      return null;
    }
  }
}
