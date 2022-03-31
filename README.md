# Ultimatum Blockchain

## NOTE

The README.md is not up to date! This is because the system does not visibly do anything different but behind the scenes files have been added.

## Installation

Install [node.js](https://nodejs.org/en/)

Use the package manager [npm](https://www.npmjs.com/) to install dependencies.

```bash
npm i nodemon --save-dev
npm i jest --save-dev
npm i crypto-js --save
npm i express --save
npm i body-parser --save
npm i ws --save
npm i elliptic --save
npm i uuid --save
```

## Usage

Run tests (use either)

```bash
npm run test
npm run dev-test
```

Run API (use either)

Optional variables are marked by square brackets. Remove the square brackets and replace desired port with the port you wish to run the P2P and/or HTTP server on.

The last command is used by peers to connect to another peer server. Replace the DESIRED_PORT placeholders with the desired port of your peer node and replace PEER_PORT with the peer port of the desired peer you are connecting to.

The default peer port for a peer is 5001 and the http port is 3001 which will be used if not specified. The PEERS environment variable should always be specified if connecting to a peer.

```bash
npm start
[P2P_PORT=desired port] [HTTP_PORT=desired port] npm run dev
HTTP_PORT=DESIRED_PORT P2P_PORT=DESIRED_PORT PEERS=ws://localhost:PEER_PORT npm run dev
```

A simple example of this is to open two terminal windows and run the two commands in the seperate windows:
```bash
npm run dev
HTTP_PORT=3002 P2P_PORT=5002 PEERS=ws://localhost:5001 npm run dev
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)
