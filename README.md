# Wallet Page Component

This project includes a refactored `WalletPage` component built using ReactJS with TypeScript. The component displays wallet balances, sorts them based on blockchain priorities, and fetches real-time prices to calculate USD values.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Component Details](#component-details)

## Overview

The `WalletPage` component is designed to display a list of wallet balances, sort them according to specified priorities, and display their USD values using real-time price data fetched from an external API.

## Features

- Fetches real-time prices from an external API.
- Filters and sorts wallet balances based on blockchain priorities.
- Displays balances in a formatted manner.
- Efficiently updates and re-renders components using React hooks and memoization.

## Installation

To get started with the project, follow these steps:

1. Clone the repository:
    ```sh
    git clone https://github.com/your-repo/wallet-page.git
    ```
2. Navigate to the project directory:
    ```sh
    cd wallet-page
    ```
3. Install the required dependencies:
    ```sh
    npm install
    ```

## Usage

To use the `WalletPage` component in your React project, follow these steps:

1. Ensure you have the necessary dependencies installed:
    ```sh
    npm install react react-dom typescript @types/react @types/react-dom
    ```
2. Import and use the `WalletPage` component in your project:
    ```typescript
    import React from 'react';
    import WalletPage from './components/WalletPage';

    const App: React.FC = () => {
      return (
        <div>
          <WalletPage />
        </div>
      );
    };

    export default App;
    ```

3. Start your development server:
    ```sh
    npm start
    ```

## Component Details

### WalletPage Component

The `WalletPage` component is the main component responsible for displaying wallet balances and their USD values.

#### Props

The component extends `BoxProps` and can accept any props that a `Box` component can.

#### State

- `balances`: Retrieved using the `useWalletBalances` hook.
- `prices`: Managed using the `useState` hook, fetched from an external API.

#### Hooks

- `useEffect`: Fetches prices from an external API when the component mounts.
- `useMemo`: Memoizes the sorted balances to prevent unnecessary re-renders.

#### Methods

- `getPriority`: Determines the priority of a blockchain for sorting purposes.
- Mapping functions to format and render rows of wallet balances.


