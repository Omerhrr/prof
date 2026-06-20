"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, ZoomIn, Grid3x3 } from "lucide-react";
import { Button } from "@/components/ui/button";

// All 41 gallery images from the zip
const galleryImages = Array.from({ length: 41 }, (_, i) => ({
  src: `/images/gallery/photo_2026-06-20_12-${i < 30 ? "23" : "24"}-${String(i < 30 ? 30 + i * 3 : (i - 30) * 3 + 9).padStart(2, "0")}.jpg`,
  alt: `PROF Charity & Care Foundation outreach activity ${i + 1} in Kano, Northern Nigeria`,
}));

// Fix the naming to match actual files
const actualGalleryImages: { src: string; alt: string }[] = [];
const files = [
  "12-23-30", "12-23-33", "12-23-35", "12-23-38", "12-23-40",
  "12-23-42", "12-23-44", "12-23-46", "12-23-49", "12-23-51",
  "12-23-52", "12-23-54", "12-23-57", "12-24-00", "12-24-03",
  "12-24-09", "12-24-11", "12-24-14", "12-24-22", "12-24-24",
  "12-24-26", "12-24-28", "12-24-30", "12-24-32", "12-24-34",
  "12-24-36", "12-24-39", "12-24-41", "12-24-43", "12-24-46",
  "12-24-49", "12-24-51", "12-24-53", "12-24-56", "12-24-59",
  "12-25-02", "12-25-05", "12-25-08", "12-25-12", "12-25-25",
  "12-25-28",
];
files.forEach((time, i) => {
  actualGalleryImages.push({
    src: `/images/gallery/photo_2026-06-20_${time}.jpg`,
    alt: `PROF Charity outreach ${i + 1} — food and relief distribution in Kano, Northern Nigeria`,
  });
});

const captions = [
  "Volunteers preparing relief packages for distribution to community members",
  "Food distribution event with community members holding thank you signs",
  "PROF Charity volunteers distributing essential supplies to families",
  "Children and families receiving food packages during community outreach",
  "Community gathering for charity food distribution under trees in Kano",
  "Volunteers in green PROF shirts organizing aid supplies for distribution",
  "Children holding thank you signs after receiving food packages",
  "Food distribution event with community members in rural Kano area",
  "PROF Charity team distributing essential items to local residents",
  "Community members showing gratitude during food distribution outreach",
  "Families receiving essential food supplies from PROF volunteers",
  "Distribution of food packages to underserved community members",
  "Charity outreach volunteers engaging with children and families",
  "Food and relief supplies being distributed to local community",
  "PROF volunteers delivering essential items to community households",
  "Community outreach event with food distribution in Northern Nigeria",
  "Volunteer distributing supplies to women and children in the community",
  "Food aid distribution to children during PROF charity outreach program",
  "Community members receiving packaged food items from PROF volunteers",
  "PROF charity team distributing essential supplies in Kano community",
  "Food distribution to families at a community outreach event",
  "Volunteers handing out food packages to local community members",
  "Community food distribution event organized by PROF Charity Foundation",
  "Food and essential supplies distribution to underserved communities",
  "PROF volunteers distributing aid items to community families",
  "Children and adults receiving food packages during charity outreach",
  "Food distribution activity in local community by PROF team members",
  "Community outreach event with food and relief supplies distribution",
  "PROF Charity distributing essential items to community in Kano State",
  "Aid distribution event with food packages for local families",
  "Volunteers organizing food distribution for community members",
  "PROF team distributing food supplies during community outreach",
  "Community food aid distribution by PROF Charity Foundation",
  "Food packages being distributed to families by charity volunteers",
  "PROF charity food distribution reaching local community members",
  "Aid distribution to children and families in Northern Nigeria",
  "Food supplies distribution during community outreach program",
  "PROF volunteers distributing meals and essential items",
  "Food distribution reaching underserved communities in Kano",
  "Community relief distribution organized by PROF Charity",
  "Food aid delivery to community members by PROF Foundation team",
  "Final distribution event with food packages for local families",
];

const categories = ["All Photos", "Food Distribution", "Community Outreach", "Volunteers"];

export function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState("All Photos");
  const [visibleCount, setVisibleCount] = useState(12);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const loadMore = useCallback(() => {
    setVisibleCount((prev) => Math.min(prev + 8, actualGalleryImages.length));
  }, []);

  const navigateImage = useCallback(
    (direction: "prev" | "next") => {
      if (selectedImage === null) return;
      setSelectedImage((prev) =>
        prev !== null
          ? direction === "next"
            ? (prev + 1) % actualGalleryImages.length
            : (prev - 1 + actualGalleryImages.length) % actualGalleryImages.length
          : null
      );
    },
    [selectedImage]
  );

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImage === null) return;
      if (e.key === "Escape") setSelectedImage(null);
      if (e.key === "ArrowLeft") navigateImage("prev");
      if (e.key === "ArrowRight") navigateImage("next");
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImage, navigateImage]);

  const filteredImages =
    activeCategory === "All Photos"
      ? actualGalleryImages
      : actualGalleryImages;

  return (
    <section id="gallery" className="py-20 md:py-28 bg-gradient-to-b from-charity-light/10 to-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-charity/10 border border-charity/20 text-charity-dark text-sm font-medium mb-4">
            <Grid3x3 className="w-4 h-4" />
            Photo Booth
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground tracking-tight">
            Our Work in Action
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Browse through moments captured from our charity outreach programs across
            Kano and Northern Nigeria. Every photo tells a story of hope and compassion.
          </p>
        </motion.div>

        {/* Category Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-10"
        >
          {categories.map((cat) => (
            <Button
              key={cat}
              variant={activeCategory === cat ? "default" : "outline"}
              onClick={() => {
                setActiveCategory(cat);
                setVisibleCount(12);
              }}
              className={
                activeCategory === cat
                  ? "bg-charity hover:bg-charity-dark text-white shadow-md shadow-charity/20 rounded-xl"
                  : "border-charity/20 text-charity-dark hover:bg-charity-light/30 rounded-xl"
              }
            >
              {cat}
            </Button>
          ))}
        </motion.div>

        {/* Photo count indicator */}
        <div className="flex justify-between items-center mb-6">
          <p className="text-sm text-muted-foreground">
            Showing {Math.min(visibleCount, filteredImages.length)} of{" "}
            {filteredImages.length} photos
          </p>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <ZoomIn className="w-4 h-4" />
            Click to enlarge
          </div>
        </div>

        {/* Photo Grid (Masonry-like) */}
        <div className="gallery-grid">
          {filteredImages.slice(0, visibleCount).map((image, i) => (
            <motion.div
              key={image.src}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 * (i % 8), duration: 0.4 }}
              className="gallery-item"
              onClick={() => setSelectedImage(i)}
            >
              <div className="relative group overflow-hidden rounded-xl">
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover rounded-xl transition-all duration-500 group-hover:scale-105 group-hover:brightness-95"
                  loading={i < 8 ? "eager" : "lazy"}
                  sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-charity-dark/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-white text-xs font-medium line-clamp-2">
                    {captions[i] || image.alt}
                  </p>
                </div>
                <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-8 h-8 bg-white/90 backdrop-blur-sm rounded-lg flex items-center justify-center">
                    <ZoomIn className="w-4 h-4 text-charity-dark" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Load More Button */}
        {visibleCount < filteredImages.length && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.6 }}
            className="text-center mt-12"
          >
            <Button
              onClick={loadMore}
              size="lg"
              variant="outline"
              className="border-charity/30 text-charity-dark hover:bg-charity hover:text-white rounded-xl px-8 transition-all duration-300"
            >
              Load More Photos ({filteredImages.length - visibleCount} remaining)
            </Button>
          </motion.div>
        )}

        {/* Lightbox Modal */}
        <AnimatePresence>
          {selectedImage !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm"
              onClick={() => setSelectedImage(null)}
            >
              {/* Close button */}
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center transition-colors"
              >
                <X className="w-5 h-5 text-white" />
              </button>

              {/* Previous Button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  navigateImage("prev");
                }}
                className="absolute left-4 z-10 w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center transition-colors"
              >
                <ChevronLeft className="w-6 h-6 text-white" />
              </button>

              {/* Next Button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  navigateImage("next");
                }}
                className="absolute right-4 z-10 w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center transition-colors"
              >
                <ChevronRight className="w-6 h-6 text-white" />
              </button>

              {/* Image */}
              <motion.div
                key={selectedImage}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="relative max-w-5xl max-h-[85vh] w-full mx-8"
                onClick={(e) => e.stopPropagation()}
              >
                <Image
                  src={filteredImages[selectedImage].src}
                  alt={filteredImages[selectedImage].alt}
                  width={1200}
                  height={800}
                  className="w-full h-auto max-h-[80vh] object-contain rounded-xl"
                  sizes="100vw"
                  priority
                />
                {/* Caption */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent rounded-b-xl p-6">
                  <p className="text-white text-sm md:text-base font-medium">
                    {captions[selectedImage] || filteredImages[selectedImage].alt}
                  </p>
                  <p className="text-white/60 text-xs mt-1">
                    Photo {selectedImage + 1} of {filteredImages.length}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
