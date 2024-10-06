import { Connection, PublicKey } from '@solana/web3.js';

export const SOLANA_NETWORK = 'devnet';
export const PROGRAM_ID = new PublicKey('YOUR_PROGRAM_ID_HERE');

export const getConnection = () => {
  return new Connection(SOLANA_NETWORK);
};

// Tambahkan fungsi-fungsi utilitas lainnya di sini