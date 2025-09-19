import React from 'react';
import { Link } from 'react-router-dom';

const ProductUploadPage: React.FC = () => {
  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-white">
      <div className="relative flex h-auto min-h-screen w-full flex-col justify-between">
        <div className="flex-grow">
          <header className="sticky top-0 z-10 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-sm">
            <div className="flex items-center p-4">
              <Link to="/" className="text-white">
                <span className="material-symbols-outlined">arrow_back</span>
              </Link>
              <h1 className="flex-1 text-center text-lg font-bold">Create Listing</h1>
              <div className="w-8"></div>
            </div>
          </header>
          <main className="p-4">
            <section className="mb-6">
              <h2 className="mb-3 text-lg font-bold">Product Images</h2>
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                <div className="relative group">
                  <div className="aspect-square w-full rounded-lg bg-cover bg-center" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDYKYar1-JkXQ-O5hJWKloTFAruBPR2Z6IHMxlKmMKeZCqGjHO602ox-GY7Nkpj-DfnVVddyLuwMCGMQUSavySoY0_yXr8pH3Xb2pNglDSuDb8Te35cp90NoUJl5iSWrJ05SMpqfBo9BdOGjhJ2RosiH5B6gzh7fx8EsmpxorcourhUJBPIusOGGwWq-W8QEbp_vOYGBVnpvG2VlrPDl4Ey9_Er14kNEInRoXR5uP2x8vRFAYj1kDaFxCG7763fBlNEVRWaqjfDffE")'}}></div>
                </div>
              </div>
            </section>
            <section>
              <h2 className="mb-3 text-lg font-bold">Product Details</h2>
              <div className="space-y-4">
                <input className="form-input h-14 w-full rounded-lg border-none bg-primary/10 p-4 text-base text-white placeholder-white/50 focus:bg-primary/20 focus:ring-0" placeholder="Product Title" />
                <textarea className="form-textarea min-h-36 w-full resize-none rounded-lg border-none bg-primary/10 p-4 text-base text-white placeholder-white/50 focus:bg-primary/20 focus:ring-0" placeholder="Long Description"></textarea>
              </div>
            </section>
          </main>
        </div>
        <div className="sticky bottom-0 z-10 p-4 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-sm">
          <Link to="/storytelling" className="flex h-14 w-full items-center justify-center gap-3 rounded-lg bg-primary px-6 text-base font-bold text-white transition-colors hover:bg-opacity-90">
            <span className="material-symbols-outlined">auto_awesome</span>
            <span>AI Assist</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductUploadPage;