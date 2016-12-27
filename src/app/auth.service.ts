import { Injectable } from '@angular/core';
import { CanActivate,ActivatedRouteSnapshot,RouterStateSnapshot,Router } from '@angular/router';
import { AngularFire,AuthProviders, AuthMethods  } from 'angularfire2';
@Injectable()
export class AuthService implements CanActivate{
    authState:boolean = false;
  constructor(private af:AngularFire,private router:Router) { 
      var auth = this.af.auth.subscribe((auth) => {
            if(auth == null){
                // this.router.navigate(["/"]);
                this.authState = false;
            }else{
                this.authState = true;
            }
        },(error) =>{
            // this.router.navigate(["login"]);
            this.authState = false;
        });
  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
      if(!this.authState){
          this.router.navigate(["login"]);
      }
      return this.authState;
  }
}
