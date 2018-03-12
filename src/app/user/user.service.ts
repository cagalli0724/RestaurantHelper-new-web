import { Injectable } from '@angular/core';
import { HttpClient,  HttpHeaders } from '@angular/common/http';
import {Router} from '@angular/router';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/finally';
import {RestResponse} from './../model/restResponse.model';

import {UserModel} from '../model/user.model';
@Injectable()
export class UserService {

	
	
    constructor(private http:HttpClient,private router: Router) { }

	public getUsers():Observable<UserModel[]>{
		let headers = new HttpHeaders();
		headers.append("Access-Control-Allow-Origin", "*");
		headers.append("Access-Control-Allow-Headers","X-Requested-With,Content-Type, Authorization");
  		headers.append("Access-Control-Allow-Methods","POST,GET");
  		headers.append('Access-Control-Allow-Credentials', 'true');
  		
		return this.http.get<UserModel[]>("http://localhost:8080/getUsers",{headers});
	}
	
	
	public deleteUser(user:UserModel):Observable<UserModel[]>{
		return this.http.post<UserModel[]>("http://localhost:8080/deleteUser",JSON.stringify(user));
		
		
	}
}
