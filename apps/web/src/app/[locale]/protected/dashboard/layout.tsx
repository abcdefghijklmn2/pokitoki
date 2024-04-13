import { ResponsiveLayout } from '@custompackages/designsystem'
import { NextIntlClientProvider, useMessages } from 'next-intl'
import React from 'react'
import { ICON_ARROW_DOWN } from 'shared'

import PokiTokiNavigation from '@/components/Navigator/Navigator'
import { LayoutProps } from '@/interface/type'

const Layout: React.FunctionComponent<LayoutProps> = ({ children, params: { locale } }) => {
  return (
    <ResponsiveLayout className="min-h-screen">
      {children}
      <ICON_ARROW_DOWN />
      <PokiTokiNavigation />
    </ResponsiveLayout>
  )
}

export default Layout
