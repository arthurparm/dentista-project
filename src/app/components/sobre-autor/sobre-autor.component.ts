import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IntersectDirective } from '../../shared/intersection.directive';

@Component({
  selector: 'app-sobre-autor',
  standalone: true,
  imports: [CommonModule, IntersectDirective],
  templateUrl: './sobre-autor.component.html',
  styleUrl: './sobre-autor.component.scss',
})
export class SobreAutorComponent {
  sectionVisible = signal(false);

  credentials = [
    { valor: '12+', label: 'Anos de Experiência' },
    { valor: '200+', label: 'Sorrisos Transformados' },
    { valor: '98%', label: 'Satisfação dos Pacientes' },
  ];

  onVisible() {
    this.sectionVisible.set(true);
  }
}
