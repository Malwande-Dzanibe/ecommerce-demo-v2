"use client";

import React, { useContext, useEffect, useState } from "react";
import context from "@/store/ContextComponent";
import Image from "next/image";
import Link from "next/link";
import { FaPlusCircle, FaMinusCircle, FaTimesCircle } from "react-icons/fa";
import { Oval } from "react-loader-spinner";
import toast from "react-hot-toast";
import Footer from "@/components/Footer";

const page = () => {
  const usingContext = useContext(context) as ContextType;

  const [isClient, setIsClient] = useState(false);

  const noPayment = () => {
    return toast.success("no payment gateway system for this demo");
  };

  useEffect(() => {
    setIsClient(true);
  }, [isClient]);

  if (!isClient) {
    return (
      <>
        <div className="spinner">
          <Oval
            height="80"
            width="80"
            color="rgb(28, 190, 227)"
            ariaLabel="loading"
            wrapperClass="true"
          />
        </div>
      </>
    );
  }

  if (usingContext.cartItems.length < 1) {
    return (
      isClient && (
        <>
          <div className="wrapper3">
            <p className="empty">you do not have items in your cart</p>
            <div>
              <Link href={"/"} className="add-items">
                Add Items
              </Link>
            </div>
          </div>
          <Footer />
        </>
      )
    );
  }

  return (
    isClient && (
      <>
        <div className="wrapper3">
          <div className={"checkout-wrapper"}>
            <div>
              <h4>Total Price : R{usingContext.totalPrice}</h4>
            </div>
            <div>
              <button className="pay-now" onClick={() => noPayment()}>
                Pay Now
              </button>
            </div>
          </div>
          <div className={"wrapper"}>
            <div className={"items-wrapper"}>
              {usingContext.cartItems.map((item) => {
                return (
                  <div className="item2" key={item._id}>
                    <div className="header">
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
                    <div className="quantity-wrapper2">
                      <div className="quantity">
                        <p className="in-cart-q">Quantity : {item.quantity}</p>
                      </div>
                      <div>
                        <button
                          className={`qqb`}
                          onClick={() =>
                            usingContext.toggleQuantityCart("dec", item)
                          }
                        >
                          <FaMinusCircle className="in-cart-btn" />
                        </button>
                        <button
                          className="qqb"
                          onClick={() =>
                            usingContext.toggleQuantityCart("inc", item)
                          }
                        >
                          <FaPlusCircle className="in-cart-btn" />
                        </button>
                        <button
                          className="qqb-remove"
                          onClick={() => usingContext.onRemove(item)}
                        >
                          <FaTimesCircle className="in-cart-btn" />
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <Footer />
      </>
    )
  );
};

export default page;
