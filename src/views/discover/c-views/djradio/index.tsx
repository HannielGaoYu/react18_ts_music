import React, {memo} from "react";
import type { FC, ReactNode } from "react";

interface IProps {
  children?: ReactNode
}

export const Djradio: FC<IProps> = () => {
  return (
    <div className="djradio">
      <div>Djradio</div>
    </div>
  )
}

export default memo(Djradio)
