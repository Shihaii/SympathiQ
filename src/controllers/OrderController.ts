import axios from "axios"
import type { Order } from "@/types"
import { ordersMock } from "@/utility/noAPI/ordersMock"

const baseUrl = import.meta.env.VITE_API_URL

export const getOrders = async (): Promise<Order[] | void> => {
  let orders : Order[] = [];
    await axios
      .get(`${baseUrl}/orders`)
      .then((response: { data: Order[] }) => {
        // return response.data;

        //return ordersMock because no API is available
        console.log(ordersMock);
        orders = ordersMock;
      })
      .catch((error) => {
      console.log(error)
      })
      return orders;
  }

