import { Mail, Phone, MapPin } from 'lucide-react'
import React from 'react'
const contactData = [
  {
    Icon: Mail,
    label: 'Email',
    value: 'mamucodron@gmail.com'
  },
  {
    Icon: Phone,
    label: 'Phone',
    value: '+33 6 95 95 95 95'
  },
  {
    Icon: MapPin,
    label: 'Location',
    value: 'Paris, France'
  }
]

const Contact = () => {
  return (
    <section id="contact" className="py-16 relative overflow-hidden"> 
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"/>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-highlight/5 rounded-full blur-3xl"/>
      </div>

      <div className="container mx-auto px-6 relative z-10">
       <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
              Get in touch
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
              Let's build{" "}
              <span className="font-serif italic font-normal text-white">
                something great.
              </span>
            </h2>
            <p className="text-muted-foreground animate-fade-in animation-delay-200">
              Whether you have a project in mind or just want to say hi, my inbox is always open.
            </p>
          </div>

            <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto "> 
              <div className="glass p-8 rounded-3xl md:p-12 glow-border animated-fade-in animation-delay-300">
                <form className="space-y-6">
                  <div>
                    <label 
                    htmlFor="name"
                    className="block text-sm mb-2 font-medium">Name</label>
                    <input 
                    id="name" 
                    type="text"
                    placeholder="Your name..."
                    required
                    className="w-full px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-primary focus:outline-none"
                     />
                  </div>
                  <div>
                    <label 
                    htmlFor="email"
                    className="block text-sm mb-2 font-medium">Email</label>
                    <input 
                    type="email"
                    placeholder="your.email@example.com"
                    required
                    className="w-full px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-primary focus:outline-none"
                      />
                  </div>
                  <div>
                    <label 
                    htmlFor="message"
                    className="block text-sm mb-2 font-medium">Message</label>
                    <textarea
                    placeholder="Your message..."
                    required
                    className="w-full px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-primary focus:outline-none resize-none h-32"
                     />
                  </div>
                  <button
                  type="submit"
                  className="w-full px-6 py-3 bg-primary text-white rounded-full hover:bg-primary-dark transition-colors duration-300"
                   >
                    Send Message
                  </button>2
                </form>
              </div>
            </div>
      </div>  
    </section>
  )
}

export default Contact
