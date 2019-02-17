import dragula from 'dragula'
import 'dragula/dist/dragula.css'

const dragger = {
  init(container) {
    return dragula([...container])
  },
  siblings({el, wrapper, candidates, type}) {
    const curId = el.dataset[type + 'Id'] * 1
    let prev = null
    let next = null

    candidates.forEach((el, idx, arr) => {
      const cardId = el.dataset[type + 'Id'] * 1
      if (cardId == curId) {
        prev = idx > 0 ? {
          id: arr[idx - 1].dataset[type + 'Id'] * 1,
          pos: arr[idx - 1].dataset[type + 'Pos'] * 1
        } : null

        next = idx < arr.length - 1 ? {
          id: arr[idx + 1].dataset[type + 'Id'] * 1,
          pos: arr[idx + 1].dataset[type + 'Pos'] * 1
        } : null
      }
    })
    return {prev, next}
  }
}

export default dragger