import { Component, OnInit } from '@angular/core';
import { AuthHelperService } from '../../services/auth-helper.service';
import { StatsService } from '../../services/stats.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  stats: { data: {}, success: boolean };

  constructor(public authHelperService: AuthHelperService, private statsService: StatsService) {
  }

  ngOnInit() {
    this.statsService.getHomeStats().then((retrievedStats) => {
      this.stats = retrievedStats.data;
    });
  }

}
