#!/usr/bin/env node
const program = require('commander');
const fs = require('fs');

const log = (...args) => {
  console.log(...args);
};

class ParkingLot {
  constructor() {
    this.init();
    this.location = this.program.location;
  }

  init() {
    this.lot = [];
    this.program = program;
    program
      .version('1.0.0')
      .option('-l, --location <file>', 'File Path')
      .parse(process.argv);
  }

  main() {
      const inputCommands = fs.readFileSync(this.location)
        .toString()
        .split('\n').map(cmd => cmd.split(' '));
  }
}

if (require.main === module) {
  const parkingLot = new ParkingLot();
  parkingLot.main();
}

module.exports = ParkingLot;