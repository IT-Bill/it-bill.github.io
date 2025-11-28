import type { Publication } from "@/lib/types";

export const PUBLICATIONS_DATA: Omit<Publication, 'id'>[] = [
  {
    title: 'Efficient Distributed Training for Large Scale Deep Learning Models',
    conference: 'IEEE International Conference on Data Mining (ICDM)',
    year: '2023',
    authors: ['Yuan Li', 'Jane Doe', 'John Smith'],
    description: 'Proposed a novel synchronization mechanism that reduces communication overhead by 30% in distributed training setups. Validated on ResNet-50 and BERT models using a 64-GPU cluster.',
    paperUrl: '#'
  },
  {
    title: 'Real-time Anomaly Detection in IoT Networks using Edge Computing',
    conference: 'ACM Symposium on Edge Computing (SEC)',
    year: '2022',
    authors: ['Yuan Li', 'Robert Brown'],
    description: 'Developed a lightweight anomaly detection algorithm optimized for resource-constrained edge devices (Raspberry Pi 4), achieving 95% accuracy with <10ms latency.',
    repoUrl: '#'
  },
  {
    title: 'A Survey of Sensor Fusion Techniques for Autonomous Robotics',
    conference: 'University Technical Report',
    year: '2021',
    authors: ['Yuan Li', 'Sarah Connor'],
    description: 'Comprehensive review of Kalman Filters, Particle Filters, and Deep Learning approaches for multi-sensor fusion in autonomous navigation systems.',
    paperUrl: '#'
  }
];