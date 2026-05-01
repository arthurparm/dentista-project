import { animate, keyframes, query, stagger, state, style, transition, trigger } from '@angular/animations';

export const fadeInUp = trigger('fadeInUp', [
  state('hidden', style({ opacity: 0, transform: 'translateY(40px)' })),
  state('visible', style({ opacity: 1, transform: 'translateY(0)' })),
  transition('hidden => visible', animate('0.8s ease-in-out')),
]);

export const fadeIn = trigger('fadeIn', [
  state('hidden', style({ opacity: 0 })),
  state('visible', style({ opacity: 1 })),
  transition('hidden => visible', animate('0.8s ease-in-out')),
]);

export const staggerList = trigger('staggerList', [
  transition('* => *', [
    query(':enter', [
      style({ opacity: 0, transform: 'translateY(30px)' }),
      stagger(120, animate('0.7s ease-in-out', style({ opacity: 1, transform: 'translateY(0)' }))),
    ], { optional: true }),
  ]),
]);

export const cardReveal = trigger('cardReveal', [
  transition(':enter', [
    style({ opacity: 0, transform: 'translateY(30px)' }),
    animate('0.7s ease-in-out', style({ opacity: 1, transform: 'translateY(0)' })),
  ]),
]);

export const scaleIn = trigger('scaleIn', [
  state('hidden', style({ opacity: 0, transform: 'scale(0.9)' })),
  state('visible', style({ opacity: 1, transform: 'scale(1)' })),
  transition('hidden => visible', animate('0.8s ease-in-out')),
]);
