import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IntersectDirective } from '../../shared/intersection.directive';

interface MetodoCard {
  numero: string;
  letra: string;
  titulo: string;
  descricao: string;
  icon: string;
}

@Component({
  selector: 'app-metodo-5r',
  standalone: true,
  imports: [CommonModule, IntersectDirective],
  templateUrl: './metodo-5r.component.html',
  styleUrl: './metodo-5r.component.scss',
})
export class Metodo5rComponent {
  sectionVisible = signal(false);
  visibleCards = signal<boolean[]>([false, false, false, false, false]);

  cards: MetodoCard[] = [
    {
      numero: '01',
      letra: 'R',
      titulo: 'Revelação',
      descricao:
        'Diagnóstico minucioso do sorriso atual, identificando pontos de melhoria e potencial estético oculto em cada paciente.',
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>`,
    },
    {
      numero: '02',
      letra: 'R',
      titulo: 'Redesenho',
      descricao:
        'Planejamento digital detalhado do novo sorriso com mockup visual, garantindo que o resultado final supere as expectativas.',
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>`,
    },
    {
      numero: '03',
      letra: 'R',
      titulo: 'Refinamento',
      descricao:
        'Preparação precisa dos dentes e seleção personalizada dos materiais para garantir durabilidade e naturalidade perfeita.',
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`,
    },
    {
      numero: '04',
      letra: 'R',
      titulo: 'Restauração',
      descricao:
        'Aplicação das lentes de resina com técnica artesanal, esculpindo cada detalhe para um resultado que parece natural.',
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M9 12l2 2 4-4"/><path d="M21 12c-1 3.5-4.5 6-9 6s-8-2.5-9-6c1-3.5 4.5-6 9-6s8 2.5 9 6z"/></svg>`,
    },
    {
      numero: '05',
      letra: 'R',
      titulo: 'Resultado',
      descricao:
        'Protocolo pós-procedimento e acompanhamento contínuo para que seu sorriso permaneça impecável por anos.',
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>`,
    },
  ];

  onSectionVisible() {
    this.sectionVisible.set(true);
  }

  onCardVisible(index: number) {
    setTimeout(() => {
      const arr = [...this.visibleCards()];
      arr[index] = true;
      this.visibleCards.set(arr);
    }, index * 150);
  }
}
