import React from 'react';
import { Link } from 'react-router-dom';

const ProductUploadPage: React.FC = () => {
  return (
    <div className="bg-gradient-to-br from-background-light via-background-light to-blue-50 dark:from-background-dark dark:via-background-dark dark:to-blue-950 font-display text-white min-h-screen relative overflow-hidden">
      {/* Enhanced Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Main floating orbs */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-blue-400/5 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-primary/10 rounded-full blur-2xl animate-pulse"></div>

        {/* Additional advanced effects */}
        <div className="absolute top-1/4 right-1/4 w-16 h-16 bg-cyan-400/8 rounded-full blur-xl animate-morph"></div>
        <div className="absolute bottom-1/4 left-1/4 w-20 h-20 bg-indigo-400/6 rounded-full blur-2xl animate-float" style={{animationDelay: '3s'}}></div>
        <div className="absolute top-3/4 right-1/6 w-12 h-12 bg-purple-400/7 rounded-full blur-xl animate-pulse" style={{animationDelay: '1.5s'}}></div>

        {/* Dynamic geometric shapes */}
        <div className="absolute top-1/6 left-2/3 w-2 h-8 bg-gradient-to-b from-primary/15 to-transparent rotate-45 animate-float" style={{animationDelay: '2.5s'}}></div>
        <div className="absolute bottom-1/6 right-1/3 w-6 h-1 bg-gradient-to-r from-blue-400/20 to-transparent animate-shimmer"></div>
        <div className="absolute top-2/3 left-1/6 w-3 h-3 bg-gradient-to-br from-cyan-400/10 to-indigo-400/10 rotate-12 animate-morph" style={{animationDelay: '4s'}}></div>
      </div>

      <div className="relative flex h-auto min-h-screen w-full flex-col justify-between z-10">
        <div className="flex-grow">
          <header className="sticky top-0 z-20 glass border-b border-white/10">
            <div className="flex items-center p-6">
              <Link to="/" className="group p-2 -m-2 rounded-full hover:bg-white/10 transition-all transform hover:scale-110">
                <span className="material-symbols-outlined text-xl group-hover:animate-pulse">arrow_back</span>
              </Link>
              <h1 className="flex-1 text-center text-2xl font-bold bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent animate-glow">
                Create Listing
              </h1>
              <div className="w-8"></div>
            </div>
          </header>
          <main className="p-6 space-y-8 animate-fade-in">
            <section className="animate-slide-up">
              <h2 className="mb-6 text-2xl font-bold bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">
                Product Images
              </h2>
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
                <div className="relative group cursor-pointer">
                  <div className="aspect-square w-full rounded-2xl glass border-2 border-dashed border-primary/30 hover:border-primary/60 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-primary/20 flex items-center justify-center">
                    <span className="material-symbols-outlined text-4xl text-primary/60 group-hover:text-primary group-hover:animate-bounce">add_photo_alternate</span>
                  </div>
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="relative group">
                  <div className="aspect-square w-full rounded-2xl glass border border-primary/20 hover:border-primary/40 transition-all duration-300 transform hover:scale-105 hover:shadow-xl overflow-hidden">
                    <div className="w-full h-full bg-cover bg-center" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDYKYar1-JkXQ-O5hJWKloTFAruBPR2Z6IHMxlKmMKeZCqGjHO602ox-GY7Nkpj-DfnVVddyLuwMCGMQUSavySoY0_yXr8pH3Xb2pNglDSuDb8Te35cp90NoUJl5iSWrJ05SMpqfBo9BdOGjhJ2RosiH5B6gzh7fx8EsmpxorcourhUJBPIusOGGwWq-W8QEbp_vOYGBVnpvG2VlrPDl4Ey9_Er14kNEInRoXR5uP2x8vRFAYj1kDaFxCG7763fBlNEVRWaqjfDffE")'}}></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </div>
              </div>
            </section>
            <section className="animate-slide-up" style={{animationDelay: '0.2s'}}>
              <h2 className="mb-6 text-2xl font-bold bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">
                Product Details
              </h2>
              <div className="space-y-6">
                <div className="relative">
                  <input className="form-input h-16 w-full rounded-2xl glass border border-primary/20 p-6 text-lg text-white placeholder-white/50 focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none transition-all duration-300 hover:border-primary/40" placeholder="Product Title" />
                  <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                    <span className="material-symbols-outlined text-primary/60">edit</span>
                  </div>
                </div>
                <div className="relative">
                  <textarea className="form-textarea min-h-40 w-full resize-none rounded-2xl glass border border-primary/20 p-6 text-lg text-white placeholder-white/50 focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none transition-all duration-300 hover:border-primary/40" placeholder="Long Description"></textarea>
                  <div className="absolute right-4 top-6">
                    <span className="material-symbols-outlined text-primary/60">description</span>
                  </div>
                </div>
              </div>
            </section>
          </main>
        </div>
        <div className="sticky bottom-0 z-20 p-6 glass border-t border-white/10">
          <Link to="/storytelling" className="group flex h-16 w-full items-center justify-center gap-4 rounded-2xl bg-gradient-to-r from-primary to-blue-500 px-8 text-lg font-bold text-white transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-primary/50 animate-glow">
            <span className="material-symbols-outlined text-2xl group-hover:animate-spin">auto_awesome</span>
            <span>AI Assist</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductUploadPage;