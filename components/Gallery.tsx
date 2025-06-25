import { ImageWithFallback } from './figma/ImageWithFallback'

const galleryImages = [
  {
    src: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    alt: 'Students in interactive classroom session',
    title: 'Interactive Learning'
  },
  {
    src: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    alt: 'One-on-one tutoring session',
    title: 'Personal Attention'
  },
  {
    src: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    alt: 'Group discussion and collaboration',
    title: 'Group Activities'
  },
  {
    src: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    alt: 'Student giving presentation',
    title: 'Public Speaking'
  },
  {
    src: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    alt: 'Business English workshop',
    title: 'Business English'
  },
  {
    src: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    alt: 'Graduation ceremony',
    title: 'Graduation Day'
  }
]

export function Gallery() {
  return (
    <section id="gallery" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Our Learning Environment</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Take a look at our modern facilities and vibrant learning community where students achieve their English goals.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {galleryImages.map((image, index) => (
            <div 
              key={index} 
              className="group relative overflow-hidden rounded-lg aspect-[4/3] hover:shadow-xl transition-all duration-300"
            >
              <ImageWithFallback
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300"></div>
              
              {/* Title */}
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="font-semibold text-lg">{image.title}</h3>
              </div>
            </div>
          ))}
        </div>

        {/* Virtual Tour CTA */}
        <div className="text-center mt-16">
          <div className="bg-primary/5 rounded-lg p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-semibold mb-4">Want to See More?</h3>
            <p className="text-muted-foreground mb-6">
              Schedule a virtual tour of our facilities and meet our amazing team of instructors.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors">
                Schedule Virtual Tour
              </button>
              <button className="px-6 py-3 border border-primary text-primary rounded-lg hover:bg-primary/5 transition-colors">
                Download Brochure
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}