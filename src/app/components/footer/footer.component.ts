import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

type SocialIcon = 'instagram' | 'facebook' | 'youtube' | 'tiktok' | 'linkedin';

interface SocialLink {
  label: string;
  href: string;
  icon: SocialIcon;
}

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  ano = new Date().getFullYear();

  // TODO: Replace placeholder href values with the real social media URLs.
  socials: SocialLink[] = [
    {
      label: 'Instagram',
      href: '#',
      icon: 'instagram',
    },
    {
      label: 'Facebook',
      href: '#',
      icon: 'facebook',
    },
    {
      label: 'YouTube',
      href: '#',
      icon: 'youtube',
    },
    {
      label: 'TikTok',
      href: '#',
      icon: 'tiktok',
    },
    {
      label: 'LinkedIn',
      href: '#',
      icon: 'linkedin',
    },
  ];
}
