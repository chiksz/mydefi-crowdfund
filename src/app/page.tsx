'use client';

import { ThirdwebProvider, ConnectButton } from "thirdweb/react";
import { createThirdwebClient, getContract } from "thirdweb";
import { defineChain } from "thirdweb/chains";
import { useState } from "react";

const client = createThirdwebClient({
  clientId: "YOUR_CLIENT_ID_HERE",   // ← GANTI NANTI
});

const opnChain = defineChain(984);

const contractAddress = "0x9b77A1936C1C69a37706A3cb247c88251c771fB1";   // ← GANTI DENGAN FULL ADDRESS KAMU

const contract = getContract({
  client,
  chain: opnChain,
  address: contractAddress,
});

export default function OPNFund() {
  const [amount, setAmount] = useState("");

  return (
    <ThirdwebProvider>
      <div className="min-h-screen bg-gradient-to-br from-purple-950 via-black to-violet-950 text-white">
        <div className="max-w-2xl mx-auto p-8">
          <h1 className="text-6xl font-bold text-center mt-12 mb-4">OPN Fund</h1>
          <p className="text-xl text-center text-purple-300 mb-12">
            Crowdfunding Terdesentralisasi di OPN Chain
          </p>

          <div className="flex justify-center mb-8">
            <ConnectButton client={client} />
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-10">
            <h2 className="text-2xl font-semibold mb-6 text-center">Buat Donasi</h2>
            
            <input
              type="number"
              placeholder="Jumlah OPN (contoh: 10)"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="w-full bg-black/50 border border-purple-500 rounded-2xl px-6 py-5 text-xl mb-6 focus:outline-none"
            />

            <button 
              onClick={() => alert("Connect wallet dulu lalu klik tombol Donasi")}
              className="w-full bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-700 hover:to-violet-700 py-6 rounded-2xl text-2xl font-bold transition"
            >
              DONASI SEKARANG
            </button>

            <p className="text-center text-sm text-gray-400 mt-8">
              Contract Address: {contractAddress}
            </p>
          </div>
        </div>
      </div>
    </ThirdwebProvider>
  );
}