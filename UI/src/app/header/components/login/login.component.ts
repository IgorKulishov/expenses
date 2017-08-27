import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';


@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public loginService: LoginService, 
  			  private router: Router) {
  }

  public user: any;
  public errorMessage: string;

    public submitLogin(formInput: NgForm) : any {
  	this.loginService.login({userName:formInput.value.userName, password:formInput.value.password}).subscribe((res) => {

        console.log('res body', JSON.parse(res._body));
        console.log('res length', JSON.parse(res._body).length);

        if(JSON.parse(res._body).length > 0 ) {
        	console.log('has data');
        } else {
        	console.log('no data');
        }

        console.log('values of the form: ', formInput.value);
        this.errorMessage = '';

        //show cookies
		//console.log('cookies: ', this._cookieService.getAll());

        this.router.navigate(['/expense-details', 'ik']);
    },
    (err) => {
    //	console.log('cookies from error : ', this._cookieService.getAll());
    	console.log('cookies from error : ', document.cookie);
    	console.log('err', err)
    	this.errorMessage = 'wrong user name or password';
    	this.router.navigate(['/login']);
    });
  } 

  ngOnInit() {
   // this.submitLogin();
  }

}
