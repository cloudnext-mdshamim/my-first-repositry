export class User {

    id:number;
    userName:string;
    emailId:string;
    password:string;
    cpassword:string;

    public User(id, userName, emailId, password) {
		this.id = id;
		this.userName = userName;
		this.emailId = emailId;
		this.password = password;
	}
}
