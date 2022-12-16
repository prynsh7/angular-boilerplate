import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Flight } from '@/_models/flight';

@Injectable({ providedIn: 'root' })
export class FlightServices {
    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<Flight[]>(`${config.apiUrl}/flight`);
    }

    register(flight: Flight) {
        return this.http.post(`${config.apiUrl}/flight/add`, flight);
    }

    delete(id: number) {
        return this.http.delete(`${config.apiUrl}/flight/${id}`);
    }
}