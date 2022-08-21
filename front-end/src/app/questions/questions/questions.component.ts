import { EscolhasService } from './../../service/escolhas.service';
import { Component, OnInit } from '@angular/core';
import { IEscolha } from 'src/app/model/IEscolha.model';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss'],
})
export class QuestionsComponent implements OnInit {
  escolha: IEscolha = {
    p1: [],
    p2: 0,
    p3: 0,
    p4: 0,
    p5: 0,
  };
  lixo: { lixo: any[] } = {
    lixo: [{}],
  };

  question: { value: number; name: string; isSelected?: boolean }[] = [
    { value: 1, name: 'Netflix' },
    { value: 2, name: 'Prime Video' },
    { value: 3, name: 'Disney+' },
    { value: 4, name: 'GloboPlay' },
    { value: 5, name: 'Apple Tv+' },
    { value: 6, name: 'Nenhuma' },
  ];

  question2: {
    name: string;
    grupo: string;
    value: number;
  }[] = [
    {
      name: 'Sim',
      grupo: 'p2',
      value: 1,
    },
    {
      name: 'Não',
      grupo: 'p2',
      value: 2,
    },
  ];
  question3: { nameq3: string; grupo: string; valueq3: number }[] = [
    {
      nameq3: 'Extremamente possivel',
      grupo: 'p3',
      valueq3: 1,
    },
    {
      nameq3: 'Muito possivel',
      grupo: 'p3',
      valueq3: 2,
    },
    {
      nameq3: 'Talvez use',
      grupo: 'p3',
      valueq3: 3,
    },
    {
      nameq3: 'As vezes usa',
      grupo: 'p3',
      valueq3: 4,
    },
    {
      nameq3: 'Nunca usa',
      grupo: 'p3',
      valueq3: 5,
    },
  ];
  question4: { nameq4: string; grupo: string; valueq4: number }[] = [
    {
      nameq4: 'Menos de 1 hora',
      grupo: 'p4',
      valueq4: 1,
    },
    {
      nameq4: 'Entre 1 e 2 horas',
      grupo: 'p4',
      valueq4: 2,
    },
    {
      nameq4: 'Entre 2 a 4 horas',
      grupo: 'p4',
      valueq4: 3,
    },
    {
      nameq4: 'Mais de 4 horas',
      grupo: 'p4',
      valueq4: 4,
    },
  ];
  question5: { nameq5: string; grupo: string; valueq5: number }[] = [
    {
      nameq5: '1',
      grupo: 'p5',
      valueq5: 1,
    },
    {
      nameq5: '2',
      grupo: 'p5',
      valueq5: 2,
    },
    {
      nameq5: '3',
      grupo: 'p5',
      valueq5: 3,
    },
    {
      nameq5: '4+',
      grupo: 'p5',
      valueq5: 4,
    },
  ];

  constructor(private escolhasService: EscolhasService) {}

  ngOnInit(): void {}

  salvarEscolha(): void {
    this.escolhasService.escolhas(this.escolha).subscribe((retorno) => {
      this.escolha = retorno;
    });
    window.location.reload();
  }
}
