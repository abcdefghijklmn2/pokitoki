import { baseKeymap } from 'prosemirror-commands'
import { dropCursor } from 'prosemirror-dropcursor'
import { gapCursor } from 'prosemirror-gapcursor'
import { history, redo, undo } from 'prosemirror-history'
import { keymap } from 'prosemirror-keymap'
import { Schema } from 'prosemirror-model'

import { WidgetController } from '../../components'
import { NodeController } from '../nodes'
import { hoverHighlightPlugin } from './highlightPlugin'
import { customShiftEnter } from './keyMap'

export const createPlugin = (schema: Schema) => {
  return [
    ...WidgetController.getPlugins(),
    ...NodeController.getPlugins(schema),
    keymap({
      ...baseKeymap,
      'Mod-x': undo,
      'Mod-y': redo,
      'Shift-Enter': customShiftEnter,
    }),

    history(),
    gapCursor(),
    dropCursor(),

    hoverHighlightPlugin,
  ]
}
