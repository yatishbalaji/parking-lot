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
            case 'park':
                const index = this.lot.indexOf(null);
                if (index === -1) {
                    log('Sorry, parking lot is full');
                } else {
                    this.lot[index] = arg1;
                    log(`Allocated slot number: ${index + 1}`)
                }
                break;
            case 'leave':
                const slot = this.lot.indexOf(arg1);
                if (slot === -1) {
                    log(`Registration number ${arg1} not found`)
                } else {
                    this.lot[slot] = null;
    
                    const fee = 10 + (+arg2 - 2) * 10;
    
                    log(`Registration number ${arg1} with Slot Number ${slot + 1} is free with Charge ${fee}`);
                }

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