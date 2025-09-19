import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const HomePage: React.FC = () => {
  const navigate = useNavigate();

  const handleServiceAccess = (servicePath: string, serviceName: string, serviceId: number) => {
    navigate('/pricing', {
      state: {
        from: servicePath,
        serviceName: serviceName,
        serviceId: serviceId
      }
    });
  };

  return (
    <div className="bg-gradient-to-br from-background-light via-primary-light/30 to-primary/20 dark:from-background-dark dark:via-primary-dark/20 dark:to-primary/10 font-display text-gray-900 dark:text-gray-100 min-h-screen relative overflow-hidden">
      <div className="flex flex-col min-h-screen relative overflow-hidden">
        {/* Enhanced Animated background particles */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Main floating particles */}
          <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-primary/30 rounded-full animate-float blur-sm"></div>
          <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-primary/50 rounded-full animate-float" style={{animationDelay: '1s'}}></div>
          <div className="absolute bottom-1/4 left-1/2 w-2.5 h-2.5 bg-primary/40 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
          <div className="absolute top-1/2 right-1/4 w-1.5 h-1.5 bg-primary/60 rounded-full animate-float" style={{animationDelay: '0.5s'}}></div>

          {/* Additional advanced particles */}
          <div className="absolute top-1/6 left-1/3 w-1 h-1 bg-pink-400/40 rounded-full animate-morph"></div>
          <div className="absolute bottom-1/3 right-1/6 w-2 h-2 bg-rose-400/30 rounded-full animate-float" style={{animationDelay: '3s'}}></div>
          <div className="absolute top-2/3 left-1/6 w-1.5 h-1.5 bg-rose-400/35 rounded-full animate-pulse" style={{animationDelay: '1.5s'}}></div>

          {/* Geometric shapes */}
          <div className="absolute top-1/5 right-1/5 w-1 h-4 bg-gradient-to-b from-primary/20 to-transparent rotate-12 animate-float" style={{animationDelay: '2.5s'}}></div>
          <div className="absolute bottom-1/5 left-1/4 w-3 h-1 bg-gradient-to-r from-pink-400/25 to-transparent animate-shimmer"></div>
        </div>

        <header className="relative flex items-center justify-center h-[60vh] min-h-[400px] bg-cover bg-center animate-fade-in" style={{backgroundImage: 'linear-gradient(rgba(16, 28, 34, 0.7) 0%, rgba(16, 28, 34, 0.9) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuDmm9Ki0eU3YPVY-0IZN8_hak-YOf4YeYGWdA-PUu5F93Pvh2Zz0PW7aMEep8lrSBatkC9m5pFwcq_pEP7eK8_MEYYj4Old-t-jGExs5dEirrTdMVzLq-n3AylYTj8wp9ZN8OcUArBOyOBirG1b2i0iEi9Fl-LoO_0rYSU-4-dZ5p4jrtaWnkJ5OmYkWAjafBYhbGmJcke1uDEMA6F0rM1RB61mMzwo85NgwTdVqQhoMy2hrHHx1IUaKAdeSQ4ZqMbLyWMnClqLxrE")'}}>
          <div className="text-center px-4 animate-slide-up">
            <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tighter animate-glow bg-gradient-to-r from-white via-yellow-100 to-white bg-clip-text text-transparent drop-shadow-lg">
              Crafting the Future of Handmade Goods
            </h1>
            <p className="mt-6 max-w-2xl mx-auto text-xl text-gray-200 leading-relaxed">
              Empowering artisans with AI to showcase and sell their unique creations in a global marketplace.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link to="/upload" className="group w-full sm:w-auto flex items-center justify-center px-8 py-4 rounded-xl bg-primary text-white font-semibold shadow-2xl hover:shadow-primary/50 transition-all duration-300 transform hover:scale-105 animate-glow">
                <span className="material-symbols-outlined mr-3 group-hover:animate-bounce">upload</span>
                Upload Product
              </Link>
              <Link to="/quick-scrape" className="group w-full sm:w-auto flex items-center justify-center px-8 py-4 rounded-xl glass text-white font-semibold backdrop-blur-md border border-white/30 hover:bg-white/10 transition-all duration-300 transform hover:scale-105">
                <span className="material-symbols-outlined mr-3 group-hover:animate-pulse">document_scanner</span>
                Start Scrape
              </Link>
              <Link to="/contact" className="group w-full sm:w-auto flex items-center justify-center px-8 py-4 rounded-xl glass text-white font-semibold backdrop-blur-md border border-white/30 hover:bg-white/10 transition-all duration-300 transform hover:scale-105">
                <span className="material-symbols-outlined mr-3 group-hover:animate-pulse">feedback</span>
                Feedback
              </Link>
            </div>
          </div>
        </header>
        <main className="flex-grow p-4 md:p-8 relative">
          <div className="max-w-6xl mx-auto">
            {/* About Us Section */}
            <section className="mb-16">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">About Artisan AI</h2>
                <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                  We're on a mission to empower artisans and handmade creators worldwide by bridging the gap between traditional craftsmanship and modern digital commerce.
                </p>
              </div>

              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                <div className="p-6 bg-white/5 dark:bg-background-dark/50 rounded-xl border border-primary/20 backdrop-blur-lg">
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary/10 text-primary mb-4">
                    <span className="material-symbols-outlined text-3xl">handshake</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Our Mission</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    To democratize access to professional e-commerce tools for artisans, helping them compete in the digital marketplace while preserving the authenticity of handmade goods.
                  </p>
                </div>

                <div className="p-6 bg-white/5 dark:bg-background-dark/50 rounded-xl border border-primary/20 backdrop-blur-lg">
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary/10 text-primary mb-4">
                    <span className="material-symbols-outlined text-3xl">verified</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Why Trust Us</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Built by a team of former Etsy sellers and AI researchers who understand both the challenges of selling handmade goods and the power of artificial intelligence.
                  </p>
                </div>

                <div className="p-6 bg-white/5 dark:bg-background-dark/50 rounded-xl border border-primary/20 backdrop-blur-lg">
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary/10 text-primary mb-4">
                    <span className="material-symbols-outlined text-3xl">security</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Your Security</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    We prioritize your data security and privacy. All AI processing happens securely, and we never store your personal information or product data.
                  </p>
                </div>
              </div>
            </section>

            {/* Services Section */}
            <section className="mb-16">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Our Services</h2>
                <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                  Comprehensive AI-powered solutions designed specifically for handmade sellers and artisans.
                </p>
              </div>

              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                <div className="p-6 bg-white/5 dark:bg-background-dark/50 rounded-xl border border-primary/20 backdrop-blur-lg">
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary/10 text-primary mb-4">
                    <span className="material-symbols-outlined text-3xl">document_scanner</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Smart Product Scraping</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    Automatically extract product information from any online source, saving hours of manual data entry.
                  </p>
                  <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                    <li>• Extract titles, descriptions, and prices</li>
                    <li>• Import product images automatically</li>
                    <li>• Support for multiple marketplaces</li>
                  </ul>
                </div>

                <div className="p-6 bg-white/5 dark:bg-background-dark/50 rounded-xl border border-primary/20 backdrop-blur-lg">
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary/10 text-primary mb-4">
                    <span className="material-symbols-outlined text-3xl">auto_awesome</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">AI Content Generation</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    Create compelling product descriptions and marketing copy that tells your unique story.
                  </p>
                  <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                    <li>• SEO-optimized product descriptions</li>
                    <li>• Social media content creation</li>
                    <li>• Multiple language support</li>
                  </ul>
                </div>

                <div className="p-6 bg-white/5 dark:bg-background-dark/50 rounded-xl border border-primary/20 backdrop-blur-lg">
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary/10 text-primary mb-4">
                    <span className="material-symbols-outlined text-3xl">photo_filter</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Visual Enhancement</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    Professional-grade image editing and enhancement powered by advanced AI algorithms.
                  </p>
                  <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                    <li>• Background removal</li>
                    <li>• Image quality enhancement</li>
                    <li>• Consistent styling across listings</li>
                  </ul>
                </div>

                <div className="p-6 bg-white/5 dark:bg-background-dark/50 rounded-xl border border-primary/20 backdrop-blur-lg">
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary/10 text-primary mb-4">
                    <span className="material-symbols-outlined text-3xl">inventory</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Product Bundle Management</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    Create and manage product bundles to increase average order value and customer satisfaction.
                  </p>
                  <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                    <li>• Bundle creation and pricing</li>
                    <li>• Cross-sell recommendations</li>
                    <li>• Inventory management</li>
                  </ul>
                </div>

                <div className="p-6 bg-white/5 dark:bg-background-dark/50 rounded-xl border border-primary/20 backdrop-blur-lg">
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary/10 text-primary mb-4">
                    <span className="material-symbols-outlined text-3xl">trending_up</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Market Intelligence</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    Get insights into market trends and pricing strategies to optimize your sales performance.
                  </p>
                  <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                    <li>• Competitor price analysis</li>
                    <li>• Trend identification</li>
                    <li>• Sales optimization tips</li>
                  </ul>
                </div>

                <div className="p-6 bg-white/5 dark:bg-background-dark/50 rounded-xl border border-primary/20 backdrop-blur-lg">
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary/10 text-primary mb-4">
                    <span className="material-symbols-outlined text-3xl">support</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">24/7 Support</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    Get help whenever you need it with our comprehensive support system and community.
                  </p>
                  <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                    <li>• Live chat support</li>
                    <li>• Community forums</li>
                    <li>• Video tutorials and guides</li>
                  </ul>
                </div>
              </div>

              {/* Direct Service Access */}
              <div className="mt-12 text-center">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Quick Access to Our Services</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  <button
                    onClick={() => handleServiceAccess('/quick-scrape', 'Quick Scrape', 1)}
                    className="group p-4 bg-white/5 dark:bg-background-dark/50 rounded-xl border border-primary/20 hover:border-primary/40 transition-all duration-300 transform hover:scale-105"
                  >
                    <div className="flex items-center justify-center h-10 w-10 rounded-full bg-primary/10 text-primary mb-3 mx-auto group-hover:bg-primary/20 transition-colors">
                      <span className="material-symbols-outlined text-xl">flash_on</span>
                    </div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Quick Scrape</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Instant data extraction</p>
                  </button>

                  <button
                    onClick={() => handleServiceAccess('/product-upload', 'Product Upload', 2)}
                    className="group p-4 bg-white/5 dark:bg-background-dark/50 rounded-xl border border-primary/20 hover:border-primary/40 transition-all duration-300 transform hover:scale-105"
                  >
                    <div className="flex items-center justify-center h-10 w-10 rounded-full bg-primary/10 text-primary mb-3 mx-auto group-hover:bg-primary/20 transition-colors">
                      <span className="material-symbols-outlined text-xl">cloud_upload</span>
                    </div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Product Upload</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Seamless catalog management</p>
                  </button>

                  <button
                    onClick={() => handleServiceAccess('/storytelling', 'Storytelling Assistant', 5)}
                    className="group p-4 bg-white/5 dark:bg-background-dark/50 rounded-xl border border-primary/20 hover:border-primary/40 transition-all duration-300 transform hover:scale-105"
                  >
                    <div className="flex items-center justify-center h-10 w-10 rounded-full bg-primary/10 text-primary mb-3 mx-auto group-hover:bg-primary/20 transition-colors">
                      <span className="material-symbols-outlined text-xl">auto_stories</span>
                    </div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Storytelling Assistant</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">AI-powered content creation</p>
                  </button>
                </div>
              </div>
            </section>

            {/* Problem We Solve Section */}
            <section className="mb-16">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Problems We Solve</h2>
                <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                  We understand the unique challenges faced by handmade sellers and have built solutions specifically for you.
                </p>
              </div>

              <div className="grid gap-8 md:grid-cols-2">
                <div className="p-6 bg-red-50 dark:bg-red-900/20 rounded-xl border border-red-200 dark:border-red-800">
                  <h3 className="text-xl font-semibold text-red-900 dark:text-red-100 mb-3">Time-Consuming Manual Work</h3>
                  <p className="text-red-800 dark:text-red-200 mb-4">
                    Spending hours writing product descriptions, editing photos, and managing listings instead of creating beautiful handmade items.
                  </p>
                  <p className="text-sm text-red-700 dark:text-red-300 font-medium">
                    ✅ Our AI tools automate repetitive tasks, giving you back your creative time.
                  </p>
                </div>

                <div className="p-6 bg-orange-50 dark:bg-orange-900/20 rounded-xl border border-orange-200 dark:border-orange-800">
                  <h3 className="text-xl font-semibold text-orange-900 dark:text-orange-100 mb-3">Lack of Professional Presentation</h3>
                  <p className="text-orange-800 dark:text-orange-200 mb-4">
                    Handmade products deserve professional presentation, but most sellers lack the tools and expertise to compete with mass-produced items.
                  </p>
                  <p className="text-sm text-orange-700 dark:text-orange-300 font-medium">
                    ✅ Our AI-powered tools help you create professional listings that showcase your craftsmanship.
                  </p>
                </div>

                <div className="p-6 bg-blue-50 dark:bg-blue-900/20 rounded-xl border border-blue-200 dark:border-blue-800">
                  <h3 className="text-xl font-semibold text-blue-900 dark:text-blue-100 mb-3">Limited Market Reach</h3>
                  <p className="text-blue-800 dark:text-blue-200 mb-4">
                    Struggling to reach customers beyond local markets or social media followers, missing out on global opportunities.
                  </p>
                  <p className="text-sm text-blue-700 dark:text-blue-300 font-medium">
                    ✅ Our platform helps you expand your reach and connect with customers worldwide.
                  </p>
                </div>

                <div className="p-6 bg-green-50 dark:bg-green-900/20 rounded-xl border border-green-200 dark:border-green-800">
                  <h3 className="text-xl font-semibold text-green-900 dark:text-green-100 mb-3">Inconsistent Branding</h3>
                  <p className="text-green-800 dark:text-green-200 mb-4">
                    Difficulty maintaining consistent branding and messaging across multiple sales channels and platforms.
                  </p>
                  <p className="text-sm text-green-700 dark:text-green-300 font-medium">
                    ✅ Our tools ensure consistent, professional presentation across all your sales channels.
                  </p>
                </div>
              </div>
            </section>

            {/* Call to Action */}
            <section className="text-center bg-primary/10 dark:bg-primary/5 rounded-2xl p-8 md:p-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Ready to Transform Your Handmade Business?</h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
                Join thousands of artisans who are already using our AI-powered platform to grow their businesses and reach more customers.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link to="/upload" className="w-full sm:w-auto flex items-center justify-center px-8 py-4 rounded-lg bg-primary text-white font-semibold shadow-lg hover:bg-primary/90 transition-colors">
                  <span className="material-symbols-outlined mr-2">rocket_launch</span>
                  Start Free Today
                </Link>
                <Link to="/quick-scrape" className="w-full sm:w-auto flex items-center justify-center px-8 py-4 rounded-lg bg-white/10 dark:bg-white/5 text-gray-900 dark:text-white font-semibold backdrop-blur-sm border border-white/20 hover:bg-white/20 dark:hover:bg-white/10 transition-colors">
                  <span className="material-symbols-outlined mr-2">play_arrow</span>
                  Try Demo
                </Link>
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
                No credit card required • 14-day free trial • Cancel anytime
              </p>
            </section>
          </div>
        </main>
        <footer className="glass mt-16 py-8 px-4 border-t border-white/10">
          <div className="max-w-6xl mx-auto">
            {/* Quick Links */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <Link to="/upload" className="group glass p-4 rounded-xl border border-primary/20 hover:border-primary/40 transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                <div className="flex flex-col items-center text-center">
                  <span className="material-symbols-outlined text-2xl text-primary mb-2 group-hover:animate-bounce">upload</span>
                  <span className="font-medium text-slate-700 dark:text-slate-300 group-hover:text-primary">Upload</span>
                </div>
              </Link>
              <Link to="/quick-scrape" className="group glass p-4 rounded-xl border border-primary/20 hover:border-primary/40 transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                <div className="flex flex-col items-center text-center">
                  <span className="material-symbols-outlined text-2xl text-primary mb-2 group-hover:animate-bounce">document_scanner</span>
                  <span className="font-medium text-slate-700 dark:text-slate-300 group-hover:text-primary">Scrape</span>
                </div>
              </Link>
              <Link to="/storytelling" className="group glass p-4 rounded-xl border border-primary/20 hover:border-primary/40 transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                <div className="flex flex-col items-center text-center">
                  <span className="material-symbols-outlined text-2xl text-primary mb-2 group-hover:animate-bounce">auto_stories</span>
                  <span className="font-medium text-slate-700 dark:text-slate-300 group-hover:text-primary">Stories</span>
                </div>
              </Link>
              <Link to="/contact" className="group glass p-4 rounded-xl border border-primary/20 hover:border-primary/40 transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                <div className="flex flex-col items-center text-center">
                  <span className="material-symbols-outlined text-2xl text-primary mb-2 group-hover:animate-bounce">contact_mail</span>
                  <span className="font-medium text-slate-700 dark:text-slate-300 group-hover:text-primary">Contact</span>
                </div>
              </Link>
            </div>

            <div className="text-center">
              <p className="text-gray-600 dark:text-gray-400 animate-fade-in mb-4">
                © 2024 Artisan AI. All rights reserved.
              </p>
              <div className="flex justify-center space-x-6">
                <button className="text-gray-500 hover:text-primary transition-colors transform hover:scale-110">
                  <span className="material-symbols-outlined">share</span>
                </button>
                <button className="text-gray-500 hover:text-primary transition-colors transform hover:scale-110">
                  <span className="material-symbols-outlined">info</span>
                </button>
                <button className="text-gray-500 hover:text-primary transition-colors transform hover:scale-110">
                  <span className="material-symbols-outlined">help</span>
                </button>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default HomePage;