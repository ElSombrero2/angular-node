import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/api/services/user/user.service';
import { FindUserDto } from 'src/app/models/dto/user.dto';

@Component({
  selector: 'app-find-all',
  templateUrl: './find-all.component.html',
  styleUrls: ['./find-all.component.scss']
})
export class FindAllComponent implements OnInit {

  public users: FindUserDto[] = []

  constructor(private user: UserService) { }

  ngOnInit(): void {
    this.user.findAll().subscribe({
      error: () => alert('Error on fetching data!'),
      next: (res) => this.users = res 
    })
  }

}
