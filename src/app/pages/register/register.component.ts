import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLinkWithHref } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  imports: [FormsModule, RouterLinkWithHref],
})
export class RegisterComponent {
  username: string = '';
  email: string = '';
  password: string = '';

  constructor() {}

  register() {
    console.log('Registering user:');
    console.log(`Username: ${this.username}`);
    console.log(`Email: ${this.email}`);
    console.log(`Password: ${this.password}`);
    // Aquí puedes implementar la lógica para registrar al usuario
  }

  registerWith(provider: string) {
    console.log(`Registering with ${provider}`);
    // Aquí puedes implementar la lógica para registrar con el proveedor seleccionado
  }

  goToLogin() {
    console.log('Redirecting to login page');
    // Aquí puedes implementar la lógica para redirigir a la página de login
  }
}
