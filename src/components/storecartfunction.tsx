import { useState, useEffect } from "react";

const StoreCartFunction = () => {
  const [loading, setLoading] = useState(false);
  const [cart, setCart] = useState<any[]>([]);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    let sessionCarts: any = sessionStorage.getItem("cart");
    let parsedCart = JSON.parse(sessionCarts);
    if (parsedCart) {
      setCart(parsedCart);
      setCartCount(parsedCart.length);
    }
  }, []);

  const addToCart = async (
    stripeId: string,
    size: string,
    quantity: number,
    price: string
  ) => {
    setLoading(true);
    const existingItem = cart.find((item: any) => item.stripeId === stripeId);
    if (existingItem) {
      const updatedCart = cart.map((item: any) => {
        if (item.stripeId === stripeId) {
          return {
            ...item,
            quantity,
            size,
          };
        }
        return item;
      });
      await setCart(updatedCart);
      sessionStorage.setItem("cart", JSON.stringify(updatedCart));
    } else {
      const updatedCart = [
        ...cart,
        {
          price,
          quantity,
          size,
          stripeId,
        },
      ];
      await setCart(updatedCart);
      sessionStorage.setItem("cart", JSON.stringify(updatedCart));
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
