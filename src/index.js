import React, { Component } from 'react'
class Mangler extends Component {
  constructor (program) {
    super()
    debugger // try referencing Component.  React is on the window, so it doesnt count!
    this.program = program
  }
  static render () {
    return <span>bananas</span>
  }
}
const Zangler = Mangler
new Zangler(1)
