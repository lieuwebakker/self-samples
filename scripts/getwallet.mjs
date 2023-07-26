/// SPDX-License-Identifier: MIT
"use strict"; 
// * * *     *       *   *       *   *   *   * *** *
// *    *       *     *      *   *       *   *     *
// *   SCRIPT : getwallet.mjs      * *         * 
// *   Location scripts/getwallet.mjs       *    * * 
// *   Author Luis Panadero     *                  *
// *   Date: 21 jul 2023             *          *
// *   Version: v0.2.2.            *        *      *
// ** *     *       *   *       *   *   *   *     **
// * *  *       *     *      *   *       *  *  * * *

/** @notice How the routine works
* npm i ethers
* node getwallet killer
*
*/

// requirements
import { ethers, keccak256, toUtf8Bytes  } from "ethers";

// endpoint abi contract
const e = "https://bsc-dataseed1.binance.org/";
const a = [{"inputs": [{ "internalType": "uint256", "name": "tokenId", "type": "uint256" }],"name": "ownerOf","outputs": [{ "internalType": "address", "name": "", "type": "address" }],"stateMutability": "view","type": "function"}];
const c = "0x125Bb13F77f3565d421bD22e92aaFfC795D97a72";

// getProvider
function gp() {return new ethers.JsonRpcProvider(e);}

// readContract
async function rc( _c, _a, _f, _p=[]) {
    const p = gp();
    const c = new ethers.Contract(_c, _a, p);
    return await c[_f](..._p);
}

// resolveName
async function rn(_n) {
    try { console.log( await rc(c,a,"ownerOf",[keccak256(toUtf8Bytes(_n))])); }
    catch (e) { console.log(e.reason); }
}
rn(process.argv.slice(2)[0]);