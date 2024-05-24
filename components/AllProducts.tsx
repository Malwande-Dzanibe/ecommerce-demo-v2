import React from "react";

import getProducts from "@/lib/getProducts";
import Image from "next/image";
import Link from "next/link";
import AddToCartButton from "./AddToCartButton";

const AllProducts = async () => {
  const product = await getProducts();

  return (
    <div className={"items-wrapper"}>
      {product.map((item) => {
        return (
          <div className="item3" key={item._id}>
            <Link
              href={`/product/${item.slug}`}
              className="item"
              key={item._id}
            >
              <div>
                <p className="price">R{item.price}</p>
                <p className="title">
                  {item.name.length < 25
                    ? item.name
                    : `${item.name.substring(0, 25)}...`}
                </p>
              </div>
              <Image
                src={item.image[0]}
                alt={item.name}
                width={200}
                height={200}
              />
            </Link>
            <div className="details">
              <Link href={`/product/${item.slug}`}>
                <button className="detail">more details</button>
              </Link>
              <AddToCartButton product={item} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default AllProducts;
