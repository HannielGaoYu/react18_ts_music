import React, {memo} from "react";
import type { FC, ReactNode } from "react";

interface IProps {
  children?: ReactNode
}

export const Mine: FC<IProps> = () => {
  return (
    <div className="mine">
      <div>Mine</div>
    </div>
  )
}

export default memo(Mine)
