import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const PaymentConfirmationPage: React.FC = () => {
  const { user } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const selectedPlan = location.state?.selectedPlan || 'basic';
  const paymentMethod = location.state?.paymentMethod || 'card';
  const amount = location.state?.amount || 0;

  const plans = [
    { id: 'basic', name: 'Basic', price: 9, credits: 100 },
    { id: 'pro', name: 'Pro', price: 29, credits: 500 },
    { id: 'enterprise', name: 'Enterprise', price: 99, credits: -1 }
  ];

  const selectedPlanData = plans.find(p => p.id === selectedPlan);

  const getPaymentMethodName = (method: string) => {
    const methods: { [key: string]: string } = {
      'card': 'Credit/Debit Card',
      'upi': 'UPI',
      'netbanking': 'Net Banking',
      'paypal': 'PayPal',
      'wallet': 'Digital Wallet',
      'crypto': 'Cryptocurrency'
    };
    return methods[method] || method;
  };

  const handleStartUsing = () => {
    navigate('/');
  };

  return (
    <div className="bg-gradient-to-br from-background-light via-primary-light/30 to-primary/20 dark:from-background-dark dark:via-primary-dark/20 dark:to-primary/10 font-display text-gray-900 dark:text-gray-100 min-h-screen relative overflow-hidden">
      <div className="flex flex-col min-h-screen relative overflow-hidden">
        {/* Background particles */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-green-400/30 rounded-full animate-float blur-sm"></div>
          <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-green-500/50 rounded-full animate-float" style={{animationDelay: '1s'}}></div>
          <div className="absolute bottom-1/4 left-1/2 w-2.5 h-2.5 bg-green-400/40 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
        </div>

        <header className="relative z-10 p-4">
          <Link to="/" className="flex items-center text-primary hover:text-primary/80 transition-colors">
            <span className="material-symbols-outlined mr-2">arrow_back</span>
            Back to Home
          </Link>
        </header>

        <main className="flex-grow flex items-center justify-center p-4 relative z-10">
          <div className="w-full max-w-2xl">
            <div className="glass rounded-2xl p-8 border border-green-200 dark:border-green-800 backdrop-blur-sm">
              {/* Success Animation */}
              <div className="text-center mb-8">
                <div className="mb-6">
                  <div className="w-20 h-20 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
                    <span className="material-symbols-outlined text-6xl text-green-600 dark:text-green-400">check_circle</span>
                  </div>
                  <h1 className="text-3xl font-bold text-green-800 dark:text-green-200 mb-2">
                    Payment Successful!
                  </h1>
                  <p className="text-green-700 dark:text-green-300">
                    Your payment has been processed successfully
                  </p>
                </div>
              </div>

              {/* Order Details */}
              <div className="bg-green-50 dark:bg-green-900/20 rounded-xl p-6 mb-6 border border-green-200 dark:border-green-800">
                <h2 className="text-xl font-bold text-green-800 dark:text-green-200 mb-4">
                  Order Summary
                </h2>

                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-green-700 dark:text-green-300">Plan</span>
                    <span className="font-semibold text-green-800 dark:text-green-200">
                      {selectedPlanData?.name}
                    </span>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-green-700 dark:text-green-300">Payment Method</span>
                    <span className="font-semibold text-green-800 dark:text-green-200">
                      {getPaymentMethodName(paymentMethod)}
                    </span>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-green-700 dark:text-green-300">Amount Paid</span>
                    <span className="font-bold text-green-800 dark:text-green-200">
                      ${amount || selectedPlanData?.price}
                    </span>
                  </div>

                  {selectedPlanData && selectedPlanData.credits > 0 && (
                    <div className="flex justify-between items-center">
                      <span className="text-green-700 dark:text-green-300">Credits Added</span>
                      <span className="font-semibold text-green-800 dark:text-green-200">
                        {selectedPlanData.credits} credits
                      </span>
                    </div>
                  )}

                  {selectedPlanData && selectedPlanData.credits === -1 && (
                    <div className="flex justify-between items-center">
                      <span className="text-green-700 dark:text-green-300">Credits Added</span>
                      <span className="font-semibold text-green-800 dark:text-green-200">
                        Unlimited credits
                      </span>
                    </div>
                  )}
                </div>
              </div>

              {/* What's Next */}
              <div className="text-center mb-8">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
                  What's Next?
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                  <div className="flex flex-col items-center">
                    <span className="material-symbols-outlined text-2xl text-primary mb-2">upload</span>
                    <span className="text-gray-600 dark:text-gray-400">Upload Products</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <span className="material-symbols-outlined text-2xl text-primary mb-2">document_scanner</span>
                    <span className="text-gray-600 dark:text-gray-400">Start Scraping</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <span className="material-symbols-outlined text-2xl text-primary mb-2">auto_stories</span>
                    <span className="text-gray-600 dark:text-gray-400">AI Storytelling</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={handleStartUsing}
                  className="flex-1 bg-primary text-white font-semibold py-3 px-6 rounded-lg hover:bg-primary/90 focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-all duration-200"
                >
                  <span className="material-symbols-outlined mr-2">rocket_launch</span>
                  Start Using Artisan AI
                </button>
                <Link
                  to="/contact"
                  className="flex-1 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-semibold py-3 px-6 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-all duration-200 text-center"
                >
                  <span className="material-symbols-outlined mr-2">support</span>
                  Need Help?
                </Link>
              </div>

              {/* Transaction ID */}
              <div className="mt-6 text-center">
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  Transaction ID: {Math.random().toString(36).substr(2, 9).toUpperCase()}
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                  A receipt has been sent to your email address
                </p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default PaymentConfirmationPage;

// Export empty object to make this a module
export {};