class Mangler {
  constructor(program) {
    debugger
    this.program = program;
  }
  static bananas () {
    console.log('bananas')
  }
}
const Zangler = Mangler
new Zangler(1)
