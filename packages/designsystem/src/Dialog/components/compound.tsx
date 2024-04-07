import React, { Dispatch, FormEvent, ReactComponentElement, ReactElement, ReactNode, useState } from 'react'
import { contextBuildHelper, noop } from 'shared'

import { Close, Content, Overlay, Portal, Root, Trigger } from './radix'

export const [DialogProvider, useDialogContext] = contextBuildHelper<{
  isDialogVisible: boolean
  onChangeVisibleStatus: (newVisibleStatus: boolean) => void
}>({ id: 'dialog' })

const DialogClose = () => {
  return (
    <Close asChild>
      <button type="button" className="IconButton" aria-label="Close">
        X
      </button>
    </Close>
  )
}

const DialogRoot = ({ children }: { children: ReactNode }) => {
  const { isDialogVisible, onChangeVisibleStatus } = useDialogContext()

  return (
    <Root open={isDialogVisible} onOpenChange={onChangeVisibleStatus}>
      {children}
    </Root>
  )
}

const DialogTrigger = ({ children }: { children: ReactNode }) => {
  return <Trigger asChild>{children}</Trigger>
}

const DialogContent = ({ children }: { children: ReactNode }) => {
  return (
    <Portal>
      <Overlay className="fixed inset-0" />
      <Content className="fixed -translate-x-1/2 -translate-y-1/2 top-2/4 left-2/4">{children}</Content>
    </Portal>
  )
}

export interface SubmitFormProps {
  children: ReactNode
  onSubmit: (event: FormEvent<HTMLFormElement>) => Promise<void>
  className?: string
  onError?: (error: unknown) => void
}

const SubmitForm = ({ className, children, onSubmit, onError = noop }: SubmitFormProps) => {
  const { onChangeVisibleStatus } = useDialogContext()

  const handleDialogSubmit = async (event: FormEvent<HTMLFormElement>) => {
    try {
      await onSubmit(event)
    } catch (error) {
      onError(error)
    } finally {
      onChangeVisibleStatus(false)
    }
  }

  return (
    <form
      className={className}
      onSubmit={(event) => {
        event.preventDefault()
        handleDialogSubmit(event)
      }}
    >
      {children}
    </form>
  )
}

export interface DialogProps {
  children: ReactNode

  isVisible?: boolean
  onChangeVisible?: (newVisibleStatus: boolean) => void
}

export const Dialog = ({ isVisible = undefined, onChangeVisible, children }: DialogProps) => {
  const [open, setOpen] = useState(false)

  const isDialogVisible = isVisible ?? open
  const handleChangeVisibleStatus = (newVisibleStatus: boolean) => {
    if (onChangeVisible) {
      onChangeVisible(newVisibleStatus)

      return
    }

    setOpen(newVisibleStatus)
  }

  return (
    <DialogProvider isDialogVisible={isDialogVisible} onChangeVisibleStatus={handleChangeVisibleStatus}>
      {children}
    </DialogProvider>
  )
}

Dialog.displayName = 'Dialog'

Dialog.Root = DialogRoot
Dialog.Trigger = DialogTrigger
Dialog.SubmitForm = SubmitForm
Dialog.Content = DialogContent
Dialog.Close = DialogClose
