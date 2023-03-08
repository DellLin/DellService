import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MatchHistoryComponent } from './match-history/match-history.component';
import { SearchRuleComponent } from './search-rule/search-rule.component';

const routes: Routes = [
  { path: 'search-rule', component: SearchRuleComponent },
  { path: 'match-history', component: MatchHistoryComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PttRoutingModule { }
