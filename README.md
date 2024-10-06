## Project Structure

- `program/`: Contains the Solana smart contract code
- `app/`: Frontend application using React and Next.js
- `tests/`: Contains tests for the Solana program

## How to Run

1. Install dependencies:
   ```
   cd app
   npm install
   ```

2. Run the frontend application:
   ```
   npm run dev
   ```

## Smart Contract Development

1. Install Solana CLI and Rust
2. Compile the program:
   ```
   cd program
   cargo build-bpf
   ```

3. Deploy the program to Solana devnet:
   ```
   solana program deploy target/deploy/prediction_market.so
   ```

## Contribution

Please create a pull request to contribute to this project.

## License

MIT
