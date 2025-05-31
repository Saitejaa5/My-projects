import React from 'react';
import ChatInterface from './components/ChatInterface';
import { HealthProvider } from './context/HealthContext';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <HealthProvider>
      <div className="flex flex-col min-h-screen bg-gray-50">
        <Header />
        <main className="flex-grow container mx-auto px-4 py-6 sm:px-6 md:py-8">
          <ChatInterface />
        </main>
        <Footer />
      </div>
    </HealthProvider>
  );
}

export default App;