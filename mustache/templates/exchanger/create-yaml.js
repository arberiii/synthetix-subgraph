const StartBlocks = require('./set-start-blocks');
const { createStartBlock } = require('../common');

module.exports = {
  createYaml: (env, universalTestBlock) => [
    {
      name: 'Exchanger',
      mappingFile: '../src/exchanger-mapping.ts',
      startBlock: createStartBlock(StartBlocks.Exchanger, env, universalTestBlock),
      address: "'0x439502C922ADA61FE49329248B7A8ecb31C0b329'",
      abi: 'Exchanger',
      entities: ['ExchangeEntrySettled', 'ExchangeEntryAppended', 'TemporaryExchangePartnerTracker'],
      abis: [
        {
          name: 'Exchanger',
          path: '../abis/Exchanger.json',
        },
      ],
      events: [
        {
          event:
            'ExchangeEntrySettled(indexed address,bytes32,uint256,bytes32,uint256,uint256,uint256,uint256,uint256)',
          handler: 'handleExchangeEntrySettled',
        },
        {
          event: 'ExchangeEntryAppended(indexed address,bytes32,uint256,bytes32,uint256,uint256,uint256,uint256)',
          handler: 'handleExchangeEntryAppended',
        },
      ],
    },
    {
      name: 'Exchanger_v2',
      mappingFile: '../src/exchanger-mapping.ts',
      startBlock: createStartBlock(StartBlocks.Exchanger_v2, env, universalTestBlock),
      address: "'0x1d53a13D78766C0Db6eF73eC0ae1138eA2b6f5D4'",
      abi: 'Exchanger',
      entities: ['ExchangeEntrySettled', 'ExchangeEntryAppended', 'TemporaryExchangePartnerTracker'],
      abis: [
        {
          name: 'Exchanger',
          path: '../abis/Exchanger.json',
        },
      ],
      events: [
        {
          event:
            'ExchangeEntrySettled(indexed address,bytes32,uint256,bytes32,uint256,uint256,uint256,uint256,uint256)',
          handler: 'handleExchangeEntrySettled',
        },
        {
          event: 'ExchangeEntryAppended(indexed address,bytes32,uint256,bytes32,uint256,uint256,uint256,uint256)',
          handler: 'handleExchangeEntryAppended',
        },
      ],
    },
    {
      name: 'Exchanger_v3',
      mappingFile: '../src/exchanger-mapping.ts',
      startBlock: createStartBlock(StartBlocks.Exchanger_v3, env, universalTestBlock),
      address: "'0xc4942df0d3c561c71417BBA09d2DEA7a3CC676Fb'",
      abi: 'Exchanger',
      entities: ['ExchangeEntrySettled', 'ExchangeEntryAppended', 'TemporaryExchangePartnerTracker'],
      abis: [
        {
          name: 'Exchanger',
          path: '../abis/Exchanger.json',
        },
      ],
      events: [
        {
          event:
            'ExchangeEntrySettled(indexed address,bytes32,uint256,bytes32,uint256,uint256,uint256,uint256,uint256)',
          handler: 'handleExchangeEntrySettled',
        },
        {
          event: 'ExchangeEntryAppended(indexed address,bytes32,uint256,bytes32,uint256,uint256,uint256,uint256)',
          handler: 'handleExchangeEntryAppended',
        },
      ],
    },
    {
      name: 'Synthetix',
      mappingFile: '../src/exchanger-mapping.ts',
      startBlock: createStartBlock(StartBlocks.Synthetix, env, universalTestBlock),
      address: "'0xC011a73ee8576Fb46F5E1c5751cA3B9Fe0af2a6F'",
      abi: 'Synthetix',
      entities: ['DailyExchangePartner', 'ExchangePartner', 'TemporaryExchangePartnerTracker'],
      abis: [
        {
          name: 'Synthetix',
          path: '../abis/Synthetix.json',
        },
      ],
      events: [
        {
          event: 'ExchangeTracking(indexed bytes32,bytes32,uint256)',
          handler: 'handleExchangeTracking',
        },
      ],
    },
  ],
};
