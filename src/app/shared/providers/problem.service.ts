import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { API_ENDPOINT, API_PREFIX, API_VERSION_REQUIRED } from '../constants';

@Injectable()
export class ProblemService {
    constructor(
        private http: HttpClient,
    ) { }

    getCompleteURL(){
        return API_PREFIX + API_ENDPOINT +API_VERSION_REQUIRED;
    }

    postSolution(problem_data: any): Observable<any> {
        let headers = new HttpHeaders();
        headers = headers.set('Content-Type', 'application/x-www-form-urlencoded');
        const body = new HttpParams()
        .set('parameters', problem_data.parameters)
        .set('shopping_centers', problem_data.shopping_centers)
        .set('roads', problem_data.roads)
        .set('username', 'taximo_api_user')
        .set('checksum', 'cd7ced88fb72ee862940d5664555251f9ba044d8478a71a7b70b04bd708c2796');
        return this.http.post(this.getCompleteURL() + '/synchronous_shopping',
            body.toString(), 
            { headers }
        );
    }
}