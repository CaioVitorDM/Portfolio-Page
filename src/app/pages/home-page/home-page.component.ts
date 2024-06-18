import {Component} from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [HttpClientModule],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
})
export class HomePageComponent {
  constructor(private http: HttpClient) {}
  downloadFile(filePath: string): void {
    this.http.get(filePath, {responseType: 'blob'}).subscribe((blob) => {
      const url = window.URL.createObjectURL(blob);
      window.open(url, '_blank'); // Abre o PDF em uma nova aba
    });
  }
}
