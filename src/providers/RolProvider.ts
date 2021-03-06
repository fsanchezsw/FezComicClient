import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';
import { HttpMethodsInterface } from './HttpMethodsInterface';
import { Rol } from 'src/models/Rol';

@Injectable()
export class RolProvider implements HttpMethodsInterface {

    basicUrl : string = 'http://localhost:8080/B3servidorREST/webresources/app.entities.rol/';

    constructor(private http: Http) {}

    private obtainHeaders() {
        var headers = new Headers();
        headers.append('Access-Control-Allow-Origin' , '*');
        headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
        headers.append('Accept','application/json');
        headers.append('content-type','application/json;charset=utf-8');

        return headers;
    }

    all(): Observable<Rol[]> {
        
        return this.http.get(this.basicUrl).pipe(map(response => { return response.json() }));
    }

    get(id: number): Observable<Rol> {
        
        return this.http.get(this.basicUrl + id).pipe(map(response => { return response.json() }));
    }

    put(id: number, rol: Rol): Observable<Rol> {
        
        return this.http.put(this.basicUrl + id, rol).pipe(map(response => { return response.json() }));
    }
    post(rol: Rol): Observable<Rol> {
        
        return this.http.post(this.basicUrl, rol).pipe(map(response => { return response.json() }));
    }
    delete(id: number): Observable<Rol> {
        
        return this.http.delete(this.basicUrl + id).pipe(map(response => { return response.json() }));
    }

    count(): Observable<Rol> {
        
        return this.http.get(this.basicUrl + 'count').pipe(map(response => { return response.json() }));
    }
}