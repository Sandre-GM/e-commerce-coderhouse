import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import db from "../db/fireBase";

export const createOrder = async (userData, cartItems) => {
  try {
    const orderData = {
      buyer: {
        name: userData.nombre,
        email: userData.email,
        phone: userData.telefono,
      },
      items: cartItems.map((item) => ({
        id: item.id,
        title: item.title,
        price: item.price,
        quantity: item.quantity,
        subtotal: item.price * item.quantity,
      })),
      total: cartItems.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
      ),
      date: serverTimestamp(),
      status: "pending",
    };

    const docRef = await addDoc(collection(db, "orders"), orderData);
    return {
      success: true,
      orderId: docRef.id,
      orderData,
    };
  } catch (error) {
    console.error("Error creating order:", error);
    return {
      success: false,
      error: error.message,
    };
  }
};
