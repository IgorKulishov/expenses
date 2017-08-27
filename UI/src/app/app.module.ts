import { BrowserModule   } from '@angular/platform-browser';
import { NgModule        } from '@angular/core';
import { FormsModule     } from '@angular/forms';
import { HttpModule      } from '@angular/http';
import { RouterModule    } from '@angular/router';

import { AppComponent   } from './app.component';
import { ExpensesModule } from './expenses/expenses.module';
import { HeaderModule   } from './header/header.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule,
    ExpensesModule,
    HeaderModule
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
