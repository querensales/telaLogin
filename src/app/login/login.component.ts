import { Component } from '@angular/core'
import { FormBuilder } from '@angular/forms'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  //declarando a var

  form: any


  // função > paramêtro > tipo do paramêtro private = apenas nesse componente;

  constructor(private formBuilder: FormBuilder) {
    this.criarForm();
  }

  criarForm(){
    this.form = this.formBuilder.group({
      email: [''],
      senha: ['']
    })
  }

}
