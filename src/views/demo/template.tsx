import React, {memo} from "react";
import type { FC, ReactNode } from "react";

interface IProps {
  children?: ReactNode
}

export const App: FC<IProps> = () => {
  return (
    <div className="App">
      <div>App</div>
    </div>
  )
}

export default memo(App)
