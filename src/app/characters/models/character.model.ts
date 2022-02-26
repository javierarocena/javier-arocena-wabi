export interface Character {
  id: number;
  birth_year: string;
  eye_color: string;
  films: {
    title: string;
    opening_crawl: string;
  }[];
  starships: {
    title: string;
  }[];
  vehicles: {
    title: string;
  }[];
  gender: string;
  height: string;
  mass: string;
  name: string;
  skin_color: string;
  url: string;
}
