export default function Footer() {
  return (
    <footer className="bg-secondary text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold text-accent mb-4">Fusion Bites</h3>
            <p className="text-white/80 mb-4 max-w-md">
              Bringing you the best of Asian-Mexican fusion cuisine, delivered fresh from our cloud kitchen. 
              Experience bold flavors and innovative dishes that celebrate both culinary traditions.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white/60 hover:text-accent transition-colors">
                📘 Facebook
              </a>
              <a href="#" className="text-white/60 hover:text-accent transition-colors">
                📷 Instagram
              </a>
              <a href="#" className="text-white/60 hover:text-accent transition-colors">
                🐦 Twitter
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-accent mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#menu" className="text-white/80 hover:text-white transition-colors">Menu</a></li>
              <li><a href="#about" className="text-white/80 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#contact" className="text-white/80 hover:text-white transition-colors">Contact</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Nutrition Info</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Allergen Info</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-accent mb-4">Contact</h4>
            <ul className="space-y-2 text-white/80">
              <li>📞 (555) 123-BITE</li>
              <li>📧 orders@fusionbites.com</li>
              <li>🕒 Daily: 11 AM - 10 PM</li>
              <li>🚚 Delivery & Pickup</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center">
          <p className="text-white/60">
            © 2024 Fusion Bites Cloud Kitchen. All rights reserved. | 
            <a href="#" className="hover:text-accent transition-colors ml-1">Privacy Policy</a> | 
            <a href="#" className="hover:text-accent transition-colors ml-1">Terms of Service</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
