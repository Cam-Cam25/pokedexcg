
import { Component, Input, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-pokemon',
  standalone: true,
  imports: [],
  templateUrl: './pokemon.component.html',
  styleUrl: './pokemon.component.css'
})
export class PokemonComponent {
@Input({required:true})solicitarImagen:string = ""//1
@Output() clickPokemon = new EventEmitter<number>(); 
  pokemonService: any;
  pokemonData: any;
anteriorPokemon(){
this.clickPokemon.emit(-1);
}
siguientePokemon(){
  this.clickPokemon.emit(1);
}
aleatorioPokemon(){
  const randomId = Math.floor(Math.random() * 1010);
  this.clickPokemon.emit(randomId);
}   
}
