export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: string;
  category: 'starter' | 'main' | 'dessert' | 'wine';
  tags?: string[];
}

export interface ArtPiece {
  id: string;
  title: string;
  artist: string;
  description: string;
  imageUrl: string;
  year: string;
}

export interface NavItem {
  label: string;
  path: string;
}

export enum CuratorMood {
  REVOLUTIONARY = 'Revolutionary',
  MELANCHOLIC = 'Melancholic',
  ROMANTIC = 'Romantic',
  INTELLECTUAL = 'Intellectual',
  CELEBRATORY = 'Celebratory'
}

export interface CuratorRecommendation {
  dish: string;
  wine: string;
  music: string;
  artStyle: string;
  reasoning: string;
}