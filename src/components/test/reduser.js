import { DECREMENT, INCREMENT } from "../constantas/const.js";

export function reduser(state, action) {
  switch (action.type) {
    case INCREMENT:
      return (state += 1);
    case DECREMENT:
      return (state -= 1);
    default:
      return state;
  }
}
