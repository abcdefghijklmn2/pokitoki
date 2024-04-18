'use client'

import { Button, LogEvent, Tooltip } from '@custompackages/designsystem'
import { cva } from 'class-variance-authority'
import React, { FC, ReactNode, useEffect, useState } from 'react'

import { LOGIN_METHOD } from '../variable'

interface LoginButtonProps {
  value: 'google' | 'kakao' | 'github'
  children: ReactNode
}

const LoginButtonStyles = cva(
  'flex gap-2 body-03-m justify-center align-middle mx-spacing-6 p-spacing-4 h-14 rounded-md',
  {
    variants: {
      value: {
        kakao: 'bg-[#FEE500] text-text-01',
        google: `bg-[#fff] text-text-01`,
        github: 'bg-[#24292F] text-background-extension-onlywhite',
      },
    },
    defaultVariants: {},
  },
)

const LoginButton: FC<LoginButtonProps> = ({ value, children }) => {
  const [isClient, setIsClient] = useState(false)
  const [lastLoginInfo, setLastLoginInfo] = useState<LoginButtonProps['value'] | undefined>(undefined)

  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient) return null

  return (
    <Tooltip defaultOpen={lastLoginInfo === value}>
      <Tooltip.Trigger>
        <Button
          type="submit"
          name={LOGIN_METHOD}
          variant="custom"
          size="large"
          value="kakao"
          className={LoginButtonStyles({ value })}
        >
          {children}
        </Button>
      </Tooltip.Trigger>

      <Tooltip.Content side="bottom" align="center" className="text-text-01 detail-02-r">
        {lastLoginInfo === value ? '🔑 최근 로그인' : '⚡️ 3초만에 로그인으로 시작하세요'}
      </Tooltip.Content>
    </Tooltip>
  )
}

export default LoginButton
