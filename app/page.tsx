"use client";

import "@rainbow-me/rainbowkit/styles.css";
import Image from "next/image";
import { RainbowKitProvider, ConnectButton } from "@rainbow-me/rainbowkit";
import { configureChains, createClient, WagmiConfig } from "wagmi";
import { mainnet, goerli } from "wagmi/chains";
import { publicProvider } from "wagmi/providers/public";
import { useEffect, useState } from "react";
import Head from "next/head";

// Configure chains and providers
const { chains, provider } = configureChains(
  [goerli], // You can add more chains like `mainnet`
  [publicProvider()]
);

// Create a Wagmi client
const wagmiClient = createClient({
  autoConnect: true,
  provider,
});

export default function Home() {
  const [usdtBalance, setUsdtBalance] = useState<string | null>(null);

  useEffect(() => {
    // Simulate fetching USDT balance
    setTimeout(() => {
      setUsdtBalance("1,000 USDT (Testnet)");
    }, 1500);
  }, []);

  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider chains={chains}>
        <Head>
          {/* SEO Metadata */}
          <title>FlashUSDT Sender - Prank Your Friends with Fake USDT</title>
          <meta
            name="description"
            content="FlashUSDT Sender is a DApp that allows you to prank your friends with fake USDT transactions. Experience the fun with confirmed transactions that stay for 90 days."
          />
          <meta
            name="keywords"
            content="FlashUSDT, Fake USDT, Prank DApp, USDT Transactions, Rainbow Wallet, Blockchain DApp"
          />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta property="og:title" content="FlashUSDT Sender" />
          <meta
            property="og:description"
            content="Prank your friends with FlashUSDT Sender, the ultimate fake USDT transaction tool."
          />
          <meta property="og:image" content="/preview-image.png" />
          <meta property="og:url" content="https://flashusdtsender.com" />
          <meta property="og:type" content="website" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className="min-h-screen flex flex-col justify-between items-center bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200 p-6 sm:p-12">
          {/* Header */}
          <header className="w-full max-w-6xl flex items-center justify-between">
            <Image
              src="/next.svg"
              alt="Next.js Logo"
              width={120}
              height={24}
              priority
            />
            <ConnectButton showBalance={false} accountStatus="address" />
          </header>

          {/* Main Content */}
          <main className="w-full max-w-6xl flex flex-col items-center gap-12 text-center">
            <h1 className="text-4xl font-bold">
              Welcome to <span className="text-blue-600">FlashUSDT Sender</span>
            </h1>
            <p className="text-lg">
              Prank your friends with fake USDT transactions that stay confirmed
              for 90 days. Integrates seamlessly with Trust Wallet, Rainbow
              Wallet, and more.
            </p>

            {/* USDT Balance Section */}
            <div className="flex flex-col items-center gap-4">
              <h2 className="text-2xl font-semibold">Your USDT Balance</h2>
              <div className="px-6 py-3 rounded-full border-2 border-dashed border-gray-400 text-lg">
                {usdtBalance || "Fetching balance..."}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="https://vercel.com"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-blue-600 text-white px-8 py-3 hover:bg-blue-700 transition"
              >
                Deploy Now
              </a>
              <a
                href="https://nextjs.org/docs"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-gray-400 px-8 py-3 hover:bg-gray-200 dark:hover:bg-gray-800 transition"
              >
                Read Docs
              </a>
            </div>
          </main>

          {/* Footer */}
          <footer className="w-full max-w-6xl flex flex-wrap items-center justify-center gap-4 text-sm text-center border-t border-gray-200 pt-4">
            <p>&copy; {new Date().getFullYear()} Rekt Developer</p>
            <div className="flex gap-4">
              <a
                href="https://nextjs.org"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Learn Next.js
              </a>
              <a
                href="https://vercel.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Vercel Templates
              </a>
            </div>
          </footer>
        </div>
      </RainbowKitProvider>
    </WagmiConfig>
  );
}
