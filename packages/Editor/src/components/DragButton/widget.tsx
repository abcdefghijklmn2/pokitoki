import { Plugin, PluginKey } from 'prosemirror-state'
import React, { PropsWithChildren, useState } from 'react'

import Widget from '../Widget'
import DragButtonStore from './model'
import { DragButton } from './ui'

export default class DragButtonWidget extends Widget {
  render() {
    return <DragButton />
  }

  plugin() {
    return [
      new Plugin({
        key: new PluginKey('dragButton'),
        props: {
          handleDOMEvents: {
            mouseover: (view, event) => {
              const { target } = event

              // @ts-ignore
              const pos = view.posAtDOM(target, 0)
              const { doc, schema } = view.state
              const $pos = doc.resolve(pos)
              const node = $pos.parent

              const coords = view.coordsAtPos(pos)

              if (node) {
                // Adjust this condition as needed
                DragButtonStore.openTrigger({ x: coords.left, y: coords.bottom - 20, node, pos: $pos })
              } else {
                DragButtonStore.closeTrigger()
              }

              return false
            },
          },
        },
      }),
    ]
  }
}
