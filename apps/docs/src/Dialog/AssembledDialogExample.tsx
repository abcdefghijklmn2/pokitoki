import { AssembledDialog } from '@custompackages/designsystem'
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
      <AssembledDialog isVisible={isVisible} onChangeVisible={setVisible} header="example" onSubmit={async (e) => {}}>
        <AssembledDialog.Body>Test Body</AssembledDialog.Body>
      </AssembledDialog>
    </>
  )
}

export default AssembledDialogExample
