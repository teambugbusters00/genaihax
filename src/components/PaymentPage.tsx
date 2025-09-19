import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const PaymentPage: React.FC = () => {
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [isProcessing, setIsProcessing] = useState(false);
  const [cardDetails, setCardDetails] = useState({
    number: '',
    expiry: '',
    cvc: '',
    name: ''
  });

  const { user, updateCredits } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const selectedPlan = location.state?.selectedPlan || 'basic';
  const from = location.state?.from?.pathname || null;
  const serviceName = location.state?.serviceName || null;

  const plans = [
    { id: 'basic', name: 'Basic', price: 9, credits: 100 },
    { id: 'pro', name: 'Pro', price: 29, credits: 500 },
    { id: 'enterprise', name: 'Enterprise', price: 99, credits: -1 } // -1 means unlimited
  ];

  const selectedPlanData = plans.find(p => p.id === selectedPlan);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);

    // Simulate payment processing
    await new Promise(resolve => setTimeout(resolve, 2000));

    // Update user credits
    if (selectedPlanData && selectedPlanData.credits > 0) {
      updateCredits(selectedPlanData.credits);
    }

    setIsProcessing(false);

    // Redirect to payment confirmation page
    navigate('/payment-confirmation', {
      state: {
        selectedPlan: selectedPlan,
        paymentMethod: paymentMethod,
        amount: selectedPlanData?.price,
        from: from,
        serviceName: serviceName
      }
    });
  };

  const handleCardInputChange = (field: string, value: string) => {
    setCardDetails(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <div className="bg-gradient-to-br from-background-light via-primary-light/30 to-primary/20 dark:from-background-dark dark:via-primary-dark/20 dark:to-primary/10 font-display text-gray-900 dark:text-gray-100 min-h-screen relative overflow-hidden">
      <div className="flex flex-col min-h-screen relative overflow-hidden">
        {/* Background particles */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-primary/30 rounded-full animate-float blur-sm"></div>
          <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-primary/50 rounded-full animate-float" style={{animationDelay: '1s'}}></div>
          <div className="absolute bottom-1/4 left-1/2 w-2.5 h-2.5 bg-primary/40 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
        </div>

        <header className="relative z-10 p-4">
          <Link to="/" className="flex items-center text-primary hover:text-primary/80 transition-colors">
            <span className="material-symbols-outlined mr-2">arrow_back</span>
            Back to Home
          </Link>
        </header>

        <main className="flex-grow p-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                Complete Your Purchase
              </h1>
              <p className="text-gray-600 dark:text-gray-400">
                Secure payment processing powered by Stripe
              </p>

              {/* Redirect Message */}
              {from && (
                <div className="mt-4 p-3 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg max-w-2xl mx-auto">
                  <div className="flex items-center justify-center mb-1">
                    <span className="material-symbols-outlined text-green-600 mr-2">check_circle</span>
                    <h3 className="text-lg font-semibold text-green-800 dark:text-green-200">
                      Ready to unlock Artisan AI features!
                    </h3>
                  </div>
                  <p className="text-green-700 dark:text-green-300 text-sm">
                    Complete your payment to start using all services immediately.
                  </p>
                </div>
              )}
            </div>

            <div className="max-w-2xl mx-auto">
              {/* Payment Form */}
              <div className="glass rounded-2xl p-6 border border-primary/20 backdrop-blur-sm">
                <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  Payment Details
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Payment Method Selection */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                      Payment Method
                    </label>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                      <button
                        type="button"
                        onClick={() => setPaymentMethod('card')}
                        className={`p-3 rounded-lg border text-center transition-all ${
                          paymentMethod === 'card'
                            ? 'border-primary bg-primary/5'
                            : 'border-gray-300 dark:border-gray-600 hover:border-primary/50'
                        }`}
                      >
                        <span className="material-symbols-outlined text-2xl mb-1 block">credit_card</span>
                        <span className="text-sm">Credit/Debit Card</span>
                      </button>
                      <button
                        type="button"
                        onClick={() => setPaymentMethod('upi')}
                        className={`p-3 rounded-lg border text-center transition-all ${
                          paymentMethod === 'upi'
                            ? 'border-primary bg-primary/5'
                            : 'border-gray-300 dark:border-gray-600 hover:border-primary/50'
                        }`}
                      >
                        <span className="material-symbols-outlined text-2xl mb-1 block">qr_code</span>
                        <span className="text-sm">UPI</span>
                      </button>
                      <button
                        type="button"
                        onClick={() => setPaymentMethod('netbanking')}
                        className={`p-3 rounded-lg border text-center transition-all ${
                          paymentMethod === 'netbanking'
                            ? 'border-primary bg-primary/5'
                            : 'border-gray-300 dark:border-gray-600 hover:border-primary/50'
                        }`}
                      >
                        <span className="material-symbols-outlined text-2xl mb-1 block">account_balance</span>
                        <span className="text-sm">Net Banking</span>
                      </button>
                      <button
                        type="button"
                        onClick={() => setPaymentMethod('paypal')}
                        className={`p-3 rounded-lg border text-center transition-all ${
                          paymentMethod === 'paypal'
                            ? 'border-primary bg-primary/5'
                            : 'border-gray-300 dark:border-gray-600 hover:border-primary/50'
                        }`}
                      >
                        <span className="material-symbols-outlined text-2xl mb-1 block">account_balance_wallet</span>
                        <span className="text-sm">PayPal</span>
                      </button>
                      <button
                        type="button"
                        onClick={() => setPaymentMethod('wallet')}
                        className={`p-3 rounded-lg border text-center transition-all ${
                          paymentMethod === 'wallet'
                            ? 'border-primary bg-primary/5'
                            : 'border-gray-300 dark:border-gray-600 hover:border-primary/50'
                        }`}
                      >
                        <span className="material-symbols-outlined text-2xl mb-1 block">wallet</span>
                        <span className="text-sm">Wallet</span>
                      </button>
                      <button
                        type="button"
                        onClick={() => setPaymentMethod('crypto')}
                        className={`p-3 rounded-lg border text-center transition-all ${
                          paymentMethod === 'crypto'
                            ? 'border-primary bg-primary/5'
                            : 'border-gray-300 dark:border-gray-600 hover:border-primary/50'
                        }`}
                      >
                        <span className="material-symbols-outlined text-2xl mb-1 block">currency_bitcoin</span>
                        <span className="text-sm">Crypto</span>
                      </button>
                    </div>
                  </div>

                  {paymentMethod === 'card' && (
                    <>
                      <div>
                        <label htmlFor="cardName" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          Cardholder Name
                        </label>
                        <input
                          type="text"
                          id="cardName"
                          value={cardDetails.name}
                          onChange={(e) => handleCardInputChange('name', e.target.value)}
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                          placeholder="John Doe"
                          required
                        />
                      </div>

                      <div>
                        <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          Card Number
                        </label>
                        <input
                          type="text"
                          id="cardNumber"
                          value={cardDetails.number}
                          onChange={(e) => handleCardInputChange('number', e.target.value)}
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                          placeholder="1234 5678 9012 3456"
                          required
                        />
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="expiry" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                            Expiry Date
                          </label>
                          <input
                            type="text"
                            id="expiry"
                            value={cardDetails.expiry}
                            onChange={(e) => handleCardInputChange('expiry', e.target.value)}
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                            placeholder="MM/YY"
                            required
                          />
                        </div>
                        <div>
                          <label htmlFor="cvc" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                            CVC
                          </label>
                          <input
                            type="text"
                            id="cvc"
                            value={cardDetails.cvc}
                            onChange={(e) => handleCardInputChange('cvc', e.target.value)}
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                            placeholder="123"
                            required
                          />
                        </div>
                      </div>
                    </>
                  )}

                  {paymentMethod === 'upi' && (
                    <div>
                      <label htmlFor="upiId" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        UPI ID
                      </label>
                      <input
                        type="text"
                        id="upiId"
                        value={cardDetails.name}
                        onChange={(e) => handleCardInputChange('name', e.target.value)}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                        placeholder="yourname@paytm / yourname@phonepe"
                        required
                      />
                      <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                        Enter your UPI ID (e.g., john@paytm or 9876543210@paytm)
                      </p>
                    </div>
                  )}

                  {paymentMethod === 'netbanking' && (
                    <div>
                      <label htmlFor="bank" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Select Bank
                      </label>
                      <select
                        id="bank"
                        value={cardDetails.name}
                        onChange={(e) => handleCardInputChange('name', e.target.value)}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                        required
                      >
                        <option value="">Select your bank</option>
                        <option value="sbi">State Bank of India</option>
                        <option value="hdfc">HDFC Bank</option>
                        <option value="icici">ICICI Bank</option>
                        <option value="axis">Axis Bank</option>
                        <option value="pnb">Punjab National Bank</option>
                        <option value="kotak">Kotak Mahindra Bank</option>
                        <option value="other">Other Bank</option>
                      </select>
                      <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                        You'll be redirected to your bank's secure login page
                      </p>
                    </div>
                  )}

                  {paymentMethod === 'wallet' && (
                    <div>
                      <label htmlFor="wallet" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Select Wallet
                      </label>
                      <select
                        id="wallet"
                        value={cardDetails.name}
                        onChange={(e) => handleCardInputChange('name', e.target.value)}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                        required
                      >
                        <option value="">Select wallet</option>
                        <option value="paytm">Paytm</option>
                        <option value="phonepe">PhonePe</option>
                        <option value="gpay">Google Pay</option>
                        <option value="amazonpay">Amazon Pay</option>
                        <option value="mobikwik">MobiKwik</option>
                        <option value="freecharge">FreeCharge</option>
                      </select>
                      <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                        You'll be redirected to your wallet app
                      </p>
                    </div>
                  )}

                  {paymentMethod === 'crypto' && (
                    <div>
                      <label htmlFor="crypto" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Select Cryptocurrency
                      </label>
                      <select
                        id="crypto"
                        value={cardDetails.name}
                        onChange={(e) => handleCardInputChange('name', e.target.value)}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                        required
                      >
                        <option value="">Select cryptocurrency</option>
                        <option value="btc">Bitcoin (BTC)</option>
                        <option value="eth">Ethereum (ETH)</option>
                        <option value="usdt">Tether (USDT)</option>
                        <option value="bnb">Binance Coin (BNB)</option>
                        <option value="usdc">USD Coin (USDC)</option>
                      </select>
                      <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                        You'll be redirected to our crypto payment processor
                      </p>
                    </div>
                  )}

                  {paymentMethod === 'paypal' && (
                    <div className="text-center py-8">
                      <div className="mb-4">
                        <span className="material-symbols-outlined text-6xl text-blue-600">account_balance_wallet</span>
                      </div>
                      <p className="text-gray-600 dark:text-gray-400 mb-4">
                        You'll be redirected to PayPal to complete your payment securely.
                      </p>
                    </div>
                  )}

                  {/* Order Summary */}
                  <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-600 dark:text-gray-400">Subtotal</span>
                      <span className="font-semibold">${selectedPlanData?.price}</span>
                    </div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-600 dark:text-gray-400">Tax</span>
                      <span className="font-semibold">$0.00</span>
                    </div>
                    <div className="flex justify-between items-center text-lg font-bold">
                      <span className="text-gray-900 dark:text-white">Total</span>
                      <span className="text-primary">${selectedPlanData?.price}</span>
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isProcessing}
                    className="w-full bg-primary text-white font-semibold py-3 px-4 rounded-lg hover:bg-primary/90 focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isProcessing ? (
                      <>
                        <span className="material-symbols-outlined animate-spin mr-2">refresh</span>
                        Processing...
                      </>
                    ) : (
                      `Pay $${selectedPlanData?.price}`
                    )}
                  </button>
                </form>
              </div>
            </div>

            {/* Security Notice */}
            <div className="mt-8 text-center">
              <div className="inline-flex items-center text-sm text-gray-600 dark:text-gray-400">
                <span className="material-symbols-outlined mr-2">lock</span>
                Your payment information is encrypted and secure
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default PaymentPage;