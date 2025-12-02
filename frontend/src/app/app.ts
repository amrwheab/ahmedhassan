import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  imports: [RouterModule],
  styleUrl: './app.css',
})
export class App {
  protected title = 'frontend';
  text = '';

  http = inject(HttpClient);

  ngOnInit(): void {
    this.http
      .get<{ status: string }>(environment.apiUrl + '/health')
      .subscribe((res: { status: string }) => {
        this.text = res.status;
      });
  }
}
