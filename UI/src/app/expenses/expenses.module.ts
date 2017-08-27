import { NgModule 	       } from '@angular/core';
import { CommonModule      } from '@angular/common';
import { RouterModule      } from '@angular/router';
import { FormsModule     } from '@angular/forms';

import { ExpensesComponent } from './components/expenses/expenses.component';
import { ExpensesService   } from './services/expenses.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forRoot([
    	{ path: 'expense-details/:userName', component: ExpensesComponent }
    ])
  ],
  providers: 	[ExpensesService],
  declarations: [ExpensesComponent]
})

export class ExpensesModule { }
