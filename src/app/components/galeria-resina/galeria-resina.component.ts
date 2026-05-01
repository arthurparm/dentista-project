import { CommonModule } from '@angular/common';
import { Component, HostListener, signal } from '@angular/core';

type GalleryMediaType = 'image' | 'video';

interface GalleryItem {
  type: GalleryMediaType;
  src: string;
  poster?: string;
  alt: string;
  title: string;
}

@Component({
  selector: 'app-galeria-resina',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './galeria-resina.component.html',
  styleUrl: './galeria-resina.component.scss',
})
export class GaleriaResinaComponent {
  selectedMedia = signal<GalleryItem | null>(null);

  // TODO: Replace these placeholder media URLs with real resin lens case photos/videos.
  galleryItems: GalleryItem[] = [
    {
      type: 'image',
      src: 'https://images.pexels.com/photos/3762453/pexels-photo-3762453.jpeg?auto=compress&cs=tinysrgb&w=900&h=700&dpr=1',
      alt: 'Placeholder de sorriso com lentes de resina',
      title: 'Caso clínico 01',
    },
    {
      type: 'image',
      src: 'https://images.pexels.com/photos/3762456/pexels-photo-3762456.jpeg?auto=compress&cs=tinysrgb&w=900&h=700&dpr=1',
      alt: 'Placeholder de resultado estético em sorriso',
      title: 'Caso clínico 02',
    },
    {
      type: 'video',
      src: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4',
      poster: 'https://images.pexels.com/photos/6812540/pexels-photo-6812540.jpeg?auto=compress&cs=tinysrgb&w=900&h=700&dpr=1',
      alt: 'Placeholder de vídeo para substituir por lentes de resina',
      title: 'Vídeo de resultado',
    },
    {
      type: 'image',
      src: 'https://images.pexels.com/photos/3845983/pexels-photo-3845983.jpeg?auto=compress&cs=tinysrgb&w=900&h=700&dpr=1',
      alt: 'Placeholder de atendimento odontológico estético',
      title: 'Detalhe do acabamento',
    },
    {
      type: 'video',
      src: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.webm',
      poster: 'https://images.pexels.com/photos/5355853/pexels-photo-5355853.jpeg?auto=compress&cs=tinysrgb&w=900&h=700&dpr=1',
      alt: 'Placeholder de vídeo para demonstração clínica',
      title: 'Antes e depois',
    },
    {
      type: 'image',
      src: 'https://images.pexels.com/photos/4687360/pexels-photo-4687360.jpeg?auto=compress&cs=tinysrgb&w=900&h=700&dpr=1',
      alt: 'Placeholder de paciente sorrindo',
      title: 'Resultado natural',
    },
  ];

  openLightbox(item: GalleryItem) {
    this.selectedMedia.set(item);
  }

  closeLightbox() {
    this.selectedMedia.set(null);
  }

  @HostListener('document:keydown.escape')
  onEscape() {
    this.closeLightbox();
  }
}
