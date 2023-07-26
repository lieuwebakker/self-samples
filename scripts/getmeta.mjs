/// SPDX-License-Identifier: MIT
"use strict"; 
// * * *     *       *   *       *   *   *   * *** *
// *    *       *     *      *   *       *   *     *
// *   SCRIPT : getmeta.mjs      * *         * 
// *   Location scripts/getmeta.mjs       *    * * 
// *   Author Luis Panadero     *                  *
// *   Date: 24 jul 2023             *          *
// *   Version: v0.1.0.            *        *      *
// ** *     *       *   *       *   *   *   *     **
// * *  *       *     *      *   *       *  *  * * *

/** @notice How the routine works
* npm i ethers
* npm i node-fetch
* node getmeta papajohns
*/

// gateway routine
async function createGatewayLink(ipfsLink) {
  const ipfsPrefix = "ipfs://";
  const gatewayPrefix = "https://nftstorage.link/ipfs/";

  if (ipfsLink.startsWith(ipfsPrefix)) {
    const cid = ipfsLink.substring(ipfsPrefix.length);
    return gatewayPrefix + cid;
  }
  return undefined;
}

// requirements
import { ethers, keccak256, toUtf8Bytes  } from "ethers";
import fetch from 'node-fetch';

// endpoint abi contract
const e = "https://bsc.publicnode.com";
const aa = [{inputs: [{ internalType: "uint256", name: "tokenId", type: "uint256" }],name: "tokenURI",outputs: [{ internalType: "string", name: "", type: "string" }],stateMutability: "view",type: "function",}];
const c = "0x125Bb13F77f3565d421bD22e92aaFfC795D97a72";

// getProvider
function gp() {return new ethers.JsonRpcProvider(e);}

// get metadata
async function gm( _n) {
  try {
    // init provider
    const p = gp();
    // read contract
    const contract = new ethers.Contract(c, aa, p);
    // get tokenUri of hashed_name
    const tokenUri = await contract.tokenURI(keccak256(toUtf8Bytes(_n)));
    // create gateway
    const gatewayLink = await createGatewayLink(tokenUri);
    // read metadata
    console.log(await (await fetch(gatewayLink)).json());
  } 
    catch (e) { console.log(e.reason); }
}
gm(process.argv.slice(2)[0]);