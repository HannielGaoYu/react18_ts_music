import React, {memo} from "react";
import type { FC, ReactNode } from "react";

interface IProps {
  children?: ReactNode
}

export const Ranking: FC<IProps> = () => {
  return (
    <div className="ranking">
      <div>Ranking</div>
    </div>
  )
}

export default memo(Ranking)
