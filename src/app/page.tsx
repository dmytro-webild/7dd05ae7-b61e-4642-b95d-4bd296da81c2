"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactText from '@/components/sections/contact/ContactText';
import FeatureCardMedia from '@/components/sections/feature/FeatureCardMedia';
import FooterCard from '@/components/sections/footer/FooterCard';
import HeroLogoBillboard from '@/components/sections/hero/HeroLogoBillboard';
import InlineImageSplitTextAbout from '@/components/sections/about/InlineImageSplitTextAbout';
import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';
import ProductCardFour from '@/components/sections/product/ProductCardFour';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import TeamCardEleven from '@/components/sections/team/TeamCardEleven';
import TestimonialCardThirteen from '@/components/sections/testimonial/TestimonialCardThirteen';
import { Facebook, Instagram, Twitter } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="shift-hover"
        defaultTextAnimation="reveal-blur"
        borderRadius="pill"
        contentWidth="compact"
        sizing="largeSmall"
        background="noise"
        cardStyle="glass-depth"
        primaryButtonStyle="gradient"
        secondaryButtonStyle="layered"
        headingFontWeight="medium"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleFullscreen
      navItems={[
        {
          name: "Home",
          id: "#hero",
        },
        {
          name: "About",
          id: "#about",
        },
        {
          name: "Menu",
          id: "#menu",
        },
        {
          name: "Team",
          id: "#team",
        },
        {
          name: "Reviews",
          id: "#testimonials",
        },
        {
          name: "Contact",
          id: "#contact",
        },
      ]}
      logoSrc="http://img.b2bpic.net/free-vector/vintage-golden-art-nouveau-badge-vector_53876-57479.jpg"
      logoAlt="Le Bernardin Logo"
      brandName="Le Bernardin"
      button={{
        text: "Reserve Now",
        href: "#contact",
      }}
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroLogoBillboard
      background={{
        variant: "plain",
      }}
      logoText="Le Bernardin"
      description="Experience three decades of Michelin-starred innovation. Reserve your table at New York's most celebrated seafood destination."
      buttons={[
        {
          text: "Reserve Now",
          href: "#contact",
        },
      ]}
      buttonAnimation="slide-up"
      imageSrc="http://img.b2bpic.net/free-photo/front-view-japanese-fried-gedza-dumplings-sauce-with-greens-plate_141793-11303.jpg"
      imageAlt="Exquisite plated seafood dish at Le Bernardin"
      mediaAnimation="opacity"
      frameStyle="card"
    />
  </div>

  <div id="about" data-section="about">
      <InlineImageSplitTextAbout
      useInvertedBackground={false}
      heading={[
        {
          type: "text",
          content: "Our Legacy of Culinary Excellence",
        },
        {
          type: "image",
          src: "http://img.b2bpic.net/free-photo/medium-shot-professional-chef-posing_23-2151232163.jpg",
          alt: "Portrait of Chef Eric Ripert",
        },
      ]}
      buttons={[
        {
          text: "Explore Our Story",
          href: "#",
        },
      ]}
      buttonAnimation="slide-up"
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardMedia
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={true}
      features={[
        {
          id: "fresh-ingredients",
          title: "Ocean's Bounty",
          description: "We source the freshest, highest-quality seafood from around the globe, ensuring unparalleled flavor and texture.",
          tag: "Ingredients",
          imageSrc: "http://img.b2bpic.net/free-photo/octopus-tentacles_23-2147625952.jpg",
          imageAlt: "Fresh, vibrant seafood ingredients",
        },
        {
          id: "artful-plating",
          title: "Visual Symphony",
          description: "Each plate is a masterpiece, meticulously composed to delight the eye as much as the palate.",
          tag: "Presentation",
          imageSrc: "http://img.b2bpic.net/free-photo/front-view-cooked-squashes-designed-meal-inside-plate-grey-space_140725-83768.jpg",
          imageAlt: "Chef artfully plating a gourmet dish",
        },
        {
          id: "wine-pairing",
          title: "Perfect Harmony",
          description: "Our expert sommelier curates an extensive wine list to complement every nuance of our seafood creations.",
          tag: "Sommelier",
          imageSrc: "http://img.b2bpic.net/free-photo/glass-red-wine-surrounded-with-candles-romantic-atmosphere_140725-10699.jpg",
          imageAlt: "Elegant wine glass with a gourmet dish",
        },
      ]}
      title="Culinary Mastery & Artistry"
      description="At Le Bernardin, every dish is a testament to fresh ingredients, meticulous technique, and an unwavering pursuit of perfection."
    />
  </div>

  <div id="menu" data-section="menu">
      <ProductCardFour
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="two-columns-alternating-heights"
      useInvertedBackground={false}
      products={[
        {
          id: "scallops",
          name: "Pan-Seared Scallops",
          price: "Market Price",
          variant: "With Truffle & Celery Root",
          imageSrc: "http://img.b2bpic.net/free-photo/steam-fish-fillet-meat-with-lemon-spicy-sauce_1203-9401.jpg",
          imageAlt: "Pan-seared scallops",
        },
        {
          id: "branzino",
          name: "Grilled Branzino",
          price: "Market Price",
          variant: "With Fennel & Herbs",
          imageSrc: "http://img.b2bpic.net/free-photo/seabass-barramundi-fish-meat-steak_1203-9042.jpg",
          imageAlt: "Grilled Branzino filet",
        },
        {
          id: "lobster",
          name: "Classic Lobster Thermidor",
          price: "Market Price",
          variant: "Rich & Creamy",
          imageSrc: "http://img.b2bpic.net/free-photo/young-handsome-chef-holding-uncooked-crayfish-isolated_273609-48032.jpg",
          imageAlt: "Lobster Thermidor",
        },
        {
          id: "oysters",
          name: "Seasonal Oyster Selection",
          price: "Market Price",
          variant: "From Pristine Waters",
          imageSrc: "http://img.b2bpic.net/free-photo/couple-is-dating-restaurant_53876-47107.jpg",
          imageAlt: "Gourmet oyster platter",
        },
        {
          id: "tuna-carpaccio",
          name: "Tuna Carpaccio",
          price: "Market Price",
          variant: "Delicate & Flavorful",
          imageSrc: "http://img.b2bpic.net/free-photo/food-salad-cherry-vegetable-fish_1203-6215.jpg",
          imageAlt: "Tuna Carpaccio",
        },
        {
          id: "black-cod",
          name: "Miso Glazed Black Cod",
          price: "Market Price",
          variant: "Umami Rich",
          imageSrc: "http://img.b2bpic.net/free-photo/steam-fish-fillet-meat-with-lemon-spicy-sauce_1203-9402.jpg",
          imageAlt: "Miso Glazed Black Cod",
        },
      ]}
      title="Signature Creations"
      description="Savor a selection of our most renowned dishes, showcasing the purest expression of seafood."
    />
  </div>

  <div id="team" data-section="team">
      <TeamCardEleven
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={true}
      groups={[
        {
          id: "culinary-team",
          groupTitle: "The Visionaries",
          members: [
            {
              id: "chef-ripert",
              title: "Eric Ripert",
              subtitle: "Chef & Co-Owner",
              detail: "A celebrated figure in the culinary world, Chef Ripert is renowned for his mastery of seafood and his three-Michelin-starred vision.",
              imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-professional-chef-posing_23-2151232162.jpg",
              imageAlt: "Chef Eric Ripert",
            },
            {
              id: "pastry-chef",
              title: "Thomas Raquel",
              subtitle: "Executive Pastry Chef",
              detail: "Chef Raquel crafts innovative and delightful desserts that provide a perfect culmination to your dining experience.",
              imageSrc: "http://img.b2bpic.net/free-photo/portrait-male-chef-kitchen-holding-plate-dessert_23-2149646276.jpg",
              imageAlt: "Executive Pastry Chef Thomas Raquel",
            },
            {
              id: "sommelier",
              title: "Alexandre Ringler",
              subtitle: "Wine Director",
              detail: "Alexandre's expertise ensures every wine pairing elevates the flavors of our menu to new heights.",
              imageSrc: "http://img.b2bpic.net/free-photo/front-view-man-holding-glass-wine_23-2148060598.jpg",
              imageAlt: "Wine Director Alexandre Ringler",
            },
          ],
          imageSrc: "http://img.b2bpic.net/free-vector/vintage-golden-art-nouveau-badge-vector_53876-57479.jpg",
          imageAlt: "professional chef headshot",
        },
      ]}
      title="Meet Our Culinary Maestros"
      description="Behind every exquisite dish is a team of dedicated professionals committed to perfection."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardThirteen
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "1",
          name: "Sarah Johnson",
          handle: "@MichelinGuide",
          testimonial: "Le Bernardin consistently delivers an ethereal dining experience. The seafood is simply divine, prepared with an artistry that is unmatched.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/person-happy-woman-clanging-glasses-wine-table-cafe_23-2148016787.jpg",
          imageAlt: "Sarah Johnson",
        },
        {
          id: "2",
          name: "Michael Chen",
          handle: "@FoodieNYC",
          testimonial: "An unforgettable evening! Every course was a revelation, perfectly balanced and exquisitely presented. A true culinary pilgrimage.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/elegant-young-man-table-restaurant_23-2147689186.jpg",
          imageAlt: "Michael Chen",
        },
        {
          id: "3",
          name: "Emily Rodriguez",
          handle: "@NYCDining",
          testimonial: "The service is impeccable, the ambiance serene, and the food... pure poetry. Le Bernardin remains my benchmark for fine dining.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/happy-smiling-couple-young-adult-feeding-each-other-with-sushi-restaurant_496169-1906.jpg",
          imageAlt: "Emily Rodriguez",
        },
        {
          id: "4",
          name: "David Kim",
          handle: "@GourmetCritic",
          testimonial: "Chef Ripert's vision shines through in every detail. It’s not just a meal; it’s an immersive journey into the delicate world of seafood.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/female-chef-putting-sauce-dish_23-2148763119.jpg",
          imageAlt: "David Kim",
        },
        {
          id: "5",
          name: "Jessica Lee",
          handle: "@TravelFoodie",
          testimonial: "Worth every penny and every minute of planning. A pinnacle of gastronomic achievement in New York City.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/adorable-lovely-woman-fashion-clothes-is-sitting-open-air-cafe-is-using-smartphone-waiting-friends-city-lights-background_291650-842.jpg",
          imageAlt: "Jessica Lee",
        },
      ]}
      showRating={true}
      title="Acclaimed by Connoisseurs"
      description="Hear what critics and delighted diners have to say about their unparalleled experiences at Le Bernardin."
    />
  </div>

  <div id="social-proof" data-section="social-proof">
      <SocialProofOne
      textboxLayout="default"
      useInvertedBackground={true}
      names={[
        "Michelin Guide (3 Stars)",
        "The New York Times (4 Stars)",
        "Forbes Travel Guide (5 Stars)",
        "Zagat Survey (Top Rated)",
        "Wine Spectator (Grand Award)",
        "James Beard Foundation",
        "Relais & Châteaux",
      ]}
      title="Prestigious Recognition"
      description="Celebrating decades of unparalleled acclaim and unwavering commitment to excellence."
      showCard={true}
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactText
      useInvertedBackground={false}
      background={{
        variant: "plain",
      }}
      text="Planning a special occasion or private event? Our dedicated team is ready to assist you in creating an unforgettable experience. Contact us for bespoke arrangements."
      buttons={[
        {
          text: "Inquire About Events",
          href: "#",
        },
        {
          text: "View Our Location",
          href: "#",
        },
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterCard
      logoText="Le Bernardin"
      copyrightText="© 2024 Le Bernardin. All rights reserved."
      socialLinks={[
        {
          icon: Facebook,
          href: "https://facebook.com/lebernardin",
          ariaLabel: "Facebook",
        },
        {
          icon: Instagram,
          href: "https://instagram.com/lebernardinny",
          ariaLabel: "Instagram",
        },
        {
          icon: Twitter,
          href: "https://twitter.com/lebernardinny",
          ariaLabel: "Twitter",
        },
      ]}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
