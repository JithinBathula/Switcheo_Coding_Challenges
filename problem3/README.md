# Wallet Page Component

This project includes a refactored `WalletPage` component built using ReactJS with TypeScript. The component displays wallet balances, sorts them based on blockchain priorities, and fetches real-time prices to calculate USD values.

## Issues and Improvements

### Datasource Class Not Implemented

**Issue**: The `Datasource` class is mentioned but not implemented, making it impossible to retrieve prices.

**Improvement**: Implement the `Datasource` class to fetch prices.

### Dependency Array in useEffect

**Issue**: The `useEffect` hook for fetching prices has an empty dependency array, meaning it will only run once. If `balances` change, prices won't be fetched again, which might be needed depending on the application logic.

**Improvement**: Ensure dependencies are correctly managed. If prices need to be fetched again based on some state change, include those states in the dependency array.

### Improper Filtering Logic in useMemo

**Issue**: The filtering logic in the `useMemo` hook is flawed. The variables `lhsPriority` are used without being defined.

**Improvement**: Correct the filtering and sorting logic by defining and using the correct variables.

### Unnecessary Calculation in Mapping

**Issue**: `formattedBalances` is computed but not used. Instead, formatting and calculation are performed inside `rows`.

**Improvement**: Use `formattedBalances` directly in `rows` to avoid recalculating formatted values.

### Inefficient Mapping and Sorting

**Issue**: The code maps through `sortedBalances` twice, which is not efficient.

**Improvement**: Combine formatting and calculation logic into a single mapping to reduce redundant operations.

### Error Handling

**Issue**: The error handling in `useEffect` uses `console.err` which is a typo and should be `console.error`.

**Improvement**: Fix the typo and consider more robust error handling mechanisms.

### Missing Type Definitions

**Issue**: `balances` is assumed to have a `blockchain` property which is not defined in the `WalletBalance` interface.

**Improvement**: Update the `WalletBalance` interface to include all necessary properties.
