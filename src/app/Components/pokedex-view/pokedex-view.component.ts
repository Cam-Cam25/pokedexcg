import { Component, EventEmitter, Output } from '@angular/core';
import { PokemonComponent } from '../pokemon/pokemon.component';
import { GraficoComponent } from '../grafico/grafico.component';

@Component({
  selector: 'app-pokedex-view',
  standalone: true,
  imports: [PokemonComponent, GraficoComponent],//se importa los componentes
  templateUrl: './pokedex-view.component.html',
  styleUrl: './pokedex-view.component.css'
})
export class PokedexViewComponent {
  pokemonId: number = 0; 
  pokemonImagen: string = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/0.png`;
handelPokemon(event: number){
  this.pokemonId += event;
  this.pokemonImagen = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${this.pokemonId}.png`;
}
alePokemon(){
  this.pokemonId = Math.floor(Math.random() * 1010);
  this.pokemonImagen = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${this.pokemonId}.png`;
}
}