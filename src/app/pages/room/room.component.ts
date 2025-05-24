    import { Component } from '@angular/core';
    import { ActivatedRoute, Router } from '@angular/router';
    import { CommonModule } from '@angular/common';

    @Component({
    selector: 'app-room-detail',
    standalone: true,
    imports: [CommonModule], // Importa CommonModule para usar *ngIf
    templateUrl: './room.component.html',
    styleUrls: ['./room.component.css']
    })
    export class RoomDetailComponent {
    roomId: string | null = null;

    constructor(private route: ActivatedRoute, private router: Router) {}

    ngOnInit() {
        this.roomId = this.route.snapshot.paramMap.get('id');
    }

    onReserveClick() {
        // Navega a la página de reserva con el roomId como parámetro
        this.router.navigate(['/reserva', this.roomId]);
    }
    }
