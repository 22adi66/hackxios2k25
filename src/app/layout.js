import './globals.css';

export const metadata = {
  title: 'FarmGuard AI | Offline Crop Disease Detector',
  description: 'Edge AI-powered crop disease detection that works 100% offline. Protect your crops with neural network technology running directly in your browser.',
  keywords: 'crop disease, AI, offline, agriculture, farming, neural network, edge AI',
  authors: [{ name: 'FarmGuard Team' }],
  manifest: '/manifest.json',
  themeColor: '#39FF14',
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;600&display=swap" 
          rel="stylesheet" 
        />
      </head>
      <body className="min-h-screen bg-cyber-black text-white antialiased">
        <div className="grid-bg min-h-screen">
          {children}
        </div>
      </body>
    </html>
  );
}
