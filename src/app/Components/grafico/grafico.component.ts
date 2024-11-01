import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-grafico',
  standalone: true,
  imports: [],
  templateUrl: './grafico.component.html',
  styleUrl: './grafico.component.css'
})
export class GraficoComponent {
  ataque: number = 100;  
  defensa: number = 0; 
  renderer: any;
isDarkModeEnabled: any;
  icon: string = '😀';

  Ataque() {
    if (this.ataque > 0) {
      this.ataque -= 10;
    }
  }
  Defensa() {
    if (this.defensa < 100) {
      this.defensa += 10;
    }
    }
  toggleDarkTheme(): void {
    document.body.classList.toggle('dark-theme');
  }
    
}
