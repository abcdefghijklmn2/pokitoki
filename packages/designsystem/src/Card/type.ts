import { FC, HTMLAttributes, ReactNode } from 'react'

import { ImageProps } from '../Image'

export interface BasicCardProps extends HTMLAttributes<HTMLDivElement> {
  className?: string
  children: ReactNode
  isSelected?: boolean
}

export interface DescriptionProps {
  mainTitle: ReactNode
  subTitle: ReactNode
  isSelected?: boolean
}
