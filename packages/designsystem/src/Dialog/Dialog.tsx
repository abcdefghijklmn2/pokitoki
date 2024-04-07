import { Slot } from '@radix-ui/react-slot'
import React, { ReactNode } from 'react'

import { Button } from '../Button'
import { cn } from '../utils'
import { Dialog, SubmitFormProps, useDialogContext } from './components/compound'
import { DialogTemplate, DialogTemplateProps } from './components/DialogTemplate'
import { Title } from './components/radix'

const SubmitForm = ({ onSubmit, onError }: Omit<SubmitFormProps, 'children'>) => {
  const { onChangeVisibleStatus } = useDialogContext()

  return (
    <Dialog.SubmitForm className="flex flex-col w-full mt-2" onSubmit={onSubmit} onError={onError}>
      <Button className="w-full mb-2" type="submit" size="medium" variant="primary">
        Primary
      </Button>
      <Button
        className="w-full"
        onClick={() => onChangeVisibleStatus(false)}
        type="button"
        size="medium"
        variant="secondary"
      >
        Secondary
      </Button>
    </Dialog.SubmitForm>
  )
}

const DialogBody = ({ className, children }: { className?: string; children: ReactNode }) => {
  return <div className={cn('flex w-full py-2 grow body-02-r', className)}>{children}</div>
}

export interface AssembledDialogProps extends Omit<DialogTemplateProps, 'children'>, Omit<SubmitFormProps, 'children'> {
  header: string

  children: ReactNode
}

export const AlertDialog = ({
  isVisible,
  onChangeVisible,
  header,
  onSubmit,
  children,
  onError,
}: AssembledDialogProps) => {
  return (
    <DialogTemplate isVisible={isVisible} onChangeVisible={onChangeVisible}>
      <div className="flex-col p-6 border-solid rounded-lg bg-surface-up border-1 border-border-01 w-80 shadow-card-01">
        <Title className="flex flex-row justify-between w-full mb-3 text-text-01 heading-04 ">
          {header}
          <Dialog.Close />
        </Title>

        {children}

        <SubmitForm onSubmit={onSubmit} onError={onError} />
      </div>
    </DialogTemplate>
  )
}

AlertDialog.Body = DialogBody

AlertDialog.displayName = 'dialog'
