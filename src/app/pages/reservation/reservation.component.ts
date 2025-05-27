    import { Component } from '@angular/core';
    import { ActivatedRoute } from '@angular/router';
    import { CommonModule } from '@angular/common';
    import { FormsModule } from '@angular/forms';

    @Component({
    selector: 'app-reservation',
    standalone: true,
    imports: [CommonModule, FormsModule], // Importa CommonModule y FormsModule
    templateUrl: './reservation.component.html',
    styleUrls: ['./reservation.component.css']
    })
    export class ReservationComponent {
    roomId: string | null = null;

    // Objeto para almacenar los datos del formulario
    reservationData = {
        name: '',
        card: '',
        expiry: '',
        cvv: ''
    };

    constructor(private route: ActivatedRoute) {}

    ngOnInit() {
        this.roomId = this.route.snapshot.paramMap.get('id');
    }

    onSubmit() {
        // Aquí puedes manejar la lógica para enviar los datos del formulario
        console.log('Formulario enviado:', this.reservationData);
        // Por ejemplo, enviar los datos a un servicio de backend
    }
    }
