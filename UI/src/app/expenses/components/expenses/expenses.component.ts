import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute    } from '@angular/router';
import { ExpensesService   } from '../../services/expenses.service';
import { NgForm            } from '@angular/forms';

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
  public title: any;
  public details: any;


  //add new expenses for the user
  public submitNewExpenses (newEntryData: NgForm):any {
    this.expensesService.postNewExpense('ik', {
      expense: newEntryData.value.expense,
      beneficiaryName: newEntryData.value.beneficiaryName,
      amount: newEntryData.value.amount,
      date: newEntryData.value.date}
    ).subscribe((res) => {
      this.expenses.push(JSON.parse(res._body));
      this.successMessage = 'New expenses were added';
      for(let i = 0; i< this.expenses.length; i++) {

      }
    }, (err) => {
      console.error('new entry err: ', err);
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
