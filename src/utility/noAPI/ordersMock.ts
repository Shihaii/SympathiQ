import type { Order } from "@/types";

export const ordersMock: Order[] = [
    {
        id: '1',
        name: "XS™ Sports Protein Shakes – Rich Chocolate",
        quantity: 10,
        date: new Date(),
        status: "Pending",
        price: 799.00
    },
    {
        id: '2',
        name: "XS™ Sports Protein Shakes – Rich Chocolate",
        quantity: 1,
        date: new Date(),
        status: "Approved",
        price: 799.00
    },
    {
        id: '3',
        name: "XS™ Sports Protein Shakes – Rich Chocolate",
        quantity: 3,
        date: new Date(),
        status: "In Process",
        price: 799.00
    },
    {
        id: '4',
        name: "XS™ Sports Protein Shakes – Rich Chocolate",
        quantity: 1,
        date: new Date(),
        status: "Pending",
        price: 799.00
    },
]