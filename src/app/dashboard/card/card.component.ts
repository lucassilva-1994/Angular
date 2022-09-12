import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Input } from '@angular/core';
import { FakeApiService } from 'src/app/fake-api.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() card;
  constructor(private http:HttpClient) { 

  }

  ngOnInit() {
  }

  onLike(card: any){
    // TODO: incrementar o like, salvar via rest
    card.likes ++;
    this.http.put('/api/skills/' + card.id, card).subscribe();

  }

  onShare(card: any){
    window.open("https://www.linkedin.com/in/lucas1994/", '_blank');
  }

}
