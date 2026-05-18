export default function AAStudioWebsite() {
  const products = [
    {
      name: 'Oversized Hoodie',
      price: 'Rs. 3,499',
      image:
        'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=1200&auto=format&fit=crop',
    },
    {
      name: 'Streetwear T-Shirt',
      price: 'Rs. 1,999',
      image:
        'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?q=80&w=1200&auto=format&fit=crop',
    },
    {
      name: 'Women Fashion Set',
      price: 'Rs. 4,299',
      image:
        'https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=1200&auto=format&fit=crop',
    },
  ];

  return (
    <div className="bg-white text-black min-h-screen font-sans">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-8 py-5 border-b sticky top-0 bg-white z-50">
        <h1 className="text-3xl font-bold tracking-wide">AA Studio</h1>

        <div className="hidden md:flex gap-8 text-sm font-medium">
          <a href="#home" className="hover:text-gray-500">Home</a>
          <a href="#collection" className="hover:text-gray-500">Collection</a>
          <a href="#about" className="hover:text-gray-500">About</a>
          <a href="#contact" className="hover:text-gray-500">Contact</a>
        </div>

        <button className="bg-black text-white px-5 py-2 rounded-2xl hover:opacity-90 transition">
          Shop Now
        </button>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="relative h-[85vh] flex items-center justify-center text-center"
      >
        <img
          src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1600&auto=format&fit=crop"
          alt="Fashion Banner"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative z-10 text-white px-6">
          <h2 className="text-5xl md:text-7xl font-bold mb-6">
            New Generation Fashion
          </h2>

          <p className="text-lg md:text-2xl mb-8 max-w-2xl mx-auto">
            Premium streetwear & modern fashion for boys and girls.
          </p>

          <button className="bg-white text-black px-8 py-4 rounded-2xl text-lg font-semibold hover:scale-105 transition">
            Explore Collection
          </button>
        </div>
      </section>

      {/* Collection */}
      <section id="collection" className="py-20 px-8 max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold mb-3">Featured Collection</h2>
          <p className="text-gray-600">
            Trendy outfits designed for modern fashion lovers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition"
            >
              <img
                src={product.image}
                alt={product.name}
                className="h-96 w-full object-cover"
              />

              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2">
                  {product.name}
                </h3>

                <p className="text-gray-600 mb-4">{product.price}</p>

                <button className="w-full bg-black text-white py-3 rounded-2xl hover:opacity-90 transition">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* About */}
      <section
        id="about"
        className="bg-black text-white py-20 px-8 text-center"
      >
        <h2 className="text-4xl font-bold mb-6">About AA Studio</h2>

        <p className="max-w-3xl mx-auto text-lg leading-8 text-gray-300">
          AA Studio is a modern clothing brand focused on premium quality,
          trendy designs, and affordable fashion for the new generation.
          Designed for style lovers who want confidence and comfort together.
        </p>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 px-8 text-center">
        <h2 className="text-4xl font-bold mb-6">Contact Us</h2>

        <p className="text-gray-600 mb-3">WhatsApp: 0322-2690927</p>
        <p className="text-gray-600 mb-8">Instagram: @aastudio.pk</p>

        <button className="bg-black text-white px-8 py-4 rounded-2xl hover:opacity-90 transition">
          Order on WhatsApp
        </button>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 py-6 text-center text-gray-600 text-sm">
        © 2026 AA Studio — All Rights Reserved.
      </footer>
    </div>
  );
}
