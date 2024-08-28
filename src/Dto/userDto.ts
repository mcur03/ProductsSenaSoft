class User{
    private _email: string;
    private _userName: string;
    private _pass: string;

    constructor(
        email:string,
        userName:string,
        pass:string
    ){
        this._email = email;
        this._userName = userName;
        this._pass = pass;
    }

    
    get email():string{
        return this._email;
    }
    get userName():string{
        return this._userName;
    }
    get pass():string{
        return this._pass;
    }

    set email(email:string){
        this._email = email;
    }
    set userName(userName:string){
        this._userName = userName;
    }
    set pass(pass:string){
        this._pass = pass;
    }
}

export default User;