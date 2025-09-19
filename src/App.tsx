import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import PackHolderPage from './components/PackHolderPage';
import ProductUploadPage from './components/ProductUploadPage';
import ScrapingDetailPage from './components/ScrapingDetailPage';
import QuickScrapeModal from './components/QuickScrapeModal';
import StorytellingAssistantPage from './components/StorytellingAssistantPage';
import ContactUsPage from './components/ContactUsPage';
import LoginPage from './components/LoginPage';
import SignupPage from './components/SignupPage';
import ServicesPage from './components/ServicesPage';
import PricingPage from './components/PricingPage';
import PaymentPage from './components/PaymentPage';
import PaymentConfirmationPage from './components/PaymentConfirmationPage';
import Header from './components/Header';
import ThemeToggle from './components/ThemeToggle';
import Navigation from './components/Navigation';
import FlipBubble from './components/FlipBubble';
import ProtectedRoute from './components/ProtectedRoute';
import './App.css';

function App() {
  return (
    <>
      <ThemeToggle />
      <Header />
      <Navigation />
      <FlipBubble />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/upload" element={
          <ProtectedRoute>
            <ProductUploadPage />
          </ProtectedRoute>
        } />
        <Route path="/quick-scrape" element={
          <ProtectedRoute>
            <QuickScrapeModal />
          </ProtectedRoute>
        } />
        <Route path="/scraping-detail" element={
          <ProtectedRoute>
            <ScrapingDetailPage />
          </ProtectedRoute>
        } />
        <Route path="/storytelling" element={
          <ProtectedRoute>
            <StorytellingAssistantPage />
          </ProtectedRoute>
        } />
        <Route path="/packs" element={
          <ProtectedRoute>
            <PackHolderPage />
          </ProtectedRoute>
        } />
        <Route path="/contact" element={<ContactUsPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/payment" element={<PaymentPage />} />
        <Route path="/payment-confirmation" element={<PaymentConfirmationPage />} />
      </Routes>
    </>
  );
}

export default App;
