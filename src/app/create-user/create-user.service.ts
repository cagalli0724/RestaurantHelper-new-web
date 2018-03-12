import { Injectable } from '@angular/core';
import {RestResponse} from './../model/restResponse.model';
import {Observable} from 'rxjs/Observable';
import {UserModel} from './../model/user.model';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class CreateUserService {

  	constructor(private http: HttpClient) { }
  	
	public validate(user: UserModel):boolean{
		let isValid = true;
		if(!user.email){
			isValid = false;
		}
		if(!user.firstName){
			isValid = false;
		}
		if(!user.lastName){
			isValid = false;
		}
		if(!user.password){
			isValid = false;
		}
		return isValid;
	}
	
	public saveOrUpdate(user: UserModel):Observable<RestResponse>{
		return this.http.post<RestResponse>("http://localhost:8080/saveOrUpdate",JSON.stringify(user));
	}
}
