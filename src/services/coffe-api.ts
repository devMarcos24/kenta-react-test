import axios from "axios";

const api = axios.create({
  baseURL: "https://api.sampleapis.com",
});

export const getCoffeeHot = async () => {
  try {
    const { data } = await api.get("/coffee/hot");

    if(data.length) {
      const hot = data.map((coffee: any) => {
      coffee.type = 'Hot'

      return coffee
    })

    return hot
  }


    return [];
  } catch (error) {
    console.log(error);
  }
};

export const getCoffeeIced = async () => {
  try {
    const { data } = await api.get("/coffee/iced");

    if(data.length) {
      const hot = data.map((coffee: any) => {
      coffee.type = 'Iced'
      coffee.id += 20 

      return coffee
    })

    return hot
  }

    return [];
  } catch (error) {
    console.log(error);
  }

  return;
};

export const getAllCoffee = async () => {
  return Promise.all([getCoffeeHot(), getCoffeeIced()])
}
