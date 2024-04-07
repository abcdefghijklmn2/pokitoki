import React, { Dispatch, FormEvent, ReactComponentElement, ReactElement, ReactNode, useState } from 'react'
import { contextBuildHelper } from 'shared'

import { Content, Overlay, Portal, Root, Trigger } from './radix'

const [Provider, useDialogContext] = contextBuildHelper<{
  open: boolean
  setOpen: Dispatch<React.SetStateAction<boolean>>
}>({ id: 'dialog' })

interface DialogProps {
  children: ReactNode
}

const DialogRoot = ({ children }: { children: ReactNode }) => {
  const { open, setOpen } = useDialogContext()

  return (
    <Root open={open} onOpenChange={setOpen}>
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
      <Overlay />
      <Content>{children}</Content>
    </Portal>
  )
}

const SubmitForm = ({
  className,
  children,
  onSubmit,
}: {
  className: string
  children: ReactNode
  onSubmit: (event: FormEvent<HTMLFormElement>) => Promise<void>
}) => {
  const { setOpen } = useDialogContext()

  const handleDialogSubmit = async (event: FormEvent<HTMLFormElement>) => {
    await onSubmit(event)
    setOpen(false)
  }

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault()
        handleDialogSubmit(event)
      }}
    >
      {children}
    </form>
  )
}

const Dialog = ({ children }: DialogProps) => {
  const [open, setOpen] = useState(false)

  return (
    <Provider open={open} setOpen={setOpen}>
      {children}
    </Provider>
  )
}

Dialog.displayName = 'Dialog'

Dialog.Root = DialogRoot
Dialog.Trigger = DialogTrigger
Dialog.SubmitForm = SubmitForm
Dialog.DialogContent = DialogContent

export default Dialog
