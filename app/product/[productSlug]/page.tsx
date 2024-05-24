import React from "react";
import SingleProduct from "@/components/SingleProduct";
import getOneProduct from "@/lib/getOneProduct";
import { Metadata } from "next";

type Params = {
  params: { productSlug: string };
};

export const generateMetadata = async ({
  params,
}: Params): Promise<Metadata> => {
  const productSlug = params.productSlug;
  const product = await getOneProduct(productSlug);

  return {
    title: product.name,
    description: product.description,
  };
};

const page = async ({ params }: Params) => {
  const productSlug = params.productSlug;
  const product = await getOneProduct(productSlug);

  return (
    <div>
      <SingleProduct product={product} />
    </div>
  );
};

export default page;
