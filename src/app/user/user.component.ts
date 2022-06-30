import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserPreview } from '../models/user.model';
import { UsersService } from '../services/users.service'


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private usersService: UsersService, private router: Router) { }
   resUser!: UserPreview[]
  ngOnInit(): void {
    this.getUsers();
  }
  getUsers() {
    this.usersService.getUsers().subscribe(data => {
        console.log(data);
        this.resUser = data.data;
        // const keys = response.headers.keys();
        // keys.forEach(key => console.log(`${key}: ${response.headers.get(key)}`));
    });
}
 onclick(someId: string){
   this.router.navigate(['details', someId]);
 }

}
