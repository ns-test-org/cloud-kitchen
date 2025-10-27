import OrderButton from './OrderButton';

const menuItems = [
  {
    id: 1,
    name: "Korean BBQ Tacos",
    description: "Tender bulgogi beef with kimchi slaw, sesame seeds, and gochujang aioli in soft corn tortillas",
    price: "$14.99",
    category: "Tacos",
    spicy: true,
    emoji: "🌮"
  },
  {
    id: 2,
    name: "Ramen Burrito",
    description: "Rich tonkotsu ramen noodles with chashu pork, soft-boiled egg, and nori wrapped in a flour tortilla",
    price: "$16.99",
    category: "Burritos",
    spicy: false,
    emoji: "🌯"
  },
  {
    id: 3,
    name: "Thai Curry Bowl",
    description: "Fragrant green curry with coconut milk, Thai basil, and your choice of protein over jasmine rice",
    price: "$15.99",
    category: "Bowls",
    spicy: true,
    emoji: "🍛"
  },
  {
    id: 4,
    name: "Bulgogi Quesadilla",
    description: "Marinated Korean beef with melted cheese, caramelized onions, and scallions in a crispy tortilla",
    price: "$13.99",
    category: "Quesadillas",
    spicy: false,
    emoji: "🧀"
  },
  {
    id: 5,
    name: "Miso Glazed Carnitas",
    description: "Slow-cooked pork shoulder with miso glaze, pickled daikon, and cilantro in warm tortillas",
    price: "$15.99",
    category: "Tacos",
    spicy: false,
    emoji: "🥩"
  },
  {
    id: 6,
    name: "Kimchi Fried Rice Bowl",
    description: "Spicy fermented kimchi fried rice with spam, fried egg, and sesame oil drizzle",
    price: "$12.99",
    category: "Bowls",
    spicy: true,
    emoji: "🍚"
  }
];

export default function MenuSection() {
  return (
    <section id="menu" className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">Our Fusion Menu</h2>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            Each dish is carefully crafted to blend the best of Asian and Mexican flavors, 
            creating unique taste experiences you won't find anywhere else.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuItems.map((item) => (
            <div key={item.id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <span className="text-3xl mr-3">{item.emoji}</span>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground">{item.name}</h3>
                      <div className="flex items-center mt-1">
                        <span className="text-sm text-primary bg-primary/10 px-2 py-1 rounded-full">
                          {item.category}
                        </span>
                        {item.spicy && (
                          <span className="text-sm text-red-600 bg-red-50 px-2 py-1 rounded-full ml-2">
                            🌶️ Spicy
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                  <span className="text-2xl font-bold text-primary">{item.price}</span>
                </div>
                <p className="text-foreground/70 mb-6 leading-relaxed">{item.description}</p>
                <OrderButton item={item.name} />
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-foreground/80 mb-6">
            All dishes are made fresh to order with premium ingredients. 
            Vegetarian and vegan options available upon request.
          </p>
          <OrderButton size="large" text="View Full Menu & Order" />
        </div>
      </div>
    </section>
  );
}
