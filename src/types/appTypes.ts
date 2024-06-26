export interface CardItemType {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin?: {
    name: string;
    url: string;
  };
  location?: {
    name: string;
    url: string;
  };
  image: string;
  episode: string[];
  url: string;
  created: string | Date;
}

export interface paginationType {
  count: number;
  pages: string;
  next: string | null;
  prev: string | null;
}