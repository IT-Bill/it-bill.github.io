import type { Publication } from "@/lib/types";

export const PUBLICATIONS_DATA: Omit<Publication, 'id'>[] = [
  {
    title: 'A Comprehensive Analysis of Interflight Variability in Carbon Dioxide Emissions from Global Aviation',
    conference: 'Environmental Science & Technology',
    year: '2025',
    authors: ['Yuan Li', 'Sarah Connor'],
    description: 'Comprehensive review of Kalman Filters, Particle Filters, and Deep Learning approaches for multi-sensor fusion in autonomous navigation systems.',
    paperUrl: 'https://pubs.acs.org/doi/10.1021/acs.est.5c02371'
  }
];