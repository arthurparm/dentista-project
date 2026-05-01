import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IntersectDirective } from '../../shared/intersection.directive';

@Component({
  selector: 'app-publico-alvo',
  standalone: true,
  imports: [CommonModule, IntersectDirective],
  templateUrl: './publico-alvo.component.html',
  styleUrl: './publico-alvo.component.scss',
})
export class PublicoAlvoComponent {
  sectionVisible = signal(false);

  perfis = [
    {
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>`,
      titulo: 'Profissionais Exigentes',
      descricao:
        'Executivos, líderes e empreendedores que sabem que a primeira impressão vale ouro e buscam um sorriso à altura do seu sucesso.',
      detalhe: 'Para quem a imagem é um ativo profissional',
    },
    {
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>`,
      titulo: 'Em Busca de Autoestima',
      descricao:
        'Pessoas que sonham com um sorriso bonito há anos mas não sabiam por onde começar — o Método 5R oferece o caminho mais seguro e previsível.',
      detalhe: 'Para quem quer se sentir seguro ao sorrir',
    },
    {
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>`,
      titulo: 'Dentistas Curiosos',
      descricao:
        'Cirurgiões-dentistas que desejam dominar a técnica de lentes de resina e elevar o nível das suas restaurações estéticas com um protocolo estruturado.',
      detalhe: 'Para quem quer evoluir na odontologia estética',
    },
  ];

  onVisible() {
    this.sectionVisible.set(true);
  }
}
