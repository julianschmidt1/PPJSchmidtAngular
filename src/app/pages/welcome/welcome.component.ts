import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { inject } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule
  ],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.scss'
})
export class WelcomeComponent implements OnInit {

  public aboutData = null;
  httpClient = inject(HttpClient);

  ngOnInit(): void {
    this.httpClient.get('https://api.github.com/users/julianschmidt1').subscribe({
      next: (d) => {
        console.log(d)
        this.aboutData = d;
      }
    })
  }

}
