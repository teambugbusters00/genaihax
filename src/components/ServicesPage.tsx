import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const ServicesPage: React.FC = () => {
  const navigate = useNavigate();

  const handleTryNow = (service: any) => {
    navigate('/pricing', {
      state: {
        from: service.path,
        serviceName: service.title,
        serviceId: service.id
      }
    });
  };

  const services = [
    {
      id: 1,
      title: 'Quick Scrape',
      description: 'Instantly extract product data from any website with our lightning-fast scraping technology. Get structured data in seconds.',
      icon: 'flash_on',
      features: ['Instant results', 'Multiple formats', 'Real-time processing', 'API access'],
      path: '/quick-scrape'
    },
    {
      id: 2,
      title: 'Product Upload',
      description: 'Seamlessly upload and manage your product catalog. Our intelligent system organizes and optimizes your inventory.',
      icon: 'cloud_upload',
      features: ['Bulk upload', 'Auto-categorization', 'Image optimization', 'Inventory sync'],
      path: '/product-upload'
    },
    {
      id: 3,
      title: 'Pack Holder',
      description: 'Create and manage product bundles with ease. Combine related items and boost your sales with smart bundling.',
      icon: 'package_2',
      features: ['Bundle creation', 'Price optimization', 'Cross-sell suggestions', 'Analytics'],
      path: '/pack-holder'
    },
    {
      id: 4,
      title: 'Scraping Details',
      description: 'Get comprehensive product information with detailed scraping. Extract specifications, reviews, and more.',
      icon: 'search',
      features: ['Deep scraping', 'Review extraction', 'Specification parsing', 'Competitor analysis'],
      path: '/scraping-details'
    },
    {
      id: 5,
      title: 'Storytelling Assistant',
      description: 'Create compelling product descriptions and marketing copy with AI-powered storytelling assistance.',
      icon: 'auto_stories',
      features: ['AI copywriting', 'SEO optimization', 'Multiple languages', 'Brand voice matching'],
      path: '/storytelling'
    },
    {
      id: 6,
      title: 'Analytics Dashboard',
      description: 'Track your scraping activities, monitor performance, and gain insights with comprehensive analytics.',
      icon: 'analytics',
      features: ['Performance metrics', 'Usage tracking', 'Cost analysis', 'Custom reports'],
      path: '/analytics'
    }
  ];

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
                Our Services
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                Discover our comprehensive suite of AI-powered tools designed to streamline your e-commerce operations and boost your productivity.
              </p>
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {services.map((service) => (
                <div
                  key={service.id}
                  className="glass rounded-2xl p-6 border border-primary/20 backdrop-blur-sm hover:border-primary/40 transition-all duration-300 group"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4 group-hover:bg-primary/20 transition-colors">
                      <span className="material-symbols-outlined text-primary text-2xl">
                        {service.icon}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      {service.title}
                    </h3>
                  </div>

                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {service.description}
                  </p>

                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                        <span className="material-symbols-outlined text-primary text-sm mr-2">check_circle</span>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <button
                    onClick={() => handleTryNow(service)}
                    className="inline-flex items-center text-primary hover:text-primary/80 font-medium transition-colors"
                  >
                    Try it now
                    <span className="material-symbols-outlined ml-1">arrow_forward</span>
                  </button>
                </div>
              ))}
            </div>

            {/* Call to Action Section */}
            <div className="glass rounded-2xl p-8 border border-primary/20 backdrop-blur-sm text-center">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Ready to Get Started?
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
                Join thousands of businesses already using Artisan AI to streamline their operations and boost their productivity.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/signup"
                  className="bg-primary text-white font-semibold py-3 px-8 rounded-lg hover:bg-primary/90 focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-all duration-200"
                >
                  Start Free Trial
                </Link>
                <Link
                  to="/pricing"
                  className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-semibold py-3 px-8 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-all duration-200"
                >
                  View Pricing
                </Link>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default ServicesPage;