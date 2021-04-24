import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-subscriptions',
  templateUrl: './subscriptions.component.html',
  styleUrls: ['./subscriptions.component.css']
})
export class SubscriptionsComponent implements OnInit {

  followedAuthors:any[]=[];
  suscribedAuthors:any[]=[];

  constructor() { }

  ngOnInit(): void {
    this.getSuscriptionData(5);
  }

  getSuscriptionData(id:any){
    this.suscribedAuthors=[{"name":"J.K. Rowling", "pic":"https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Circle-icons-profile.svg/768px-Circle-icons-profile.svg.png"}, {"name":"J.K. Rowling", "pic":"https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Circle-icons-profile.svg/768px-Circle-icons-profile.svg.png"}, {"name":"J.K. Rowling", "pic":"https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Circle-icons-profile.svg/768px-Circle-icons-profile.svg.png"}, {"name":"J.K. Rowling", "pic":"https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Circle-icons-profile.svg/768px-Circle-icons-profile.svg.png"}]
    this.followedAuthors=[{"name":"J.K. Rowling", "pic":"https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Circle-icons-profile.svg/768px-Circle-icons-profile.svg.png"}, {"name":"J.K. Rowling", "pic":"https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Circle-icons-profile.svg/768px-Circle-icons-profile.svg.png"}, {"name":"J.K. Rowling", "pic":"https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Circle-icons-profile.svg/768px-Circle-icons-profile.svg.png"}, {"name":"J.K. Rowling", "pic":"https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Circle-icons-profile.svg/768px-Circle-icons-profile.svg.png"}, {"name":"J.K. Rowling", "pic":"https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Circle-icons-profile.svg/768px-Circle-icons-profile.svg.png"}, {"name":"J.K. Rowling", "pic":"https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Circle-icons-profile.svg/768px-Circle-icons-profile.svg.png"}, {"name":"J.K. Rowling", "pic":"https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Circle-icons-profile.svg/768px-Circle-icons-profile.svg.png"}, {"name":"J.K. Rowling", "pic":"https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Circle-icons-profile.svg/768px-Circle-icons-profile.svg.png"}, {"name":"J.K. Rowling", "pic":"https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Circle-icons-profile.svg/768px-Circle-icons-profile.svg.png"}, {"name":"J.K. Rowling", "pic":"https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Circle-icons-profile.svg/768px-Circle-icons-profile.svg.png"}]
  }

}
