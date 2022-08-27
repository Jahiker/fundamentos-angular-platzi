import { Component } from '@angular/core';
import { Product } from './product.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  // Propiedades
  public name: string = 'Jahiker';

  age: number = 36;

  img = 'https://source.unsplash.com/random';

  btnDisabled: boolean = true;

  person = {
    name: 'Jahiker',
    age: 36,
    avatar: 'https://source.unsplash.com/random',
  };

  names: string[] = ['Jahiker', 'Mafer', 'Pili'];

  newName = '';

  products: Product[] = [
    {
      name: 'EL mejor juguete',
      price: 565,
      image: './assets/images/toy.jpg',
      category: 'all',
    },
    {
      name: 'Bicicleta casi nueva',
      price: 356,
      image: './assets/images/bike.jpg',
    },
    {
      name: 'Colleción de albumnes',
      price: 34,
      image: './assets/images/album.jpg',
    },
    {
      name: 'Mis libros',
      price: 23,
      image: './assets/images/books.jpg',
    },
    {
      name: 'Casa para perro',
      price: 34,
      image: './assets/images/house.jpg',
    },
    {
      name: 'Gafas',
      price: 3434,
      image: './assets/images/glasses.jpg',
    },
  ];

  widthImg = 10;

  box = {
    width: 100,
    height: 100,
    background: 'red'
  };

  register ={
    name: '',
    email: '',
    password: ''
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
    console.log(
      '🚀 ~ file: app.component.ts ~ line 32 ~ AppComponent ~ onScroll ~ element',
      element.scrollTop
    );
  }

  changeName(event: Event) {
    const element = event.target as HTMLInputElement;
    this.person.name = element.value;
  }

  addName() {
    this.names.push(this.newName);
    this.newName = '';
  }

  deleteName(index: number) {
    this.names.splice(index, 1);
  }

  onRegister() {
    console.log(this.register);
  }
}

