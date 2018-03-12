import {ParentEntity} from './parentEntity.model';

export class UserModel extends ParentEntity{
	public firstName:string;
	public lastName:string;
	public email:string;
	public address:string;
	public phoneNumber:string;
	public password:string

}