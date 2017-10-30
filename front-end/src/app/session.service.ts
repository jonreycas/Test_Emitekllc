import { Injectable } from '@angular/core';

@Injectable()
export class SessionService {

    private loggedIn: boolean = false;
    public id: number = 1;

    isLoggedIn():boolean{
        return this.loggedIn;
    }

    setLoggedIn(isLoggedIn: boolean){
        this.loggedIn = isLoggedIn;
    }

    getId():number{
        return this.id;
    }

    setId(id: number){
        this.id = id;
    }
}