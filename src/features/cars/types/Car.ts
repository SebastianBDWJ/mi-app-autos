export interface Car {
  id: number;
  name: string;
  location: string;
  price: number;
  year?: number; //se utiliza signo de interrogacion para indicar que es opcional o puede venir nulo
  mileage: number;
  seats: number;
  type: string;
  featured: boolean;
  image: string;
  description: string;
  features: string[];
}