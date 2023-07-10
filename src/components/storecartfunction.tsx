import { useState, useEffect } from "react";

const StoreCartFunction = () => {
  const [loading, setLoading] = useState(false);
  const [cart, setCart] = useState<any[]>([{}]);
  const [cartCount, setCartCount] = useState(0);

  const addToCart = async (
    productId: string,
    size: string,
    quantity: number,
    price: string
  ) => {
    setLoading(true);

    try {
      const res: any = await fetch("/api/cart", {
        method: "POST",
        body: JSON.stringify({
          size: size,
          qty: quantity,
          product_id: productId,
        }),
      });
      console.log(res);
      setCart(res);
    } catch (err) {
      console.log(err);
    }

    setLoading(false);
  };

  useEffect(() => {
    setCartCount(cart.length);
    return () => {
      setCartCount(cart.length);
    };
  }, [cart]);

  return {
    loading,
    addToCart,
    cart,
    cartCount,
  };
};

export default StoreCartFunction;
