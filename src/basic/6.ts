export default function taskBasic6() {
  interface IPerson {
    name: string;
    age: number;
    email: string;
    address?: {
      city?: string;
      country?: string;
    };
  }

  const mango: IPerson = {
    name: "Mango",
    age: 30,
    email: "john@example.com",
    address: {
      city: "New York",
      country: "USA",
    },
  };

  const poly: IPerson = {
    name: "Mango",
    age: 30,
    email: "john@example.com",
  };

  console.log(mango);
  console.log(poly);
}
