import React, {memo} from "react";
import type { FC, ReactNode } from "react";

interface IProps {
  children?: ReactNode
}

export const Footer: FC<IProps> = () => {
  return (
    <div className="">
      <div>Footer</div>
    </div>
  )
}

export default memo(Footer)
