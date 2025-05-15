Starting the project -> navigate into frontend -> open  gitbash shell -> npm start
1. Project Requirements
Core Features

    Wallet connection (MetaMask)

    Event creation form

    Event listing page

    Ticket purchasing (NFT-based)

    User profile (wallet-based)

Technical Stack

    Frontend: React + Tailwind CSS

    Blockchain: Solidity (Ethereum/Polygon)

    Smart Contract Development: Hardhat

    Wallet Integration: ethers.js

    Routing: react-router-dom

2. Installation Guide
Step 1: Set Up Project Structure
bash

npx create-react-app event-marketplace --template typescript
cd event-marketplace

Step 2: Install Frontend Dependencies
bash

npm install \
  ethers@latest \
  react-router-dom \
  @tailwindcss/postcss7-compat \
  postcss \
  autoprefixer \
  @testing-library/jest-dom \
  @testing-library/react \
  @testing-library/user-event

Step 3: Install Blockchain Dev Tools
bash

npm install --save-dev \
  hardhat \
  @nomiclabs/hardhat-waffle \
  @nomiclabs/hardhat-ethers \
  ethers \
  chai \
  @types/chai \
  @types/mocha \
  ts-node \
  typescript

Step 4: Initialize Hardhat
bash

npx hardhat

Select: Create a basic sample project → Yes to all prompts
Step 5: Set Up Tailwind CSS

    Create config file:

bash

touch tailwind.config.js postcss.config.js

    Add to tailwind.config.js:

javascript

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false,
  theme: { extend: {} },
  variants: { extend: {} },
  plugins: [],
}

    Add to postcss.config.js:

javascript

module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}

    Add to src/index.css:

css

@tailwind base;
@tailwind components;
@tailwind utilities;

Step 6: File Structure Setup

event-marketplace/
├── contracts/           # Solidity contracts
├── scripts/             # Deployment scripts
├── src/
│   ├── contexts/        # React contexts
│   ├── pages/           # Route components
│   ├── components/      # Reusable UI
│   ├── App.tsx
│   └── index.tsx
├── hardhat.config.js    # Hardhat config
└── tailwind.config.js

3. Development Workflow
Frontend Development

    Start React dev server:

bash

npm start

    Recommended VS Code extensions:

    ESLint

    Prettier

    Solidity

Blockchain Development

    Start local blockchain:

bash

npx hardhat node

    In another terminal:

bash

npx hardhat run scripts/deploy.js --network localhost

    For testing:

bash

npx hardhat test

4. Required Accounts/Services

    MetaMask (Browser extension)

    Alchemy/Infura (For mainnet/testnet connections)

    Polygon Faucet (For test MATIC): https://faucet.polygon.technology/

5. Environment Variables

Create .env file:
env

REACT_APP_ALCHEMY_API_KEY=your_key_here
REACT_APP_CONTRACT_ADDRESS=0x...
PRIVATE_KEY=your_wallet_private_key

Install dotenv:
bash

npm install dotenv

Add to hardhat.config.js:
javascript

require('dotenv').config();

6. Verification Checklist

    MetaMask installed in browser

    All npm packages installed

    Hardhat local node running

    Tailwind CSS properly configured

    .env file created with keys

    Contract deployed to testnet

7. Troubleshooting

If you get stuck:

    Clear npm cache:

bash

npm cache clean --force

    Reinstall dependencies:

bash

rm -rf node_modules package-lock.json
npm install

    Reset React app:

bash

npm start -- --reset-cache


INSIDE BLOCKCHAIN DIRECTORY: 
npm init -y
npm install --save-dev hardhat
npx hardhat init