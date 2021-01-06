require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good armed ozone sugar notice crime remember arrow good drink fresh slab'; 
let testAccounts = [
"0x46eb1a76f3bdb5c0b2a23f170326a211d7acb6253e6a27f4606b7f04382d7963",
"0xdcbd81b076402cf659fb972fd07725f846e5b54775ca0ab702046f9bc90c4e8f",
"0xfefc3955336c772521677115bd589ddcd28f22d7e98525675e58102d297f66ab",
"0x0dea2f0006fe9e09d6954329949cc9d9a917f6a63ca5ef7e68b0309d479f79e7",
"0xf44406d204741a07c4a02cc21bf74df454b5014bd93cc47266aa7f1221d6b3a5",
"0x58ce19f9e04c226b06a8cbf5d7dd878f5581bd8df61d066ce9362a7b2957a8ac",
"0x061ae93a119d6c3c428944b96c2930161d922a8ee4632639d5f80abd92f2c839",
"0x34430fc754e11db0bc05f4881144802eb777c7deae6d8e0cd32c9eac5460d49e",
"0xe3ccc52def78ba25b285d403837727d5af54ede03b752273773f7cfcb9e6e585",
"0xa6352af8adba2a770f1ec5ceac1d337b362232249fdcdcf385c389f657ab9199"
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
            version: '^0.5.11'
        }
    }
};
