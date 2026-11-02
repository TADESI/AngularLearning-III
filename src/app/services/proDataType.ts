export interface prodApiResponse {
  products:product[];
}

export interface product{
  id:number;
  title:string;
  description:string;
  price:string;
  category:string;
}
