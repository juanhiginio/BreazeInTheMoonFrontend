    import { Component } from '@angular/core';
    import { ActivatedRoute } from '@angular/router';

    @Component({
    selector: 'app-room',
    standalone: true,
    templateUrl: './room.component.html',
    styleUrls: ['./room.component.css']
    })
    export class RoomComponent {
    roomId: string | null = null;

    constructor(private route: ActivatedRoute) {}

    ngOnInit() {
        this.roomId = this.route.snapshot.paramMap.get('id');
        // Aquí puedes cargar los detalles de la habitación basada en roomId
    }
    }
