import React, {memo} from "react";
import type { FC, ReactNode } from "react";

interface IProps {
  children?: ReactNode
}

export const Focus: FC<IProps> = () => {
  return (
    <div className="focus">
      <div>Focus</div>
    </div>
  )
}

export default memo(Focus)
