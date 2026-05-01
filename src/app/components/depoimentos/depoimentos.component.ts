import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IntersectDirective } from '../../shared/intersection.directive';

@Component({
  selector: 'app-depoimentos',
  standalone: true,
  imports: [CommonModule, IntersectDirective],
  templateUrl: './depoimentos.component.html',
  styleUrl: './depoimentos.component.scss',
})
export class DepoimentosComponent {
  sectionVisible = signal(false);

  depoimentos = [
    {
      nome: 'Ana Carolina S.',
      cargo: 'Diretora Executiva',
      foto: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=120&h=120&dpr=1',
      texto:
        'Depois de anos com vergonha do meu sorriso, o Método 5R mudou minha vida. O resultado ficou absolutamente natural — meus colegas nem perceberam que era uma restauração, só elogiaram!',
      estrelas: 5,
    },
    {
      nome: 'Marcos Andrade',
      cargo: 'Empresário',
      foto: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=120&h=120&dpr=1',
      texto:
        'Investi em muitos treinamentos odontológicos, mas o eBook do Dr. Danilo Venâncio é diferente. É prático, visual e já pude aplicar na minha clínica na semana seguinte. Resultado dos pacientes: surpreendente.',
      estrelas: 5,
    },
    {
      nome: 'Juliana Ferreira',
      cargo: 'Cirurgiã-Dentista',
      foto: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=120&h=120&dpr=1',
      texto:
        'Finalmente um material que vai além da teoria. Cada "R" do método faz sentido na prática clínica. Já realizei 8 casos usando o protocolo e todos ficaram exatamente como planejei.',
      estrelas: 5,
    },
  ];

  onVisible() {
    this.sectionVisible.set(true);
  }
}
