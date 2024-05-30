// src/App.js

import React, { useState, useEffect } from 'react';
import {
  Container,
  TextField,
  Button,
  MenuItem,
  Typography,
  Box,
  Paper,
  CircularProgress,
  Snackbar,
  Alert,
} from '@mui/material';
import axios from 'axios';
import './App.css';

const tokenData = [
  { currency: "BLUR", price: 0.20811525423728813 },
  { currency: "bNEO", price: 7.1282679 },
  { currency: "BUSD", price: 0.9998782611186441 },
  { currency: "USD", price: 1 },
  { currency: "ETH", price: 1645.9337373737374 },
  { currency: "GMX", price: 36.345114372881355 },
  { currency: "STEVMOS", price: 0.07276706779661017 },
  { currency: "LUNA", price: 0.40955638983050846 },
  { currency: "RATOM", price: 10.250918915254237 },
  { currency: "STRD", price: 0.7386553389830508 },
  { currency: "EVMOS", price: 0.06246181355932203 },
  { currency: "IBCX", price: 41.26811355932203 },
  { currency: "IRIS", price: 0.0177095593220339 },
  { currency: "ampLUNA", price: 0.49548589830508477 },
  { currency: "KUJI", price: 0.675 },
  { currency: "STOSMO", price: 0.431318 },
  { currency: "USDC", price: 0.989832 },
  { currency: "ATOM", price: 7.186657333333334 },
  { currency: "STATOM", price: 8.512162050847458 },
  { currency: "OSMO", price: 0.3772974333333333 },
  { currency: "rSWTH", price: 0.00408771 },
  { currency: "STLUNA", price: 0.44232210169491526 },
  { currency: "LSI", price: 67.69661525423729 },
  { currency: "OKB", price: 42.97562059322034 },
  { currency: "OKT", price: 13.561577966101694 },
  { currency: "SWTH", price: 0.004039850455012084 },
  { currency: "USC", price: 0.994 },
  { currency: "WBTC", price: 26002.82202020202 },
  { currency: "wstETH", price: 1872.2579742372882 },
  { currency: "YieldUSD", price: 1.0290847966101695 },
  { currency: "ZIL", price: 0.01651813559322034 },
];

const App = () => {
  const [amountToSend, setAmountToSend] = useState('');
  const [amountToReceive, setAmountToReceive] = useState('');
  const [selectedTokenSend, setSelectedTokenSend] = useState('');
  const [selectedTokenReceive, setSelectedTokenReceive] = useState('');
  const [error, setError] = useState('');

  const handleSendAmountChange = (e) => {
    setAmountToSend(e.target.value);
    if (selectedTokenSend && selectedTokenReceive) {
      const exchangeRate =
        tokenData.find((token) => token.currency === selectedTokenReceive).price /
        tokenData.find((token) => token.currency === selectedTokenSend).price;
      setAmountToReceive((e.target.value * exchangeRate).toFixed(2));
    }
  };

  const handleTokenSendChange = (e) => {
    setSelectedTokenSend(e.target.value);
    if (amountToSend && selectedTokenReceive) {
      const exchangeRate =
        tokenData.find((token) => token.currency === selectedTokenReceive).price /
        tokenData.find((token) => token.currency === e.target.value).price;
      setAmountToReceive((amountToSend * exchangeRate).toFixed(2));
    }
  };

  const handleTokenReceiveChange = (e) => {
    setSelectedTokenReceive(e.target.value);
    if (amountToSend && selectedTokenSend) {
      const exchangeRate =
        tokenData.find((token) => token.currency === e.target.value).price /
        tokenData.find((token) => token.currency === selectedTokenSend).price;
      setAmountToReceive((amountToSend * exchangeRate).toFixed(2));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('Swap functionality is not implemented');
  };

  return (
    <Container>
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
        <Paper elevation={3} sx={{ p: 4, backgroundColor: '#1e1e1e', color: '#fff', width: '100%', maxWidth: '500px' }}>
          <Typography variant="h5" gutterBottom align="center" sx={{ color: '#2196f3' }}>
            Currency Swap
          </Typography>
          <form onSubmit={handleSubmit}>
            <TextField
              label="Amount to Send"
              variant="outlined"
              fullWidth
              value={amountToSend}
              onChange={handleSendAmountChange}
              sx={{ mb: 2, input: { color: '#fff' }, label: { color: '#fff' } }}
              InputLabelProps={{ style: { color: '#fff' } }}
            />
            <TextField
              label="Token to Send"
              select
              variant="outlined"
              fullWidth
              value={selectedTokenSend}
              onChange={handleTokenSendChange}
              sx={{ mb: 2, input: { color: '#fff' }, label: { color: '#fff' } }}
              InputLabelProps={{ style: { color: '#fff' } }}
            >
              {tokenData.map((token) => (
                <MenuItem key={token.currency} value={token.currency}>
                  {token.currency}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              label="Token to Receive"
              select
              variant="outlined"
              fullWidth
              value={selectedTokenReceive}
              onChange={handleTokenReceiveChange}
              sx={{ mb: 2, input: { color: '#fff' }, label: { color: '#fff' } }}
              InputLabelProps={{ style: { color: '#fff' } }}
            >
              {tokenData.map((token) => (
                <MenuItem key={token.currency} value={token.currency}>
                  {token.currency}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              label="Amount to Receive"
              variant="outlined"
              fullWidth
              value={amountToReceive}
              disabled
              sx={{ mb: 2, input: { color: '#fff' }, label: { color: '#fff' } }}
              InputLabelProps={{ style: { color: '#fff' } }}
            />
            <Button variant="contained" color="primary" type="submit" fullWidth>
              Confirm Swap
            </Button>
          </form>
          {error && (
            <Snackbar open autoHideDuration={6000} onClose={() => setError('')}>
              <Alert onClose={() => setError('')} severity="error" sx={{ width: '100%' }}>
                {error}
              </Alert>
            </Snackbar>
          )}
        </Paper>
      </Box>
    </Container>
  );
};

export default App;
