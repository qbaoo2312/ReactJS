
import { IRootState } from "./store";

export interface CalculationState {
  result: number;
}

const initialState: CalculationState = {
  result: 0,
};

interface CalculationAction {
  type: "cong" | "tru" | "nhan" | "chia";
  payload: { numA: number; numB: number };
}

export default function calculationReducer(
  state: CalculationState = initialState,
  action: CalculationAction
) {
  switch (action.type) {
    case "cong":
      return {
        ...state,
        result: action.payload.numA + action.payload.numB,
      };
    case "tru":
      return {
        ...state,
        result: action.payload.numA - action.payload.numB,
      };
    case "nhan":
      return {
        ...state,
        result: action.payload.numA * action.payload.numB,
      };
    case "chia":
      return {
        ...state,
        result: action.payload.numA / action.payload.numB,
      };
    default:
      return state;
  }
}

export const selectResult = (state: IRootState) => state.calculation.result;