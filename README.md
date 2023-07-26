# SELF scripts for name and metadata resolving 

These sample scripts are built to demonstrate the basic code for a standard implementation of SELF

The scripts are the exact same as of the SELF API Server.

For the sake of simplicity we limited the demo scripts to just the elementary functionalityl
<br>
All scripts have a .mjs extension.

A file with .mjs extension is a JavaScript source code file that is used as an ECMA Module (ECMAScript Module) in Node.js applications. 
<br>

Prerequisites

Node.js version installed, preferred versiin 18.14 or up.

<br>

What to do ext after download/ deployment

- npm update

have a look at package.json 

It covers to script commands; 

   	"try": "node scripts/getwallet.mjs papajohns",
    "trymeta": "node scripts/getmeta.mjs papajohns",
<br>

To try the name resolving interaction with the command

- npm run try

To try the meta resolving interaction with the command

- npm run trymeta

Or just input from the rootdirectory;

- node scripts/getwallet.mjs papajohns
- node scripts/getmeta.mjs papajohns

@happy selving !



