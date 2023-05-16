'use strict'

// Declare Dependencies
const bignum = require('bignum');

// Declare Global variables
let oldmask = bignum("198972000");
let mask = bignum("32481138620657517");

class CIM {

    encrypt(msisdn){
        return mask.xor(msisdn);
    }

    decrypt(emsisdn){
        return mask.xor(emsisdn).toString(10);
    }

    decryptOldMsisdn(emsisdn){
        return oldmask.xor(emsisdn).toString(10);
    }

}

module.exports = CIM
