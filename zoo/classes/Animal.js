class Animal {
  sound = ''
  constructor(sound) {
    this.sound = sound
  }

  speak(message) {
    console.log(message.split(' ').join(` ${this.sound} `) + ` ${this.sound}`)
  }
}

class Lion extends Animal {
  constructor() {
    super('roar')
  }
}

class Tiger extends Animal {
  constructor() {
    super('grr')
  }
}

module.exports = {
  Lion,
  Tiger,
}
