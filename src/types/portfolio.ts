export type Project = {
  id: string;
  slug: string;
  year: string;
  title: string;
  description: string;
  image: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  tags: string[];
  href: string;
};
