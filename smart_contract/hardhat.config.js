// https://eth-ropsten.alchemyapi.io/v2/8qUdJ8JfFaLki6BooVnKRchbmF9cyweR

require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/8qUdJ8JfFaLki6BooVnKRchbmF9cyweR',
      accounts: [
        '6bd68756517a867bd6157cdb86edacca1fd205a2d501d96c6f5f89455ec11180',
      ],
    },
  },
};
