import React from 'react';
import MarketList from '../components/MarketList';

const Home: React.FC = () => {
  return (
    <div>
      <h1>Solana Prediction Market</h1>
      <MarketList />
    </div>
  );
};

export default Home;