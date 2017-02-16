class Mangler {
  constructor(program) {
    this.program = program;
  }
  static bananas () {
    console.log('bananas')
  }
}
const Zangler = Mangler
new Zangler
