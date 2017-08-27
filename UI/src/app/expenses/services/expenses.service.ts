import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions } from '@angular/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ExpensesService {

  constructor(private http : Http ) { }

  public getExpenses(currentUser): any {
    let urlExpenses = environment.urlExpenses + '/expense-details/' + currentUser;
  	return this.http.get( urlExpenses, new RequestOptions({ withCredentials: true }) );
  }

  public postNewExpense(currentUser, newExpense): any {
    let urlPoseExpenses = environment.urlExpenses + '/post-new-expense/' + currentUser;
  	return this.http.post( urlPoseExpenses, newExpense, new RequestOptions({ withCredentials: true }) );
  }

}
