import { Injectable  } from '@angular/core';
import { environment } from '../../../environments/environment';

import { Http, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class LoginService {

  constructor(private http: Http) {  };

  public login(userCredentials):any {
    return this.http.post(environment.urlLogin, userCredentials, 
    	new RequestOptions({ withCredentials: true }) 
    );
  }

}
 