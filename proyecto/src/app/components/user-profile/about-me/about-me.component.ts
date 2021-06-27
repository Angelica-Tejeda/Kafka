import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css'],
})
export class AboutMeComponent implements OnInit {
  bio:any;
  registerDate:any;
  favGenres:any[] = []

  constructor() { }

  ngOnInit(): void {
    this.getBioData(5);
    this.registerDate = '15/04/2021';
    this.favGenres = ['Terror', 'Suspenso', 'Policial', 'Drama'];
  }

  getBioData(id:any) {
    this.bio = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus ipsum consequatur doloremque earum ipsam impedit veniam? Maxime neque reprehenderit quos accusamus molestias culpa! Asperiores aperiam debitis facilis inventore praesentium fugiat!';
  }

  editBio() {
    $('#aboutMe-bio').removeAttr('disabled');
    $('#edit-button').addClass('not-display');
    $('#save-cancel-button').removeClass('not-display');
  }

  saveBio() {
    this.bio = $('#aboutMe-bio').text();
    $('#aboutMe-bio').attr('disabled', '');
    $('#save-cancel-button').addClass('not-display');
    $('#edit-button').removeClass('not-display');
  }

  cancelBio() {
    $('#aboutMe-bio').attr('disabled', '');
    $('#aboutMe-bio').text(this.bio);
    $('#save-cancel-button').addClass('not-display');
    $('#edit-button').removeClass('not-display');
  }
}
