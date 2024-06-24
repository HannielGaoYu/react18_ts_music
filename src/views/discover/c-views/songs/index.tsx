import React, {memo} from "react";
import type { FC, ReactNode } from "react";

interface IProps {
  children?: ReactNode
}

export const Songs: FC<IProps> = () => {
  return (
    <div className="song">
      <div>Songs</div>
    </div>
  )
}

export default memo(Songs)

