import { AlertDialog } from '@custompackages/designsystem'
import React, { useState } from 'react'
import { noop } from 'shared'

const AssembledDialogExample = () => {
  const [isVisible, setVisible] = useState(false)

  return (
    <>
      <button
        type="button"
        onClick={() => {
          setVisible(true)
        }}
      >
        click button !
      </button>
      <AlertDialog isVisible={isVisible} onChangeVisible={setVisible} header="example" onSubmit={async (e) => {}}>
        <AlertDialog.Body>Test Body</AlertDialog.Body>
      </AlertDialog>
    </>
  )
}

export default AssembledDialogExample
