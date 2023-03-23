import { Component, OnInit, Output } from '@angular/core';
import { PokeApiService } from 'src/app/service/poke-api.service';

@Component({
  selector: 'poke-list',
  templateUrl: './poke-list.component.html',
  styleUrls: ['./poke-list.component.scss']
})
export class PokeListComponent implements OnInit {


  private setAllPokemons: any;
  public getAllPokemons: any;

  constructor(
    private pokeApiService: PokeApiService
  ) { }

  ngOnInit(): void {
    this.pokeApiService.apiListAllPokemons.subscribe(
      res => {
        this.setAllPokemons = res.results;
        this.getAllPokemons = this.setAllPokemons;
      }
    );
  }


  public getSearchPokemon(value:string){
    const filterName = this.setAllPokemons.filter( (res:any) => {
      return !res.name.indexOf(value.toLowerCase());
    })

    // const filterId = this.setAllPokemons.filter( (res:any) => {
    //   // console.log(res)
    //   return !res.id.indexOf(value);
    // })

    if(filterName.length){

    }


    this.getAllPokemons = filterName;
  }
}
