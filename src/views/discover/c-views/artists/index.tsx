import React, {memo} from "react";
import type { FC, ReactNode } from "react";

interface IProps {
  children?: ReactNode
}

export const Artists: FC<IProps> = () => {
  return (
    <div className="artist">
      <div>Artists</div>
    </div>
  )
}

export default memo(Artists)
