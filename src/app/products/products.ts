// interface

export interface IProduct {
  productId: number;
  productName: string;
  productCode: string;
  releaseDate: string;
  description: string;
  price: number;
  starRating: number;
  imageUrl: string;
}
// To use the interface import it to the component
// and use it as a data type
