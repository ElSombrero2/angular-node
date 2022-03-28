import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginDto, LoginResponseDto } from 'src/app/models/dto/login.dto';
import { FindUserDto } from 'src/app/models/dto/user.dto';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private url: string = environment.url
  
  constructor(private http: HttpClient) { }

  public login(loginDto: LoginDto): Observable<LoginResponseDto>{ 
    return this.http.post<LoginResponseDto>(`${this.url}/user/login`, loginDto) 
  } 

  public findAll(): Observable<FindUserDto[]>{
    return this.http.get<FindUserDto[]>(`${this.url}/user/all`)
  }
}
