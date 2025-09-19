import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const PricingPage: React.FC = () => {
  const [isYearly, setIsYearly] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState('');
  const { user } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || null;
  const serviceName = location.state?.serviceName || null;
  const serviceId = location.state?.serviceId || null;

  const handlePlanSelect = (planId: string) => {
    setSelectedPlan(planId);
    navigate('/login', {
      state: {
        from: from,
        serviceName: serviceName,
        serviceId: serviceId,
        selectedPlan: planId
      }
    });
  };

  const plans = [
    {
      id: 'free',
      name: 'Free',
      price: { monthly: 0, yearly: 0 },
      description: 'Perfect for getting started',
      features: [
        '10 scraping requests per month',
        'Basic product upload',
        'Community support',
        'Standard processing speed'
      ],
      limitations: [
        'Limited to 10 requests/month',
        'Basic features only',
        'Community support only'
      ],
      popular: false,
      buttonText: 'Get Started Free',
      buttonVariant: 'outline' as const
    },
    {
      id: 'basic',
      name: 'Basic',
      price: { monthly: 9, yearly: 90 },
      description: 'Great for small businesses',
      features: [
        '100 scraping requests per month',
        'Advanced product upload',
        'Pack holder bundles',
        'Email support',
        'Priority processing'
      ],
      limitations: [
        'Limited to 100 requests/month',
        'No API access',
        'Basic analytics'
      ],
      popular: false,
      buttonText: 'Start Basic Plan',
      buttonVariant: 'primary' as const
    },
    {
      id: 'pro',
      name: 'Pro',
      price: { monthly: 29, yearly: 290 },
      description: 'Best for growing businesses',
      features: [
        '500 scraping requests per month',
        'All premium features',
        'Storytelling assistant',
        'API access',
        'Advanced analytics',
        'Priority support'
      ],
      limitations: [
        'Limited to 500 requests/month',
        'No white-label options'
      ],
      popular: true,
      buttonText: 'Start Pro Plan',
      buttonVariant: 'primary' as const
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      price: { monthly: 99, yearly: 990 },
      description: 'For large-scale operations',
      features: [
        'Unlimited scraping requests',
        'All premium features',
        'White-label solutions',
        'Custom integrations',
        'Dedicated account manager',
        '24/7 phone support'
      ],
      limitations: [],
      popular: false,
      buttonText: 'Contact Sales',
      buttonVariant: 'outline' as const
    }
  ];

  const getButtonClasses = (variant: 'primary' | 'outline') => {
    if (variant === 'primary') {
      return 'bg-primary text-white font-semibold py-3 px-8 rounded-lg hover:bg-primary/90 focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-all duration-200';
    }
    return 'bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-semibold py-3 px-8 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-all duration-200';
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
          <div className="max-w-7xl mx-auto">
            {/* Header Section */}
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                Simple, Transparent Pricing
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-8">
                Choose the plan that fits your needs. All plans include our core features with different usage limits.
              </p>

              {/* Redirect Message */}
              {from && serviceName && (
                <div className="mb-8 p-4 bg-primary/10 dark:bg-primary/20 border border-primary/30 rounded-lg max-w-2xl mx-auto">
                  <div className="flex items-center justify-center mb-2">
                    <span className="material-symbols-outlined text-primary mr-2">info</span>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      Sign up required to access {serviceName}
                    </h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300">
                    Choose a plan below to get started with Artisan AI and unlock {serviceName}.
                  </p>
                </div>
              )}

              {/* Billing Toggle */}
              <div className="flex items-center justify-center mb-8">
                <span className={`mr-3 ${!isYearly ? 'text-gray-900 dark:text-white font-semibold' : 'text-gray-600 dark:text-gray-400'}`}>
                  Monthly
                </span>
                <button
                  onClick={() => setIsYearly(!isYearly)}
                  className={`relative w-12 h-6 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 ${
                    isYearly ? 'bg-primary' : 'bg-gray-300 dark:bg-gray-600'
                  }`}
                >
                  <div
                    className={`absolute top-1 w-4 h-4 bg-white rounded-full shadow-md transform transition-transform ${
                      isYearly ? 'translate-x-7' : 'translate-x-1'
                    }`}
                  />
                </button>
                <span className={`ml-3 ${isYearly ? 'text-gray-900 dark:text-white font-semibold' : 'text-gray-600 dark:text-gray-400'}`}>
                  Yearly
                  <span className="ml-2 px-2 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-xs rounded-full">
                    Save 20%
                  </span>
                </span>
              </div>
            </div>

            {/* Pricing Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              {plans.map((plan) => (
                <div
                  key={plan.id}
                  className={`glass rounded-2xl p-6 border backdrop-blur-sm relative ${
                    plan.popular
                      ? 'border-primary/40 ring-2 ring-primary/20'
                      : 'border-primary/20'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-primary text-white px-4 py-1 rounded-full text-sm font-medium">
                        Most Popular
                      </span>
                    </div>
                  )}

                  <div className="text-center mb-6">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      {plan.name}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                      {plan.description}
                    </p>
                    <div className="mb-4">
                      <span className="text-3xl font-bold text-gray-900 dark:text-white">
                        ${isYearly ? plan.price.yearly : plan.price.monthly}
                      </span>
                      <span className="text-gray-600 dark:text-gray-400">
                        /{isYearly ? 'year' : 'month'}
                      </span>
                    </div>
                  </div>

                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                        <span className="material-symbols-outlined text-primary text-sm mr-2">check_circle</span>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {plan.limitations.length > 0 && (
                    <div className="mb-6">
                      <p className="text-xs text-gray-500 dark:text-gray-500 mb-2 font-medium">Limitations:</p>
                      <ul className="space-y-1">
                        {plan.limitations.map((limitation, index) => (
                          <li key={index} className="flex items-center text-xs text-gray-500 dark:text-gray-500">
                            <span className="material-symbols-outlined text-gray-400 text-xs mr-1">info</span>
                            {limitation}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <button
                    onClick={() => handlePlanSelect(plan.id)}
                    className={`w-full ${getButtonClasses(plan.buttonVariant)}`}
                  >
                    {plan.buttonText}
                  </button>
                </div>
              ))}
            </div>

            {/* FAQ Section */}
            <div className="glass rounded-2xl p-8 border border-primary/20 backdrop-blur-sm">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
                Frequently Asked Questions
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                    Can I change plans anytime?
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                    What happens if I exceed my limit?
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    You'll be notified and can either upgrade your plan or purchase additional credits.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                    Is there a free trial?
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Yes! Our Free plan gives you 10 requests to try all features before upgrading.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                    Do you offer refunds?
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    We offer a 30-day money-back guarantee for all paid plans.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default PricingPage;