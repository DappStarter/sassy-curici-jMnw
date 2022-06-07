require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict argue system venture stomach rival situate cluster hard light army gentle'; 
let testAccounts = [
"0x8fee9d3b8a8fae21dd07ebab11547983cce4ad5ff96879ab40fe1bf159fba8b9",
"0x6425bb4e9e89ce778127a3dcacc2f658e5479ccb0cb3791bdbc2ffbaff7e4523",
"0xd5b69a1b9df2f3fc618719bceb494690ecf9103a6784a138c5791f715b53b731",
"0xa745813e2a36d693e5c7b6d5a185d47a948c66df7c8fd1468aeee1d028200e3b",
"0xc1a9375ffe5d2a9c2dc16383c9058a1ad9597eb6aaccc8edad0fa1deccf3e849",
"0x36e76b8683e248d0a9f2c71a563c6284d84f1884e2ba253ed7ca4e8486732db4",
"0x5b1999b3dfbbe906236c9d48e40f32af60742d073900fab938409fef9051c259",
"0x5da56075598ace7391f2167011c96ca3ded8634a3d0e3e61ce840e6fb1623bd3",
"0x7226dbd77761de65bf901030dc2efdb92701b466b0afff9e99f679ca2ba423f5",
"0x752fb012bb620f3ebd48b425e9f3d8f9ae199299116b51c72a69c48b5c297352"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

