import { Destiny } from './../../models/destiny';
import { DestinyService } from './../../services/destiny.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-place-travel-client',
  templateUrl: './place-travel-client.component.html',
  styleUrls: ['./place-travel-client.component.css']
})
export class PlaceTravelClientComponent implements OnInit {
  destinys !: Destiny[];
  destiny !: Destiny;
  nameDestiny : any;
  constructor(
    private destinyService : DestinyService,
    private route: ActivatedRoute,
  ) { 
  }

  ngOnInit(): void {
    this.getDestiny();
  }

  getDestiny(){
    this.nameDestiny = this.route.snapshot.paramMap.get('name_destiny');
    
    this.destinyService.getDestinys()
      .subscribe((data: Destiny[]) =>{
        this.destinys = data;
        this.destinys.forEach((data : Destiny) => {

          if(data.name == this.nameDestiny){
          this.destiny = data;
          
          }
        });
    });
  }
}
