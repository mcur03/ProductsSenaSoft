class User{
    private _email: string;
    private _username: string;
    private _pass: string;

    constructor(
        email:string,
        username:string,
        pass:string
    ){
        this._email = email;
        this._username = username;
        this._pass = pass;
    }

    
    get email():string{
        return this._email;
    }
    get username():string{
        return this._username;
    }
    get pass():string{
        return this._pass;
    }

    set email(email:string){
        this._email = email;
    }
    set userName(username:string){
        this._username = username;
    }
    set pass(pass:string){
        this._pass = pass;
    }
}

export default User;