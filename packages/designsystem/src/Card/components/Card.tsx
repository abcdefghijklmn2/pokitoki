import { contextBuildHelper } from '@custompackages/shared'
import { Children, cloneElement, HTMLAttributes, MouseEvent, MouseEventHandler, ReactNode, useId } from 'react'

interface CardProps extends HTMLAttributes<HTMLDivElement> {}

export const [CardProvider, useCardContext] = contextBuildHelper<{}>({ id: 'Card' })

const Card = (props: CardProps) => {
  const { children, ...rest } = props

  return (
    <CardProvider>
      <div {...rest}>{children}</div>
    </CardProvider>
  )
}

Card.propTypes = {}

export default Card
