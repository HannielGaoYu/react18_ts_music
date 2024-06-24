import React, {memo} from "react";
import type { FC, ReactNode } from "react";

interface IProps {
  children?: ReactNode
}

export const Album: FC<IProps> = () => {
  return (
    <div className="album">
      <div>Album</div>
    </div>
  )
}

export default memo(Album)
