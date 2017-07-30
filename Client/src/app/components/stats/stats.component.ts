import { Component, OnInit } from '@angular/core';
import { StatsService } from '../../services/stats.service';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent implements OnInit {

  constructor(private statsService: StatsService) {
  }

  ngOnInit() {
    this.statsService.getAllStats().then((response) => {
      this.onGetStatsSuccess(response.data);
    });
  }

  onGetStatsSuccess(data) {
    console.log(data);
    let stats = data;
    let usersChartElement = document.getElementById('usersChart');
    new Chart(usersChartElement, {
      type: 'line',
      data: {
        labels: stats.times,
        datasets: [{
          label: 'Users',
          data: stats.usersCount,
          fill: false,
          borderColor: [
            'rgba(63,127,191,1)'
          ],
          borderWidth: 3
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              stepSize: 3,
              beginAtZero: true
            }
          }]
        }
      }
    });

    let productsChartElement = document.getElementById('productsChart');
    new Chart(productsChartElement, {
      type: 'line',
      data: {
        labels: stats.times,
        datasets: [{
          label: 'Products',
          data: stats.componentsCount,
          fill: false,
          borderColor: [
            'rgba(63,191,65,1)'
          ],
          borderWidth: 3
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              stepSize: 3,
              beginAtZero: true
            }
          }]
        }
      }
    });

    let salesChartElement = document.getElementById('salesChart');
    new Chart(salesChartElement, {
      type: 'line',
      data: {
        labels: stats.times,
        datasets: [{
          label: 'Sales',
          data: stats.purchasesCount,
          fill: false,
          borderColor: [
            'rgba(191,127,63,1)'
          ],
          borderWidth: 3
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              stepSize: 3,
              beginAtZero: true
            }
          }]
        }
      }
    });
  }
}
