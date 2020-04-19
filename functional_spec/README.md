# Functional Suite

`functional_spec/` contains the Mocha/Chai based automated testing suite that will validate the correctness of your program for the sample input and output.

## Setup

First, install [Node](https://www.digitalocean.com/community/tutorials/how-to-install-node-js-on-ubuntu-16-04). Then run the following commands under the `parking_lot` dir.

```
parking_lot $ node -v # confirm Node present
v8.16.0
parking_lot $ npm i # install node dependencies
...
...
added 116 packages from 80 contributors and audited 218 packages in 2.026s
found 0 vulnerabilities
```

## Usage

You can run the full suite from `parking_lot` by doing
```
parking_lot $ bin/run_functional_tests
```

You can run the full suite directly from `parking_lot` by doing
```
parking_lot $ npm run test
```

You can run a specific test from `parking_lot/functional_spec`.
In this example we're running the `can create a parking lot` test.
```
parking_lot $ npm run test-parking
```
