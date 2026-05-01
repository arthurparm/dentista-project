import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IntersectDirective } from '../../shared/intersection.directive';

@Component({
  selector: 'app-cta-final',
  standalone: true,
  imports: [CommonModule, IntersectDirective],
  templateUrl: './cta-final.component.html',
  styleUrl: './cta-final.component.scss',
})
export class CtaFinalComponent {
  sectionVisible = signal(false);

  onVisible() {
    this.sectionVisible.set(true);
  }
}
