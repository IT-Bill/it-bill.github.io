import type { Publication } from "@/lib/types";

export const PUBLICATIONS_DATA: Omit<Publication, 'id'>[] = [
  {
    title: 'A Mathematics-Guided Approach to Floating-Point Error Detection',
    conference: 'arXiv preprint',
    year: '2025',
    authors: ['Youshuai Tan', 'Zhanwei Zhang', 'Zishuo Ding', 'Lianyu Zheng', 'Jinfu Chen', 'Weiyi Shang'],
    description: 'We propose MGDE, a novel method to detect error-inducing inputs based on mathematical guidance using the Newton-Raphson method with quadratic convergence properties. Our method identifies 89 bugs across 44 programs while being 6.4x faster than the baseline.',
    paperUrl: 'https://arxiv.org/abs/2510.10081'
  },
  {
    title: 'Computing Floating-Point Errors by Injecting Perturbations',
    conference: 'arXiv preprint',
    year: '2025',
    authors: ['Youshuai Tan', 'Zhanwei Zhang', 'Jinfu Chen', 'Zishuo Ding', 'Jifeng Xuan', 'Weiyi Shang'],
    description: 'We propose PI-detector, a novel approach to computing floating-point errors effectively and efficiently by injecting small perturbations into the operands of individual atomic operations within the program and comparing the outcomes of the original program with the perturbed version.',
    paperUrl: 'https://arxiv.org/abs/2507.08467'
  },
  {
    title: 'A Comprehensive Analysis of Interflight Variability in Carbon Dioxide Emissions from Global Aviation',
    conference: 'Environmental Science & Technology',
    year: '2025',
    authors: ['Yuxiao Han', 'Huizhong Shen', 'Xin He', 'Zelin Mai', 'Ruixin Zhang', 'Zhiyu Zheng', 'Yiqi Liu', 'Xin Zhang', 'Guanting Li', 'Zhanwei Zhang', 'Zien Liang', 'Yilin Chen', 'Yang Xie', 'Mei Li', 'Guofeng Shen', 'Chen Wang', 'Jianhuai Ye', 'Lei Zhu', 'Tzung-May Fu', 'Xin Yang'],
    description: 'Employing an extensive flight tracking data set (Flightradar24), we assess the interflight variability in CO2 emissions from global aviation with unprecedented spatial and temporal granularity. We develop reduced-form models for over two hundred standard aircraft types that capture flight-to-flight variability.',
    paperUrl: 'https://pubs.acs.org/doi/10.1021/acs.est.5c02371'
  },
  {
    title: 'DELA: A Novel Approach for Detecting Errors Induced by Large Atomic Condition Numbers',
    conference: 'arXiv preprint',
    year: '2024',
    authors: ['Youshuai Tan', 'Zhanwei Zhang', 'Jinfu Chen', 'Zishuo Ding', 'Jifeng Xuan', 'Weiyi Shang'],
    description: 'We propose DELA, an approach based on the observation that most numerical errors stem from large condition numbers in atomic operations. DELA injects small perturbations into the results of individual atomic operations and compares the outcomes to detect errors.',
    paperUrl: 'https://arxiv.org/abs/2412.20804'
  }
];