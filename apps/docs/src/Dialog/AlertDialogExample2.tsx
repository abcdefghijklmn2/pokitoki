import { AlertDialog } from '@custompackages/designsystem'
import React, { useState } from 'react'

const TriggerButton = () => {
  return (
    <button style={{ width: '70px', height: '70px', background: 'red', margin: '100px' }} type="button">
      click button !
    </button>
  )
}

const AssembledDialogExample2 = () => {
  return (
    <>
      <AlertDialog Trigger={TriggerButton} header="example" onSubmit={async (e) => {}}>
        <AlertDialog.Body>Test Body</AlertDialog.Body>
      </AlertDialog>
    </>
  )
}

export default AssembledDialogExample2
