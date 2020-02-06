import { Component, OnInit } from '@angular/core';

declare var $: any

@Component({
  selector: 'app-wedding-party',
  templateUrl: './wedding-party.component.html',
  styleUrls: ['./wedding-party.component.css']
})
export class WeddingPartyComponent implements OnInit {

  modalMessage: string = '';
  modalTitle: string = '';
  array: Link[];
  groomsmenLinks: Link[] = [new Link('https://www.amazon.com/dp/B0128NJK5W/ref=cm_sw_em_r_mt_dp_U_ZaNoEb1T132JR', 'SHIRTS'),
                            new Link('https://www.amazon.com/dp/B0775BWWTH/ref=cm_sw_em_r_mt_dp_U_-9MoEbA7NPPB5', 'PANTS'),
                            new Link('https://www.amazon.com/dp/B07QP5RXSK/ref=cm_sw_em_r_mt_dp_U_b7MoEb434J0QQ', 'TIE'),]
  bridesmaidsLinks: Link[] = [new Link('', 'NEED'),
                              new Link('', 'THE'),
                              new Link('', 'LIST'),]

  constructor() { }

  ngOnInit() {
  }

  groomsmenClicked(){
    this.modalTitle = 'Groomsmen Outfit'
    this.modalMessage = 'Brown belt and brown shoes.';
    this.array = this.groomsmenLinks;
    $("#formModal").modal('show');
  }

  bridesmaidsClicked(){
    this.modalTitle = 'Bridesmaids Outfit'
    this.modalMessage = 'Need the List';
    this.array = this.bridesmaidsLinks;
    $("#formModal").modal('show');
  }
}

class Link {
  public url : string;
  public title : string;

  constructor (url : string, title : string){ 
    this.url = url;
    this.title = title;
  } 
}
