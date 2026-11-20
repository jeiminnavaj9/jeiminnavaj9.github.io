export interface Project {
  title: string;
  period: string;
  kind: string;
  summary: string;
  description: string;
  tags: string[];
  href: string;
  linkLabel: string;
  external?: boolean;
}

export const academic: Project[] = [
  {
    title: "Master's Thesis",
    period: '2022 – 2024',
    kind: 'Research · Drexel University',
    summary: 'Multi-band weak lensing with JWST imaging of SMACS J0723 and Abell 2744.',
    description:
      "For my Master's research at Drexel University, I analyzed JWST imaging data for galaxy clusters SMACS J0723 and Abell 2744 to study weak gravitational lensing signals. I developed a three-stage Python pipeline: the first processed and mosaicked JWST Level-2 images, the second generated postage stamps from the source catalog for input to LENSER to estimate shear and flexion, and the third applied a Fourier inversion technique to derive the clusters' convergence maps.",
    tags: ['Cosmology', 'Weak Lensing', 'Galaxies'],
    href: '/thesis',
    linkLabel: 'Read the overview',
  },
  {
    title: 'Teaching Assistant',
    period: '2022 – 2024',
    kind: 'Teaching · Drexel University',
    summary: 'Recitations, computational and experimental labs for science and non-science majors.',
    description:
      "While pursuing my Master's at Drexel University, I worked as a Teaching Assistant for both science and non-science majors. I led recitations, computational labs, and experimental labs, helping students strengthen their understanding of physics concepts through problem-solving and hands-on exploration. I also held office hours to provide one-on-one guidance and developed detailed solution sets for recitation problems to ensure course coverage and conceptual clarity.",
    tags: ['Teaching', 'Physics', 'Mentoring'],
    href: '/ta_experience',
    linkLabel: 'See courses taught',
  },
];

export const independent: Project[] = [
  {
    title: 'Ph.D. Dropout',
    period: 'Ongoing',
    kind: 'Writing · Web',
    summary: 'Step-by-step derivations and intuitive explanations in physics and mathematics.',
    description:
      'This project originated from my search for resources that focus purely on the core ideas and derivations behind physics and mathematics concepts. Ph.D. Dropout is a space where I share step-by-step derivations, intuitive explanations, and concise insights into equations that often get overlooked in traditional learning materials. The goal is to make complex topics clear, logical, and accessible to curious learners.',
    tags: ['Writing', 'Web', 'Education'],
    href: 'https://phdropout.github.io/',
    linkLabel: 'Visit the site',
    external: true,
  },
];
