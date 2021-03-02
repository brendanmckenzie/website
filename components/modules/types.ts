import { FixedObject, FluidObject } from "gatsby-image";

export type Seo = {
  pageTitle: string;
  description: string;
};

export type File = {
  url: string;
  name: string;
  type: string;
  size: string;
  file?: {
    childImageSharp?: {
      fixed?: FixedObject;
      fluid?: FluidObject;
    };
  };
};
