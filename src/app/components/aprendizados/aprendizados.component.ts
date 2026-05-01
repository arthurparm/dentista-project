import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IntersectDirective } from '../../shared/intersection.directive';

@Component({
  selector: 'app-aprendizados',
  standalone: true,
  imports: [CommonModule, IntersectDirective],
  templateUrl: './aprendizados.component.html',
  styleUrl: './aprendizados.component.scss',
})
export class AprendizadosComponent {
  sectionVisible = signal(false);

  coluna1 = [
    'A diferença entre facetas de porcelana e lentes de resina',
    'Como avaliar o potencial estético de cada sorriso',
    'Os erros mais comuns que levam a resultados insatisfatórios',
    'Técnica de escultura direta passo a passo',
    'Seleção de cor e caracterização natural',
    'Protocolo de polimento para acabamento espelhado',
  ];

  coluna2 = [
    'Como calcular proporções áuricas dentais',
    'Manejo de expectativas e comunicação com o paciente',
    'Materiais de ponta disponíveis no mercado nacional',
    'Fotografia odontológica para documentação e marketing',
    'Cuidados de manutenção e longevidade das restaurações',
    'Como montar um portfólio profissional atrativo',
  ];

  onVisible() {
    this.sectionVisible.set(true);
  }
}
