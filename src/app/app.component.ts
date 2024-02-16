import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';


@Component({
  standalone: true,
  imports: [RouterModule],
  selector: 'mi-wallet-root',
  template: `
  <header>
<h1> hola es la wallet</h1>

  </header>
  
  `

})
export class AppComponent {
  
}
