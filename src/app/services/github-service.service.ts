import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GithubServiceService {
  private readonly baseUrl = 'https://api.github.com/repos/TaylorShane/';
  private readonly stAllRepos =
    'https://api.github.com/users/TaylorShane/repos';
  private readonly options: any = {
    // headers: { 'User-Agent': 'request' },
    json: true,
  };

  constructor(private http: HttpClient) {}

  getAllRepos(): Observable<any> {
    return new Observable<any>((observer) => {
      this.http
        .get(this.stAllRepos, this.options)
        .pipe()
        .subscribe({
          error: (err: HttpErrorResponse) =>
            observer.error('failed to retrieve data ' + err),
          next: (repoData) => observer.next(repoData),
        });
    });
  }
}
