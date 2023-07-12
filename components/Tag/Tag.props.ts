import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react'

export interface TagProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  size?: 'sm' | 'md'
  color?: 'ghost' | 'gray' | 'red' | 'green' | 'primary'
  href?: string
  children: ReactNode
}
