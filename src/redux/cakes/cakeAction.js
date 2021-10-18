import { BUY_CAKE } from "./cakeType";

export const buyCake = (numberOfCake=1) => {
  return {
    type: BUY_CAKE,
    payLoad:numberOfCake
  };
};
