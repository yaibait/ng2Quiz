import { Component, OnInit } from '@angular/core';
import { AngularFire,AuthProviders, AuthMethods  } from 'angularfire2';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public af: AngularFire, private router:Router) { }

  ngOnInit() {

  }
  googleLogin(){
      this.af.auth.login({
              provider: AuthProviders.Google,
              method: AuthMethods.Popup,
      }).then((result) => {
          this.router.navigate(['quiz-create']);
      },() => {
          this.router.navigate(['/']);
      });

  };

  facebookLogin(){
      this.af.auth.login({
              provider: AuthProviders.Facebook,
              method: AuthMethods.Popup,
      }).then((result) => {
          this.router.navigate(['quiz-create']);
      },() => {
          this.router.navigate(['/']);
      });
  }

}
