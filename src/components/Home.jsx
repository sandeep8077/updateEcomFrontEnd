import React from 'react';
import herosection from '../assets/herosection.jpg'


function HomePage() {
  return (
    <div className="bg-base-200 min-h-screen">
      {/* Hero Section */}
      <div className="hero min-h-[60vh] bg-cover bg-center" style={{backgroundimage:`url(${herosection})`}}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Welcome to Our Store</h1>
            <p className="mb-5">Discover amazing products and unbeatable deals today!</p>
            <button className="btn btn-primary">Shop Now</button>
          </div>
        </div>
      </div>

      {/* Featured Products */}
      <section className="my-10 px-5">
        <h2 className="text-3xl font-bold text-center mb-5">Featured Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[1, 2, 3].map((_, idx) => (
            <div key={idx} className="card bg-white shadow-xl">
              <figure><img src={`https://via.placeholder.com/400x300`} alt="Product" /></figure>
              <div className="card-body">
                <h2 className="card-title">Product {idx + 1}</h2>
                <p>$29.99</p>
                <button className="btn btn-primary mt-3">Add to Cart</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="my-10 px-5 bg-base-300 py-10">
        <h2 className="text-3xl font-bold text-center mb-5">Shop by Category</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {["Clothing", "Electronics", "Home Decor", "Sports"].map((category, idx) => (
            <div key={idx} className="card bg-white shadow-md flex items-center justify-center py-5">
              <h3 className="text-lg font-semibold">{category}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="footer p-10 bg-neutral text-neutral-content">
        <div>
          <span className="footer-title">Services</span> 
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </div> 
        <div>
          <span className="footer-title">Company</span> 
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </div> 
        <div>
          <span className="footer-title">Legal</span> 
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </div>
      </footer>
    </div>
  );
}

export default HomePage;
