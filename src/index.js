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

      for (let [cmd, arg1, arg2 = ''] of inputCommands) {
        switch(cmd) {
            case 'create_parking_lot':
                log(`Created parking lot with ${arg1} slots`)
                this.lot = new Array(+arg1).fill(null);
                break;
            default:
                log('Broken command');
        }
      }
  }
}

if (require.main === module) {
  const parkingLot = new ParkingLot();
  parkingLot.main();
}

module.exports = ParkingLot;