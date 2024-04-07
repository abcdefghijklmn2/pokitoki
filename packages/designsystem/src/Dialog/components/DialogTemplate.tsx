import React from 'react'

import { Dialog, DialogProps } from './compound'

export interface DialogTemplateProps extends DialogProps {}

export const DialogTemplate = ({ children, isVisible, onChangeVisible }: DialogTemplateProps) => {
  return (
    <Dialog isVisible={isVisible} onChangeVisible={onChangeVisible}>
      <Dialog.Root>
        <Dialog.Content>{children}</Dialog.Content>
      </Dialog.Root>
    </Dialog>
  )
}
DialogTemplate.displayName = 'Dialog'
