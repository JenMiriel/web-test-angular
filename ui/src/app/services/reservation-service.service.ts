import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import {Reservation} from '../models/reservation';


@Injectable({
  providedIn: 'root'
})
export class ReservationServiceService {
  url = '';

  constructor(private http: HttpClient) {
  }

  getAllReservations(): Observable<any> {
    return this.http.get<any>(this.url);
  }

  makeReservation(newReservation: Reservation): Observable<Reservation> {
    return this.http.post<Reservation>(this.url, {
      newReservation
    }).pipe(
      catchError(err => of(err))
    );
  }

}
