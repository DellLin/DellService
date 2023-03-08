import { PttCatchHistoryService } from './../../../api/services/ptt-catch-history.service';
import { Component, OnInit } from '@angular/core';
import { PttCatchHistory } from 'src/app/api/models';

@Component({
  selector: 'app-match-history',
  templateUrl: './match-history.component.html',
  styleUrls: ['./match-history.component.scss']
})
export class MatchHistoryComponent implements OnInit {
  products: PttCatchHistory[] = []
  constructor(private pttCatchHistoryService: PttCatchHistoryService) { }

  ngOnInit(): void {
    this.pttCatchHistoryService.apiPttCatchHistoryGet$Json()
    .subscribe({next: (value) => {this.products = value}});
  }

}
