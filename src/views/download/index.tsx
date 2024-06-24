import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'

interface IProps {
  children?: ReactNode
}

export const Download: FC<IProps> = () => {
  return (
    <div className="download">
      <div>Download</div>
    </div>
  )
}

export default memo(Download)
