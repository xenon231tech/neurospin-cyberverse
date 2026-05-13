import { motion } from "framer-motion";
import { Trophy, Gift, Coins } from "lucide-react";

export default function App() {
  return (
    <main className="app">

      <div className="bg-glow"></div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="hero"
      >

        <h1>NEURO SPIN</h1>

        <p>
          Cyberpunk spin-to-earn universe for NFTs,
          mystery boxes, and Farcaster mini apps.
        </p>

        <button>
          PLAY NOW
        </button>

        <div className="cards">

          <div className="card">
            <Gift size={34} />
            <span>Mystery Box</span>
          </div>

          <div className="card">
            <Coins size={34} />
            <span>Spin Rewards</span>
          </div>

          <div className="card">
            <Trophy size={34} />
            <span>Leaderboard</span>
          </div>

        </div>

      </motion.div>

    </main>
  );
}
