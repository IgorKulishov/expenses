import { Component } from '@angular/core';
import { LogoutService } from '../../services/logout.service';
import { Router } from '@angular/router';

@Component({
  selector: 'logout',
  templateUrl: './logout.component.html'
})
export class LogoutComponent {
  
  constructor(private logoutService: LogoutService, private router: Router) { }

  public logout = () => {
  	this.logoutService.logout().subscribe((res) => {
  		console.log('logout response: ', res);
  		this.router.navigate(['/login']);
  	}, (err) => {
  		console.log('logout error response: ', err);
  		this.router.navigate(['/login']);
  	});
  }

}