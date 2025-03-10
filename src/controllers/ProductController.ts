import type { ProductCard } from "@/types";
import { savedProductsMock } from "@/utility/noAPI/savedProductsMock";
import axios from "axios"

const baseUrl = import.meta.env.VITE_API_URL


export const getSavedProducts = async (): Promise<ProductCard[] | void> => {
    let savedProducts : ProductCard[] = [];
      await axios
        .get(`${baseUrl}/saved/products`)
        .then((response: { data: ProductCard[] }) => {
          // return response.data;
  
          //return savedProductsMock because no API is available
          console.log(savedProductsMock);
          savedProducts = savedProductsMock;
        })
        .catch((error) => {
        console.log(error)
        })
        return savedProducts;
    }