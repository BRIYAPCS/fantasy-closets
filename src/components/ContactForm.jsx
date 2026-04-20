import { useState } from 'react';
import { sendContactForm } from '../services/contactService';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    surname: '' // honeypot
  });
  
  const [status, setStatus] = useState('idle'); // idle | loading | success | error
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      await sendContactForm(formData);
      setStatus('success');
      setFormData({ name: '', email: '', phone: '', message: '', surname: '' });
    } catch (error) {
      setStatus('error');
      setErrorMessage(error.message || 'Something went wrong. Please try again.');
    }
  };

  if (status === 'success') {
    return (
      <div className="bg-white p-10 border border-luxury-200 flex flex-col items-center justify-center text-center h-full min-h-[400px]">
        <h3 className="text-3xl font-serif text-luxury-900 mb-4">Thank You</h3>
        <p className="text-luxury-900/70">We have received your message and will be in touch shortly to schedule your consultation.</p>
        <button 
          onClick={() => setStatus('idle')}
          className="mt-8 px-6 py-2 border border-luxury-900 text-luxury-900 hover:bg-luxury-900 hover:text-white transition-colors uppercase tracking-wider text-sm"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white p-8 md:p-12 border border-luxury-200">
      <div className="space-y-6">
        
        {/* Honeypot field - hidden from users */}
        <div style={{ display: 'none' }} aria-hidden="true">
          <input type="text" name="surname" tabIndex="-1" value={formData.surname} onChange={handleChange} autoComplete="off" />
        </div>

        <div>
          <label htmlFor="name" className="block text-sm uppercase tracking-widest text-luxury-900 mb-2">Full Name</label>
          <input 
            type="text" 
            id="name" 
            name="name" 
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full bg-luxury-100/50 border border-luxury-200 px-4 py-3 focus:outline-none focus:border-luxury-800 transition-colors text-luxury-900"
          />
        </div>

        <div>
           <label htmlFor="email" className="block text-sm uppercase tracking-widest text-luxury-900 mb-2">Email Address</label>
           <input 
            type="email" 
            id="email" 
            name="email" 
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full bg-luxury-100/50 border border-luxury-200 px-4 py-3 focus:outline-none focus:border-luxury-800 transition-colors text-luxury-900"
          />
        </div>

        <div>
           <label htmlFor="phone" className="block text-sm uppercase tracking-widest text-luxury-900 mb-2">Phone Number</label>
           <input 
            type="tel" 
            id="phone" 
            name="phone" 
            required
            value={formData.phone}
            onChange={handleChange}
            className="w-full bg-luxury-100/50 border border-luxury-200 px-4 py-3 focus:outline-none focus:border-luxury-800 transition-colors text-luxury-900"
          />
        </div>

        <div>
           <label htmlFor="message" className="block text-sm uppercase tracking-widest text-luxury-900 mb-2">Project Details</label>
           <textarea 
            id="message" 
            name="message" 
            required
            rows="5"
            value={formData.message}
            onChange={handleChange}
            className="w-full bg-luxury-100/50 border border-luxury-200 px-4 py-3 focus:outline-none focus:border-luxury-800 transition-colors text-luxury-900 resize-none"
          ></textarea>
        </div>

        {status === 'error' && (
          <div className="text-red-700 text-sm border-l-2 border-red-700 pl-3">
            {errorMessage}
          </div>
        )}

        <button 
          type="submit" 
          disabled={status === 'loading'}
          className="w-full bg-luxury-900 text-luxury-100 py-4 uppercase tracking-widest text-sm hover:bg-luxury-800 transition-colors disabled:opacity-70"
        >
          {status === 'loading' ? 'Sending...' : 'Request Consultation'}
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
