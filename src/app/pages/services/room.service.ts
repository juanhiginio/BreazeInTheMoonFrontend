    // src/app/services/room.service.ts
    import { Injectable } from '@angular/core';
    import { HttpClient } from '@angular/common/http';
    import { Observable } from 'rxjs';

    @Injectable({
    providedIn: 'root' // Esto asegura que el servicio esté disponible en toda la aplicación
    })
    export class RoomService {
    private apiUrl = 'http://tu-backend/api'; // Reemplaza con la URL de tu backend

    constructor(private http: HttpClient) {}

    checkAvailability(roomId: string): Observable<{ available: boolean }> {
        return this.http.get<{ available: boolean }>(`${this.apiUrl}/rooms/${roomId}/availability`);
    }

    reserveRoom(roomId: string): Observable<{ success: boolean }> {
        return this.http.post<{ success: boolean }>(`${this.apiUrl}/rooms/${roomId}/reserve`, {});
    }
    }
