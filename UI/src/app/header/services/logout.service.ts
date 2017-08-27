import { Injectable  } from '@angular/core';
import { environment } from '../../../environments/environment';

import { Http, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class LogoutService {

  constructor(private http: Http) {  };

  public logout():any {
    return this.http.get(environment.urlLogout, 
    	new RequestOptions({ withCredentials: true }) 
    );
  }

}
 