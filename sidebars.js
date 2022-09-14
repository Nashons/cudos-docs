module.exports = {
  nodeSidebar: [
    {
      type: 'category',
      label: 'Overview',
      items: [
        'node/overview/introduction',
        'node/overview/understanding-nodes'
      ],
    },
    {
      type: 'category',
      label: 'Security',
      items: [
        'node/security/key-management',
        'node/security/sentry-node-arch'
      ],
    },
    {
      type: 'category',
      label: 'Prerequisites',
      items: [
        'node/prerequisites/hw-req',
        'node/prerequisites/build-go',
        'node/prerequisites/build-redhat-debian',
        'node/prerequisites/stake-req'
      ],
    },
    {
      type: 'category',
      label: 'Run a node',
      items: [
        'node/run-node/run-full-node-redhat-debian',
        {
          type: 'category',
          label: 'Run a validator node',
          items: ['node/run-node/prepare-node-for-validating', 'node/run-node/stake', 'node/run-node/how-to'],
        },
        'node/run-node/check-sync',
      ],
    },
  ],

  buildSidebar: [
    {
      type: 'category',
      label: 'Overview',
      items: [
        'build/intro',
        'build/setup-rust'
      ]
    },
    {
      type: 'category',
      label: 'Smart Contracts',
      items: [
        'build/contract-basics',
        'build/contract-execution',
        'build/messages',
        'build/state',
        'build/entry-points',
      ],
    },
    {
      type: 'category',
      label: 'RPC API',
      items: [
        'build/rpc-api',
      ],
    },
    {
      type: 'category',
      label: 'Build dApp',
      items: [
        'build/dapp-structure',
      ],
    },
    {
      type: 'category',
      label: 'Tools',
      items: [
        'build/install-blast',
      ],
    },
    {
      type: 'category',
      label: 'Counter Tutorial',
      items: [
        'build/create-counter',
        'build/blast-tutorial-2',
        'build/blast-connect',
        'build/deploy-counter',
        'build/interact-counter',
        'build/deploy-testnet-mainnet',
      ],
    },
  ],

  learnSidebar: [
          {
            type: 'category',
            label: 'Introduction',
            items: [
              'learn/introduction/overview'
            ],
          },
          {
            type: 'category',
            label: 'Concepts',
            items: [
             'learn/concepts/account',
              'learn/concepts/wallet'
            ],
          },
      ],

  governanceSidebar: [
    {
      type: 'category',
      label: 'Tokens & Governance',
      items: [
        'governance/tokens',
        'governance/buy-tokens',
      ],
    },
  ],
};
