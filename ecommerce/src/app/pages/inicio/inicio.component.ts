import { Component } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {
  produtos = [
    {
      id: 1,
      nome: 'Notebook Gamer',
      descricao: 'Processador i9, 32GB RAM, RTX 4080',
      preco: 12500.00,
      imagem: 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&w=400&q=80'
    },
    {
      id: 2,
      nome: 'Mouse Sem Fio',
      descricao: 'Mouse ergonômico com 10000 DPI',
      preco: 250.00,
      imagem: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?auto=format&fit=crop&w=400&q=80'
    },
    {
      id: 3,
      nome: 'Teclado Mecânico',
      descricao: 'Switches azuis, retroiluminado RGB',
      preco: 450.00,
      imagem: 'https://images.unsplash.com/photo-1595225476474-87563907a212?auto=format&fit=crop&w=400&q=80'
    },
    {
      id: 4,
      nome: 'Monitor Ultrawide',
      descricao: 'Monitor 34 polegadas 144Hz 1ms',
      preco: 2800.00,
      imagem: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=400&q=80'
    }
  ];
}
