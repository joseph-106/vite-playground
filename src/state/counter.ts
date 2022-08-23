import { atom, selector } from "recoil";

/* atom이란 모든 컴포넌트가 구독할 수 있는 상태의 일부이며,
atom에 변화가 있다면 구독하는 모든 컴포넌트들은 리렌더링된다 */
export const textState = atom({
  key: "textState",
  default: "",
});

/* selector란 atom의 상태에 의존하는 동적인 데이터로,
주어진 atom의 상태에 대해 항상 동일한 값을 반환하는 순수함수이다 */
export const charCountState = selector({
  key: "charCountState",
  get: ({ get }) => {
    const text = get(textState);
    return text.length;
  },
});
