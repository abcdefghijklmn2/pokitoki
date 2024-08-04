import { action, makeAutoObservable, makeObservable, observable } from 'mobx'

import OpenableStore from '../model/OpenableStore'
import { DropdownPosition } from './type'

class DropdownStore extends OpenableStore {
  position: DropdownPosition = { x: 0, y: 0 }

  constructor() {
    super()
    makeObservable(this, {
      position: observable,
      openTrigger: action,
      closeTrigger: action,
    })
  }

  openTrigger({ x, y }: DropdownPosition) {
    this.position = { x, y }
    this.open()
  }

  closeTrigger() {
    this.isOpen = false
    this.close()
  }
}

const dropdownStore = new DropdownStore()
export default dropdownStore
