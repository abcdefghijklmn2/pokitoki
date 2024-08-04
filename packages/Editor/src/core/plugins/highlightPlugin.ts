import { Node as ProseMirrorNode } from 'prosemirror-model'
import { Plugin } from 'prosemirror-state'
import { Decoration, DecorationSet, EditorView } from 'prosemirror-view'

export const blockDnDHoverPluginDispatcher = (view: EditorView) => {
  return {
    hoverDndPlaceholderDispatcher: (nodeInfo: { node: ProseMirrorNode; start: number; end: number; point: number }) => {
      const { node, start, end, point } = nodeInfo

      view.dispatch(view.state.tr.setMeta(BlockDnDHighlightPlugin, { node, start, end, point }))
    },

    resetHoverDndPlaceholderDispatcher: () => {
      view.dispatch(view.state.tr.setMeta(BlockDnDHighlightPlugin, null))
    },
  }
}

export const BlockDnDHighlightPlugin = new Plugin({
  props: {
    decorations(state) {
      return this.getState(state)
    },
  },
  state: {
    init() {
      return DecorationSet.empty
    },
    apply(tr, old) {
      const nodeInfo = tr.getMeta(BlockDnDHighlightPlugin)
      if (nodeInfo === undefined) return old

      if (nodeInfo === null) {
        return DecorationSet.empty
      }

      const { start, point, end } = nodeInfo

      if (start <= -1) {
        return old
      }

      const deco = Decoration.node(start, end, { class: `hover-border ${point < end ? 'start' : 'end'}` })
      return DecorationSet.create(tr.doc, [deco])
    },
  },
})

/* FIXME 
  나중 css 관리법 정하면 이동시키기
*/
const style = document.createElement('style')
style.innerHTML = `
  .hover-border {
   
  }

  .hover-border.start {
    border-top: 4px solid blue; 
  }

  .hover-border.end {
    border-bottom: 4px solid blue; 
  }
`
document.head.appendChild(style)
