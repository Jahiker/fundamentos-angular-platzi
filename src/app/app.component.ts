import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  // Propiedades
  public name: string = 'Jahiker';
  age: number = 36;
  img = 'https://source.unsplash.com/random';
  btnDisabled: boolean = true;
  person = {
    name: "Jahiker",
    age: 36,
    avatar: "https://source.unsplash.com/random"
  }

  // Metodos
  public toggleButton() {
    this.btnDisabled = !this.btnDisabled;
  }

  increaseAge() {
    this.person.age += 1;
  }

  onScroll(event: Event) {
    const element = event.target as HTMLElement;
    console.log("🚀 ~ file: app.component.ts ~ line 32 ~ AppComponent ~ onScroll ~ element", element.scrollTop)
  }

  changeName(event: Event) {
    const element = event.target as HTMLInputElement;
    this.person.name = element.value;
  }
}
