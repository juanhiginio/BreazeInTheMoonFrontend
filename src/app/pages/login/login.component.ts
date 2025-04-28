import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  imports: [FormsModule]
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor() {}

  login() {
    console.log(this.email);
    console.log(this.password);
  }

  loginWith(provider: string) {
    console.log(`Logging in with ${provider}`);
    // Aquí puedes implementar la lógica para iniciar sesión con el proveedor seleccionado
  }

  register() {
    console.log('Redirecting to registration page');
    // Aquí puedes implementar la lógica para redirigir a la página de registro
  }
}
