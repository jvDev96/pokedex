import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'poke-search',
  templateUrl: './poke-search.component.html',
  styleUrls: ['./poke-search.component.scss']
})
export class PokeSearchComponent implements OnInit {

  @Output() public emmitSearch: EventEmitter<any> = new EventEmitter();
  @Output() public tippedText: String = "";

  constructor() { }

  ngOnInit(): void {
  }

  public searchPokemon(value: String){
    this.emmitSearch.emit(value);
  }
}
