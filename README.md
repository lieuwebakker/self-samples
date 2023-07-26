# $SELF demo scripts 

## Introduction

These sample scripts are a copy of the scripts running on our  $SELF API Server at https://self-api.com and meant to demonstrate the minimal code for a basic implementation of $SELF.

For the sake of simplicity we limited the demo scripts to just the elementary functionality.

Both demo scripts have a .mjs extension.

A file with .mjs extension is a JavaScript source code file that is used as an ECMA Module (ECMAScript Module) in Node.js applications. 

- - -

## Prerequisites & installation

- Node.js version installed, preferred version 18.14 or up.
- Fork, copy or download the code
- Have a look at package.json 
- Install NPM packages : npm update

- - -

## How to use

package.josn holds the commands; 

"try": "node scripts/getwallet.mjs papajohns",
"trymeta": "node scripts/getmeta.mjs papajohns",


You can run the name resolving interaction flow with the command
- npm run try

Youc can run the meta resolving interaction with the command
- npm run trymeta

Or just input from the rootdirectory;

`- node scripts/getwallet.mjs papajohns`
`- node scripts/getmeta.mjs papajohns`

- - -
 
 @Thanks for reading. Please feel free to fork it / contribute to it 

