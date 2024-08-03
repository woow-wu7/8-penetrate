### Zustand

### Links

```123
1.
official website
- https://docs.pmnd.rs/zustand/integrations/persisting-store-data


2.
middleware
- devtool: https://juejin.cn/post/7310474225810030644
- persist: https://juejin.cn/post/7134633741774749710
- immer: https://docs.pmnd.rs/zustand/integrations/immer-middleware


2.
tutorial
- https://juejin.cn/post/7232726594208759867
- https://juejin.cn/post/7134633741774749710#heading-0
```

### Usage

```3
import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { persist } from "zustand/middleware";

type State<T> = {
  harborList: IHarborItem<T>[];
  selectedHarbor: IHarborItem<T>;
};
interface IHarborItem<T> {
  name: T;
  url: T;
  productName: T;
  status: T;
  username: T;
  password: T;
  type: T;
}

type Actions = {
  setHarborList: (newHarborList: State<string>["harborList"]) => void;
  setSelectedHarbor: (newHarbor: State<string>["selectedHarbor"]) => void;
};

const defaultState = {
  harborList: [],
  selectedHarbor: {
    name: "",
    url: "",
    productName: "",
    status: "",
    username: "",
    password: "",
    type: "",
  },
};

export const useHarborStore = create<State<string> & Actions>()(
  persist(
    devtools(
      (set) => ({
        ...defaultState,

        setHarborList: (newHarborList) => set({ harborList: newHarborList }),
        setSelectedHarbor: (newHarbor) => set({ selectedHarbor: newHarbor }),
      }),
      {
        name: "harborStore",
      }
    ),
    {
      name: "harborStore",
      getStorage: () => localStorage,
    }
  )
);
```
