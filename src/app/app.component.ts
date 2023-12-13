import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { Button } from './components/button.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HomeComponent, Button],
  template: `
  <main>
    <header class="brand-name">
      <img class="brand-logo" src="/assets/logo.svg" alt="logo" aria-hidden="true">
    </header>
    <section class="content">
      <app-home/>
      <!-- 
        A forma de passar os inputs para o componente filho funcionam de maneira parecida com o React e suas "props", porém as coisas são mais desacopladas, precisando declarar na classe do componente. A notação usando o [] para o input é limitada a uso com uma propriedade declarada dentro da classe pai. Se eu tentar passar uma string comum, gerará erro. 
        A forma abaixo é feita utilizando o conceito de property binding
      -->
      <my-button
        [label]='buttonLabel'
      />
      <my-button
        [label]='buttonSecond' 
      />
      <!-- 
        Para passar uma string, deve
    -se retirar o [] da declaração. É possível passar uma propriedade da classe, conforme o exemplo anterior, basta adicionar {{}} na parte da string escrita. 
        A forma abaixo é feita utilizando o conceito de interpolação
    -->
      <my-button
        label='Texto em string'
      />
      <my-button
        label='{{buttonSecond}}'
      />

      <!-- Event binding -->
    </section>
  </main>
  `,
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  title = 'homes';
  buttonLabel: string = "Texto do Pai";
  buttonSecond: string = "Outro texto do Pai"
}
