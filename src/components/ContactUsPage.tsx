import React from 'react';
import { Link } from 'react-router-dom';

const ContactUsPage: React.FC = () => {
  return (
    <div className="bg-gradient-to-br from-background-light via-primary-light/30 to-primary/20 dark:from-background-dark dark:via-primary-dark/20 dark:to-primary/10 font-display text-slate-900 dark:text-slate-100 min-h-screen relative overflow-hidden">
      {/* Advanced Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Main floating orbs */}
        <div className="absolute top-20 left-12 w-40 h-40 bg-cyan-400/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-12 w-32 h-32 bg-blue-400/10 rounded-full blur-3xl animate-float" style={{animationDelay: '1.5s'}}></div>
        <div className="absolute top-1/2 right-1/4 w-24 h-24 bg-primary/15 rounded-full blur-2xl animate-pulse"></div>

        {/* Morphing shapes */}
        <div className="absolute top-1/4 right-1/3 w-16 h-16 bg-purple-400/10 rounded-full blur-2xl animate-morph"></div>
        <div className="absolute bottom-1/3 left-1/4 w-20 h-20 bg-green-400/10 rounded-full blur-2xl animate-float" style={{animationDelay: '2.5s'}}></div>

        {/* Additional advanced effects */}
        <div className="absolute top-1/6 left-1/3 w-12 h-12 bg-pink-400/8 rounded-full blur-xl animate-float" style={{animationDelay: '3s'}}></div>
        <div className="absolute bottom-1/4 right-1/6 w-18 h-18 bg-indigo-400/12 rounded-full blur-2xl animate-morph" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-3/4 left-1/6 w-14 h-14 bg-teal-400/10 rounded-full blur-xl animate-pulse" style={{animationDelay: '2s'}}></div>

        {/* Geometric shapes */}
        <div className="absolute top-1/3 left-1/2 w-8 h-8 bg-orange-400/15 rotate-45 blur-lg animate-float" style={{animationDelay: '4s'}}></div>
        <div className="absolute bottom-1/6 right-1/3 w-10 h-10 bg-violet-400/12 rotate-12 blur-xl animate-morph" style={{animationDelay: '2.5s'}}></div>

        {/* Dynamic gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-primary/2 to-transparent animate-shimmer opacity-30"></div>
        <div className="absolute inset-0 bg-gradient-to-tl from-transparent via-cyan-500/1 to-transparent animate-shimmer opacity-20" style={{animationDelay: '2s'}}></div>
      </div>

      {/* Floating Quick Contact Button */}
      <div className="fixed bottom-6 right-6 z-40 animate-fade-in" style={{animationDelay: '1.5s'}}>
        <div className="relative">
          <div className="absolute -inset-1 bg-gradient-to-r from-primary via-cyan-500 to-blue-500 rounded-2xl blur opacity-30 animate-pulse"></div>
          <a
            href="tel:+918949063XX"
            className="relative group flex items-center justify-center w-16 h-16 glass border border-primary/30 rounded-2xl hover:border-primary/60 transition-all duration-300 transform hover:scale-110 hover:shadow-2xl hover:shadow-primary/50"
          >
            <span className="material-symbols-outlined text-2xl text-primary group-hover:animate-bounce">call</span>
          </a>
          {/* Tooltip */}
          <div className="absolute bottom-full right-0 mb-2 px-3 py-1 bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
            Call Vijay: +91 8949063XX
            <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-slate-900 dark:border-t-slate-100"></div>
          </div>
        </div>
      </div>

      <div className="flex h-full min-h-screen flex-col relative z-10">
        <header className="sticky top-0 z-20 glass border-b border-white/10">
          <div className="flex items-center justify-between p-6">
            <Link to="/" className="group p-3 -m-3 rounded-full hover:bg-white/10 transition-all transform hover:scale-110">
              <span className="material-symbols-outlined text-lg group-hover:animate-pulse">arrow_back</span>
            </Link>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-primary via-cyan-500 to-blue-500 bg-clip-text text-transparent animate-glow">
              Contact Us
            </h1>
            <a
              href="tel:+918949063XX"
              className="group px-4 py-2 bg-gradient-to-r from-primary to-cyan-500 text-white font-semibold rounded-xl hover:shadow-2xl hover:shadow-primary/50 transition-all duration-300 transform hover:scale-105 animate-glow text-sm"
            >
              <span className="hidden sm:inline">Quick Call</span>
              <span className="sm:hidden material-symbols-outlined">call</span>
            </a>
          </div>
        </header>
        <main className="flex-1 p-6 animate-fade-in">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="text-center animate-slide-up">
              <h2 className="text-4xl font-bold bg-gradient-to-r from-primary to-cyan-500 bg-clip-text text-transparent mb-4">
                Get In Touch
              </h2>
              <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                Ready to transform your handmade business? Let's connect and explore how AI can elevate your craft.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 animate-slide-up" style={{animationDelay: '0.2s'}}>
              {/* Contact Form */}
              <div className="glass rounded-2xl p-8 border border-primary/20">
                <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-primary to-cyan-500 bg-clip-text text-transparent">
                  Send us a message
                </h3>
                <form className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <input
                        type="text"
                        placeholder="First Name"
                        className="w-full rounded-xl glass border border-primary/20 p-4 text-slate-800 dark:text-slate-200 placeholder-slate-400 dark:placeholder-slate-500 focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none transition-all duration-300"
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        placeholder="Last Name"
                        className="w-full rounded-xl glass border border-primary/20 p-4 text-slate-800 dark:text-slate-200 placeholder-slate-400 dark:placeholder-slate-500 focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none transition-all duration-300"
                      />
                    </div>
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Email Address"
                      className="w-full rounded-xl glass border border-primary/20 p-4 text-slate-800 dark:text-slate-200 placeholder-slate-400 dark:placeholder-slate-500 focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none transition-all duration-300"
                    />
                  </div>
                  <div>
                    <label htmlFor="topic-select" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                      Topic
                    </label>
                    <select
                      id="topic-select"
                      className="w-full rounded-xl glass border border-primary/20 p-4 text-slate-800 dark:text-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none transition-all duration-300"
                    >
                      <option value="">Select Topic</option>
                      <option value="product-upload">Product Upload</option>
                      <option value="scraping">Web Scraping</option>
                      <option value="storytelling">AI Storytelling</option>
                      <option value="support">Technical Support</option>
                      <option value="partnership">Partnership</option>
                    </select>
                  </div>
                  <div>
                    <textarea
                      rows={5}
                      placeholder="Tell us about your project..."
                      className="w-full rounded-xl glass border border-primary/20 p-4 text-slate-800 dark:text-slate-200 placeholder-slate-400 dark:placeholder-slate-500 focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none transition-all duration-300 resize-none"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-primary to-cyan-500 text-white font-bold py-4 px-6 rounded-xl hover:shadow-2xl hover:shadow-primary/50 transition-all duration-300 transform hover:scale-105 animate-glow"
                  >
                    Send Message
                  </button>
                </form>
              </div>

              {/* Contact Info */}
              <div className="space-y-6">
                <div className="glass rounded-2xl p-6 border border-primary/20 animate-fade-in" style={{animationDelay: '0.4s'}}>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-cyan-500/20 flex items-center justify-center animate-float">
                      <span className="material-symbols-outlined text-primary">email</span>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-slate-900 dark:text-white">Primary Email</h4>
                      <p className="text-slate-600 dark:text-slate-400 font-medium">vsjangid60@gmail.com</p>
                      <div className="mt-2 pt-2 border-t border-primary/10">
                        <h5 className="font-semibold text-slate-700 dark:text-slate-300 text-sm">Alternate Email</h5>
                        <p className="text-slate-500 dark:text-slate-400 text-sm">klyrolabs@gmail.com</p>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    We'll respond within 24 hours with expert guidance for your handmade business.
                  </p>
                </div>

                <div className="glass rounded-2xl p-6 border border-primary/20 animate-fade-in" style={{animationDelay: '0.6s'}}>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center animate-float" style={{animationDelay: '1s'}}>
                      <span className="material-symbols-outlined text-cyan-500">phone</span>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-slate-900 dark:text-white">Priyanka Taneja</h4>
                      <p className="text-slate-600 dark:text-slate-400 font-medium text-sm mb-1">Founder</p>
                      <p className="text-slate-600 dark:text-slate-400 font-medium">+91 9315403XX</p>
                      <a href="https://www.linkedin.com/in/priyankataneja26/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700 text-xs flex items-center gap-1 mt-1" title="Click for direct connect">
                        LinkedIn <span className="material-symbols-outlined text-xs">open_in_new</span>
                      </a>
                      <div className="mt-2 pt-2 border-t border-primary/10">
                        <h5 className="font-semibold text-slate-700 dark:text-slate-300 text-sm">Vijay Jangid</h5>
                        <p className="text-slate-500 dark:text-slate-400 text-sm">Co-Founder & Development Head</p>
                        <p className="text-slate-500 dark:text-slate-400 text-sm">+91 8949063XX</p>
                        <a href="https://www.linkedin.com/in/vijay----jangid/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700 text-xs flex items-center gap-1 mt-1" title="Click for direct connect">
                          LinkedIn <span className="material-symbols-outlined text-xs">open_in_new</span>
                        </a>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    Speak directly with our AI specialists and product experts.
                  </p>
                </div>

                <div className="glass rounded-2xl p-6 border border-primary/20 animate-fade-in" style={{animationDelay: '0.8s'}}>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center animate-float" style={{animationDelay: '2s'}}>
                      <span className="material-symbols-outlined text-blue-500">location_on</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 dark:text-white">Our Location</h4>
                      <p className="text-slate-600 dark:text-slate-400">Jaipur, Rajasthan, India</p>
                    </div>
                  </div>
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    Located in the heart of innovation, ready to help artisans worldwide.
                  </p>
                </div>

                {/* Quick Contact Button */}
                <div className="glass rounded-2xl p-6 border border-primary/20 animate-fade-in" style={{animationDelay: '1s'}}>
                  <div className="text-center">
                    <h4 className="font-bold text-slate-900 dark:text-white mb-4 flex items-center justify-center gap-2">
                      <span className="material-symbols-outlined text-primary animate-pulse">contact_phone</span>
                      Quick Contact
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 justify-center">
                      {/* Call Button with Flip */}
                      <div className="flip-card w-full h-20">
                        <div className="flip-card-inner w-full h-full">
                          <a
                            href="tel:+918949063XX"
                            className="flip-card-front flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-primary to-cyan-500 text-white font-semibold rounded-xl hover:shadow-2xl hover:shadow-primary/50 transition-all duration-300 transform hover:scale-105 animate-glow relative overflow-hidden"
                          >
                            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-blue-400/20 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                            <span className="material-symbols-outlined hover:animate-bounce relative z-10">call</span>
                            <span className="relative z-10">Call Team</span>
                          </a>
                          <div className="flip-card-back flex items-center justify-center gap-0.5 px-3 py-1 bg-gradient-to-r from-green-500 to-emerald-500 text-white font-normal rounded-xl shadow-2xl relative overflow-hidden flex-wrap text-xs">
                            <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/20 to-green-400/20 animate-shimmer"></div>
                            <span className="material-symbols-outlined animate-spin relative z-10">phone_in_talk</span>
                            <span className="relative z-10">Direct Call</span>
                          </div>
                        </div>
                      </div>

                      {/* WhatsApp Button with Flip */}
                      <div className="flip-card w-full h-20">
                        <div className="flip-card-inner w-full h-full">
                          <a
                            href="https://wa.me/918949063XX"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flip-card-front flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-primary to-cyan-500 text-white font-semibold rounded-xl hover:shadow-2xl hover:shadow-primary/50 transition-all duration-300 transform hover:scale-105 animate-glow relative overflow-hidden flex-wrap text-sm"
                          >
                            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-blue-400/20 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                            <span className="material-symbols-outlined hover:animate-bounce relative z-10">chat</span>
                            <span className="relative z-10">WhatsApp</span>
                          </a>
                          <div className="flip-card-back flex items-center justify-center gap-0.5 px-3 py-1 bg-gradient-to-r from-primary to-blue-500 text-white font-normal rounded-xl shadow-2xl relative overflow-hidden flex-wrap text-xs">
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-primary/20 animate-shimmer"></div>
                            <span className="material-symbols-outlined animate-bounce relative z-10">whatsapp</span>
                            <span className="relative z-10">Quick Chat</span>
                          </div>
                        </div>
                      </div>

                      {/* Email Button with Flip */}
                      <div className="flip-card w-full h-20">
                        <div className="flip-card-inner w-full h-full">
                          <a
                            href="mailto:vsjangid60@gmail.com"
                            className="flip-card-front flex items-center justify-center gap-2 px-6 py-3 glass border border-primary/30 text-slate-700 dark:text-slate-300 font-semibold rounded-xl hover:border-primary/60 transition-all duration-300 transform hover:scale-105 relative overflow-hidden"
                          >
                            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-cyan-500/10 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                            <span className="material-symbols-outlined hover:animate-bounce relative z-10">email</span>
                            <span className="relative z-10">Email Us</span>
                          </a>
                          <div className="flip-card-back flex items-center justify-center gap-0.5 px-3 py-1 bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-normal rounded-xl shadow-2xl relative overflow-hidden flex-wrap text-xs">
                            <div className="absolute inset-0 bg-gradient-to-r from-indigo-400/20 to-blue-400/20 animate-shimmer"></div>
                            <span className="material-symbols-outlined animate-pulse relative z-10">mail</span>
                            <span className="relative z-10">Send Mail</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 text-sm text-slate-500 dark:text-slate-400">
                      <p>📍 Jaipur, Rajasthan, India</p>
                      <p className="mt-1">🕒 Available 24/7 for your business needs</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
    
            {/* Team Section */}
            <div className="glass rounded-2xl p-8 border border-primary/20 animate-slide-up" style={{animationDelay: '0.8s'}}>
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-primary to-cyan-500 bg-clip-text text-transparent text-center">
                Our Team
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 text-center mb-6">Click on LinkedIn buttons for direct connect</p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="glass p-4 rounded-xl border border-primary/10 text-center hover:border-primary/30 transition-all duration-300">
                  <h4 className="font-bold text-slate-900 dark:text-white text-xl">1. Arnav Deora</h4>
                  <p className="text-slate-600 dark:text-slate-400 mt-2">Co-Founder (Development Lead)</p>
                  <a href="https://www.linkedin.com/in/arnav-deore-7949882b5/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700 text-xs flex items-center gap-1 mt-1 justify-center" title="Click for direct connect">
                    LinkedIn <span className="material-symbols-outlined text-xs">open_in_new</span>
                  </a>
                </div>
                <div className="glass p-4 rounded-xl border border-primary/10 text-center hover:border-primary/30 transition-all duration-300">
                  <h4 className="font-bold text-slate-900 dark:text-white text-xl">2. Yamini</h4>
                  <p className="text-slate-600 dark:text-slate-400 mt-2">Co-Founder (AI Specialist)</p>
                  <a href="https://www.linkedin.com/in/yamini-kanojia-579b55368/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700 text-xs flex items-center gap-1 mt-1 justify-center" title="Click for direct connect">
                    LinkedIn <span className="material-symbols-outlined text-xs">open_in_new</span>
                  </a>
                </div>
                <div className="glass p-4 rounded-xl border border-primary/10 text-center hover:border-primary/30 transition-all duration-300">
                  <h4 className="font-bold text-slate-900 dark:text-white text-xl">3. Mohit</h4>
                  <p className="text-slate-600 dark:text-slate-400 mt-2">Product Manager</p>
                  <a href="javascript:void(0)" className="text-blue-500 hover:text-blue-700 text-xs flex items-center gap-1 mt-1 justify-center" title="Click for direct connect">
                    LinkedIn <span className="material-symbols-outlined text-xs">open_in_new</span>
                  </a>
                </div>
                <div className="glass p-4 rounded-xl border border-primary/10 text-center hover:border-primary/30 transition-all duration-300">
                  <h4 className="font-bold text-slate-900 dark:text-white text-xl">4. Anant Rai</h4>
                  <p className="text-slate-600 dark:text-slate-400 mt-2">Design Lead</p>
                  <a href="https://www.linkedin.com/in/anant-rai-a79565312/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700 text-xs flex items-center gap-1 mt-1 justify-center" title="Click for direct connect">
                    LinkedIn <span className="material-symbols-outlined text-xs">open_in_new</span>
                  </a>
                </div>
              </div>
            </div>
    
            {/* Feedback Form Section */}
            <div className="glass rounded-2xl p-8 border border-primary/20 animate-slide-up" style={{animationDelay: '1s'}}>
              <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-primary to-cyan-500 bg-clip-text text-transparent text-center">
                Send Feedback
              </h3>
              <form className="space-y-6 max-w-2xl mx-auto">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <input
                      type="text"
                      placeholder="First Name"
                      className="w-full rounded-xl glass border border-primary/20 p-4 text-slate-800 dark:text-slate-200 placeholder-slate-400 dark:placeholder-slate-500 focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none transition-all duration-300"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="Last Name"
                      className="w-full rounded-xl glass border border-primary/20 p-4 text-slate-800 dark:text-slate-200 placeholder-slate-400 dark:placeholder-slate-500 focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none transition-all duration-300"
                    />
                  </div>
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full rounded-xl glass border border-primary/20 p-4 text-slate-800 dark:text-slate-200 placeholder-slate-400 dark:placeholder-slate-500 focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none transition-all duration-300"
                  />
                </div>
                <div>
                  <textarea
                    rows={4}
                    placeholder="Your feedback for us..."
                    className="w-full rounded-xl glass border border-primary/20 p-4 text-slate-800 dark:text-slate-200 placeholder-slate-400 dark:placeholder-slate-500 focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none transition-all duration-300 resize-none"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-primary to-cyan-500 text-white font-bold py-4 px-6 rounded-xl hover:shadow-2xl hover:shadow-primary/50 transition-all duration-300 transform hover:scale-105 animate-glow"
                >
                  Submit Feedback
                </button>
              </form>
            </div>

            {/* FAQ Section */}
            <div className="glass rounded-2xl p-8 border border-primary/20 animate-slide-up overflow-hidden relative" style={{animationDelay: '1.2s'}}>
              {/* Animated background */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-cyan-500/5 animate-shimmer"></div>
              {/* Floating particles in FAQ section */}
              <div className="absolute top-4 right-4 w-2 h-2 bg-primary/30 rounded-full animate-float"></div>
              <div className="absolute bottom-6 left-6 w-1.5 h-1.5 bg-cyan-400/40 rounded-full animate-float" style={{animationDelay: '1s'}}></div>
              <div className="absolute top-1/2 left-1/3 w-1 h-1 bg-blue-400/50 rounded-full animate-pulse"></div>

              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-primary to-cyan-500 bg-clip-text text-transparent animate-glow">
                  Frequently Asked Questions
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="group glass p-4 rounded-xl border border-primary/10 hover:border-primary/30 transition-all duration-500 transform hover:scale-102 hover:shadow-lg hover:shadow-primary/10 relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="relative z-10">
                        <h4 className="font-semibold text-slate-900 dark:text-white mb-2 group-hover:text-primary transition-colors flex items-center gap-2">
                          <span className="material-symbols-outlined text-sm group-hover:animate-spin">psychology</span>
                          How does AI help my handmade business?
                        </h4>
                        <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">Our AI tools automate product descriptions, enhance images, and help you reach more customers through intelligent storytelling.</p>
                      </div>
                    </div>
                    <div className="group glass p-4 rounded-xl border border-primary/10 hover:border-primary/30 transition-all duration-500 transform hover:scale-102 hover:shadow-lg hover:shadow-primary/10 relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="relative z-10">
                        <h4 className="font-semibold text-slate-900 dark:text-white mb-2 group-hover:text-primary transition-colors flex items-center gap-2">
                          <span className="material-symbols-outlined text-sm group-hover:animate-spin">security</span>
                          Is my data secure?
                        </h4>
                        <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">Absolutely. We use enterprise-grade encryption and never share your personal or business data with third parties.</p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="group glass p-4 rounded-xl border border-primary/10 hover:border-primary/30 transition-all duration-500 transform hover:scale-102 hover:shadow-lg hover:shadow-primary/10 relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="relative z-10">
                        <h4 className="font-semibold text-slate-900 dark:text-white mb-2 group-hover:text-primary transition-colors flex items-center gap-2">
                          <span className="material-symbols-outlined text-sm group-hover:animate-spin">school</span>
                          Do you offer training?
                        </h4>
                        <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">Yes! We provide comprehensive onboarding and ongoing support to ensure you get the most from our AI tools.</p>
                      </div>
                    </div>
                    <div className="group glass p-4 rounded-xl border border-primary/10 hover:border-primary/30 transition-all duration-500 transform hover:scale-102 hover:shadow-lg hover:shadow-primary/10 relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="relative z-10">
                        <h4 className="font-semibold text-slate-900 dark:text-white mb-2 group-hover:text-primary transition-colors flex items-center gap-2">
                          <span className="material-symbols-outlined text-sm group-hover:animate-spin">attach_money</span>
                          What's your pricing?
                        </h4>
                        <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">We offer flexible plans starting from ₹1999/month. Contact us for a custom quote based on your needs.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default ContactUsPage;