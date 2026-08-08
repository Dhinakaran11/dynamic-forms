import { HttpClient } from '@angular/common/http';
import { Injectable, Service } from '@angular/core';



@Injectable({
    providedIn: 'root'
})

export class ListService {

    constructor(private http: HttpClient) {
    }
    getuserlisr() {
        return this.http.get<any[]>('https://jsonplaceholder.typicode.com/todos')

    }

    getUserDetails() {
        return this.http.get<any[]
        >('https://jsonplaceholder.typicode.com/users');
    }
    getListData(name: string) {
        return this.http.get<any[]>(`https://jsonplaceholder.typicode.com/${name}`)

    }
}
