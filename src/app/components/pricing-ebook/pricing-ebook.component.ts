import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-pricing-ebook',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pricing-ebook.component.html',
  styleUrl: './pricing-ebook.component.scss',
})
export class PricingEbookComponent {
  benefits = [
    'Acesso imediato ao conteúdo digital',
    'Protocolo completo do Método 5R',
    'Checklist prático para consulta rápida',
    'Material visual sobre lentes de resina',
    'Atualizações futuras da edição digital',
  ];

  // TODO: Replace the placeholder WhatsApp number/text with the real sales URL.
  ctaHref = 'https://wa.me/5500000000000?text=Quero%20o%20Ebook';
}
