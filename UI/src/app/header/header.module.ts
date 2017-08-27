import { NgModule        } from '@angular/core';
import { CommonModule    } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { LogoutComponent } from './components/logout/logout.component';
import { LoginComponent  } from './components/login/login.component';
import { LoginService    } from './services/login.service';
import { LogoutService   } from './services/logout.service';
import { FormsModule     } from '@angular/forms';
import { RouterModule    } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forRoot([
    	{ path: 'login',  component: LoginComponent   },
    	{ path: '**',     component: LoginComponent   }
    ])
  ],
  providers: [
		LogoutService,
		LoginService
  ],
  declarations: [
  	HeaderComponent, 
  	LogoutComponent,
	LoginComponent
  ]
})
export class HeaderModule { }

