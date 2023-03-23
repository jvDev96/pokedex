import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokeApiService } from 'src/app/service/poke-api.service';
import { forkJoin } from 'rxjs';
import { PokeListComponent } from 'src/app/shared/poke-list/poke-list.component';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  private url: string = 'https://pokeapi.co/api/v2/pokemon';
  private urlName: string = 'https://pokeapi.co/api/v2/pokemon-species';
  private urlTypes: string = 'https://pokeapi.co/api/v2/type';

  public pokemon: any;
  public isLoading: boolean = true;
  public type: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private pokeApi: PokeApiService,
  ) { }

  ngOnInit(): void {
    this.getType;
    this.getPokemon;
  }

  get getPokemon() {
    const id = this.activatedRoute.snapshot.params[''];

    const pokemon = this.pokeApi.apiGetPokemons(`${this.url}/${id}`);
    const name = this.pokeApi.apiGetPokemons(`${this.urlName}/${id}`);

    // console.log('alala', this.pokemon)

    // const typeId = this.pokelist.

    const type = this.pokeApi.apiGetPokemons(`${this.urlTypes}/${this.type}`);

    return forkJoin([pokemon, name]).subscribe(
      res => {
        this.pokemon = res;

        this.getType();
        const type = this.pokeApi.apiGetPokemons(`${this.urlTypes}/${this.type}`);

        console.log('THIS.TYPE ', this.type)

        return forkJoin([pokemon, name, type]).subscribe(
          res => {
            this.pokemon = res;
            console.log('RES ',res);
          }
        )
      }
    )
  }

  public getType(){
    const value = this.pokemon[0].types[0].type.url

    console.log('VALUE = ', value)
    const urlLenght = value.toString().length;
    const typeId = value.toString().substring(urlLenght-3,urlLenght).replace('/','');

    this.type = typeId;
  }
}
