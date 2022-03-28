import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/api/services/user/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  public form: FormGroup = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  })

  constructor(private user: UserService) { }

  public login(): void{
    this.user.login(this.form.value)
    .subscribe({
      next: res => alert(JSON.stringify(res)),
      error: err => alert(JSON.stringify(err))
    })
  }

}
