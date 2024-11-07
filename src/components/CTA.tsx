import React, { useState } from 'react';

export default function CTA() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent('New Dayry Waitlist Signup');
    const body = encodeURIComponent(`New signup request from: ${email}`);
    window.location.href = `mailto:philopateernabil2021@gmail.com?subject=${subject}&body=${body}`;
    setEmail('');
  };

  return (
    <section id="join-waitlist" className="bg-amber-600 text-white py-20">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-8">Be the First to Know When We Launch</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Join our waitlist to get early access and exclusive offers when we launch in Egypt.
        </p>
        <form onSubmit={handleSubmit} className="flex max-w-md mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="flex-1 px-4 py-3 rounded-l-full text-gray-800 focus:outline-none"
          />
          <button 
            type="submit"
            className="bg-gray-800 px-8 py-3 rounded-r-full hover:bg-gray-900 transition-colors"
          >
            Join Now
          </button>
        </form>
      </div>
    </section>
  );
}