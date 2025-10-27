import OrderButton from './OrderButton';

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-primary/10 via-accent/5 to-secondary/10 py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Where <span className="text-primary">Asian</span> Meets{' '}
            <span className="text-secondary">Mexican</span>
          </h1>
          <p className="text-xl sm:text-2xl text-foreground/80 mb-8 max-w-3xl mx-auto">
            Experience the bold fusion of Korean BBQ, Thai spices, and Mexican comfort food. 
            Delivered fresh from our cloud kitchen to your door.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <OrderButton size="large" />
            <button className="px-8 py-3 border-2 border-primary text-primary hover:bg-primary hover:text-white transition-colors rounded-full font-medium">
              View Menu
            </button>
          </div>
          
          {/* Featured Dishes Preview */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-16">
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">🌮</div>
              <h3 className="text-lg font-semibold mb-2">Korean BBQ Tacos</h3>
              <p className="text-foreground/70 text-sm">Marinated bulgogi beef with kimchi slaw</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">🍜</div>
              <h3 className="text-lg font-semibold mb-2">Ramen Burrito</h3>
              <p className="text-foreground/70 text-sm">Tonkotsu ramen wrapped in a warm tortilla</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">🍛</div>
              <h3 className="text-lg font-semibold mb-2">Thai Curry Bowl</h3>
              <p className="text-foreground/70 text-sm">Green curry with jasmine rice and cilantro</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
