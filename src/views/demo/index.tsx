import React, {memo} from "react";
import type { FC, ReactNode } from "react";

interface IProps {
  children?: ReactNode
}

export const Demo: FC<IProps> = (props) => {
  return (
    <div className="demo">
      <div>Demo</div>
    </div>
  )
}

export default memo(Demo)
