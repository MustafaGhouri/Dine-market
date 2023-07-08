
import { Image as IImage } from "sanity";
export interface IProduct {
    title: string;
    _id: string;
    details: string;
    price: number;
    stripeId: string;
    slug: {
      current:string;
      _type:string
    };
    category: {
      title: string;
      slug: string;
    };
    tags: {
      title: string;
    };
    sizes: [
      {
        title: string;
      }
    ];
    images: IImage;
  }