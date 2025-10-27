import Hero from './components/Hero';
import MenuSection from './components/MenuSection';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b border-border sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-primary">Fusion Bites</h1>
              <span className="ml-2 text-sm text-secondary bg-accent px-2 py-1 rounded-full">Cloud Kitchen</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#menu" className="text-foreground hover:text-primary transition-colors">Menu</a>
              <a href="#about" className="text-foreground hover:text-primary transition-colors">About</a>
              <a href="#contact" className="text-foreground hover:text-primary transition-colors">Contact</a>
              <button className="bg-primary hover:bg-primary-dark text-white px-6 py-2 rounded-full transition-colors font-medium">
                Order Now
              </button>
            </div>
            <div className="md:hidden">
              <button className="bg-primary hover:bg-primary-dark text-white px-4 py-2 rounded-full transition-colors font-medium">
                Order
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <Hero />

      {/* Menu Section */}
      <MenuSection />

      {/* About Section */}
      <section id="about" className="py-16 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">About Fusion Bites</h2>
            <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
              We're a cloud kitchen specializing in Asian-Mexican fusion cuisine. Our chefs combine the bold flavors 
              of Korean, Thai, and Japanese cooking with the comfort and warmth of Mexican dishes, creating unique 
              and delicious meals delivered fresh to your door.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🍜</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Fresh Ingredients</h3>
              <p className="text-foreground/70">We source the freshest ingredients daily to ensure every dish is perfect.</p>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🚚</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Fast Delivery</h3>
              <p className="text-foreground/70">Hot, fresh meals delivered to your door in 30 minutes or less.</p>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">👨‍🍳</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Expert Chefs</h3>
              <p className="text-foreground/70">Our experienced chefs create innovative fusion dishes you won't find anywhere else.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Get In Touch</h2>
            <p className="text-lg text-foreground/80">Ready to order? Have questions? We're here to help!</p>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <span className="text-primary mr-3">📞</span>
                  <span>(555) 123-BITE</span>
                </div>
                <div className="flex items-center">
                  <span className="text-primary mr-3">📧</span>
                  <span>orders@fusionbites.com</span>
                </div>
                <div className="flex items-center">
                  <span className="text-primary mr-3">📍</span>
                  <span>Cloud Kitchen - Delivery & Pickup Available</span>
                </div>
                <div className="flex items-center">
                  <span className="text-primary mr-3">🕒</span>
                  <span>Daily: 11:00 AM - 10:00 PM</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-6">Order Online</h3>
              <p className="text-foreground/80 mb-6">
                Place your order through our website or call us directly. We accept all major credit cards and offer contactless delivery.
              </p>
              <button className="bg-primary hover:bg-primary-dark text-white px-8 py-3 rounded-full transition-colors font-medium text-lg">
                Start Your Order
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}

