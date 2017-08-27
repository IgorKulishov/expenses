import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute    } from '@angular/router';
import { ExpensesService   } from '../../services/expenses.service';
import { NgForm } from '@angular/forms';

@Component({
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.css']
})
export class ExpensesComponent implements OnInit {

  constructor(private expensesService:ExpensesService, 
              private activedRoute: ActivatedRoute    ) {
  }

  public expenses: any;
  private currentUser: any;
  private sub: any;
  public successMessage: string;
  public errorMessage: string;


  //add new expenses for the user
  public submitNewExpenses (newEntryData: NgForm):any {
    this.expensesService.postNewExpense('ik', {
      expense: newEntryData.value.expense,
      amount: newEntryData.value.amount,
      date: newEntryData.value.date}
    ).subscribe((res) => {
      console.log('new entry data: ', res);
      this.expenses.push(JSON.parse(res._body));
      this.successMessage = 'New expenses were added';
      newEntryData.value.expense = null;
      newEntryData.value.amount = null;
      newEntryData.value.date = null;
    }, (err) => {
      console.log('new entry err: ', err);
      this.errorMessage = 'Sorry, we are failed to add your new expenses';
    });
  }

  //get expenses for the user
  ngOnInit() {
    this.sub = this.activedRoute.params.subscribe(params => {
      this.currentUser = params["userName"];
      this.expensesService.getExpenses(this.currentUser)
          .subscribe((res) => {
            this.expenses = JSON.parse(res._body);
          });
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
