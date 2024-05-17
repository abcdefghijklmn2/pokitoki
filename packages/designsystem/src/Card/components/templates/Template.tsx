/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

'use client'

import { cn, useHotkeys } from '@custompackages/shared'
import { cva } from 'class-variance-authority'
import React, { FC, RefObject } from 'react'

import { ImageProps } from '../../../Image'
import { BasicCardProps, DescriptionProps } from '../../type'
import Card from '../CardContainer'
import { CardImage, MainTitle, SubTitle } from './compound'

const cardStyle = cva(
  'rounded shadow-card-02 bg-tertiary-default outline-0 focus-within:ring-2  focus-within:ring-border-primary-02 focus-within:bg-primary-02-default',
  {
    variants: {
      isSelected: {
        true: 'ring-2 ring-border-primary-02 bg-primary-02-default',
        false: '',
      },
    },
    defaultVariants: {
      isSelected: false,
    },
  },
)

export const BasicCardTemplate = ({ children, className, isSelected, onClick, ...rest }: BasicCardProps) => {
  const ref = useHotkeys(['enter', 'space'], (event) => {
    onClick?.(event as unknown as React.MouseEvent<HTMLDivElement>)
    event.preventDefault()
    event.stopPropagation()
  }) as RefObject<HTMLDivElement>

  return (
    <div ref={ref} tabIndex={0} onClick={onClick} className={cn(cardStyle({ isSelected }), className)} {...rest}>
      {children}
    </div>
  )
}

BasicCardTemplate.CardImage = ({ src, alt, width, className, height }: ImageProps) => {
  return (
    <div>
      <CardImage
        className={className}
        src={src}
        alt={alt}
        width={width}
        height={height}
        placeholder="blur"
        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFklEQVR42mN8//HLfwYiAOOoQvoqBABbWyZJf74GZgAAAABJRU5ErkJggg=="
      />
    </div>
  )
}

BasicCardTemplate.MainTitle = MainTitle

BasicCardTemplate.SubTitle = SubTitle

export const Description = ({ mainTitle, subTitle, isSelected }: DescriptionProps) => {
  return (
    <>
      <MainTitle title={mainTitle} />
      <SubTitle title={subTitle} />
    </>
  )
}

BasicCardTemplate.Description = Description
