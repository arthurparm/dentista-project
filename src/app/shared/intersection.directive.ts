import { Directive, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';

@Directive({
  selector: '[appIntersect]',
  standalone: true,
})
export class IntersectDirective implements OnInit, OnDestroy {
  @Input() threshold = 0.15;
  @Input() rootMargin = '0px';
  @Output() visible = new EventEmitter<void>();

  private observer!: IntersectionObserver;

  constructor(private el: ElementRef) {}

  ngOnInit() {
    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.visible.emit();
            this.observer.unobserve(this.el.nativeElement);
          }
        });
      },
      { threshold: this.threshold, rootMargin: this.rootMargin }
    );
    this.observer.observe(this.el.nativeElement);
  }

  ngOnDestroy() {
    this.observer?.disconnect();
  }
}
