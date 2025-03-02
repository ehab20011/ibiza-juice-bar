"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import PageTransition from './components/PageTransition';

export default function Home() {
  // -----------------------------------
  // Optional: Simple fade-in effect on scroll
  // -----------------------------------
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setFadeIn(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <PageTransition>
      <main className={`flex flex-col min-h-screen ${fadeIn ? "opacity-100" : "opacity-0"} transition-opacity duration-700`}>
        
        {/* ========== HERO SECTION ========== */}
        <section className="relative w-full h-[80vh] flex items-center justify-center text-center">
          {/* Background Image */}
          <Image
            src="/ibiza.JPG"
            alt="Ibiza Juice Bar Hero"
            fill
            quality={100}
            className="object-cover object-center"
          />
          {/* Dark overlay (optional) */}
          <div className="absolute inset-0 bg-black/40" />

          {/* Hero Content */}
          <div className="relative z-10 flex flex-col items-center text-white p-4">
            <h1 className="text-5xl sm:text-7xl font-extrabold mb-4 tracking-tight drop-shadow-lg">
              Fresh & Vibrant Juices
            </h1>
            <p className="max-w-xl mb-8 text-base sm:text-xl text-gray-50 drop-shadow-lg">
              Start your day with a burst of flavor and nutrients—your body will thank you!
            </p>
            <div className="flex gap-4">
              <Link
                href="https://www.seamless.com/menu/ibiza-juice-bar-32-04b-30th-ave-queens/2299950"
                className="bg-yellow-400 text-black px-6 py-3 rounded-full font-semibold hover:bg-yellow-500 transition-colors shadow-md"
              >
                Order Now
              </Link>
              <Link
                href="./menu"
                className="bg-yellow-400 text-black px-6 py-3 rounded-full font-semibold hover:bg-yellow-500 transition-colors shadow-md"
              >
                View Menu
              </Link>
            </div>
          </div>
        </section>

        {/* ========== ABOUT SECTION (OPTIONAL) ========== */}
        <section className="bg-white py-16 px-6">
          <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Image / Graphic */}
            <div className="relative mx-auto w-full md:w-full pb-[200%] md:pb-[130%] max-w-[500px] md:max-w-none">
              <video 
                src="/hero-video.mp4"
                autoPlay 
                loop 
                muted 
                playsInline 
                className="absolute top-0 left-0 w-full h-full object-cover rounded-lg shadow-lg"
              />
            </div>

            {/* Text Content */}
            <div>
              <h2 className="text-4xl md:text-5xl font-extrabold text-black mb-4">
                Our Story
              </h2>
              <p className="text-gray-700 md:text-lg mb-4">
                Ibiza Juice Bar is proudly woman-owned and community-driven. Founded with a passion for wellness, we bring the freshest fruits, 
                veggies, and wholesome ingredients to the heart of Queens and Astoria.
              </p>
              <p className="text-gray-700 md:text-lg">
                Whether you're craving a classic green juice, a protein-packed smoothie, or a sweet treat, we've got you covered. Come taste the difference freshness makes!
              </p>
            </div>
          </div>
        </section>

        {/* ========== BEST SELLERS SECTION ========== */}
        <section className="bg-[#FFFBE8] py-16 px-6">
          <div className="max-w-screen-xl mx-auto">
            {/* Heading & Subheading */}
            <div className="mb-10 text-center">
              <h2 className="text-4xl md:text-5xl font-extrabold text-black mb-4">
                TRY OUR BEST SELLERS
              </h2>
              <p className="text-gray-700 md:text-lg">
                Fresh, vibrant, and packed with flavor. Discover our most popular items!
              </p>
            </div>

            {/* 3-Column Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* 1st Item */}
              <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition-shadow">
                <Image
                  src="/tropicana-acai.avif"
                  alt="Tropicana Acai Bowl with fresh toppings"
                  width={500}
                  height={350}
                  className="w-full h-auto rounded-lg"
                />
                <h3 className="text-2xl font-semibold text-black mt-4">
                  Tropicana Acai Bowl
                </h3>
                <p className="text-gray-700 mt-2">
                  Non-dairy blend. Topped with strawberry, mango, pineapple, and coconut flakes.
                </p>
                <Link
                  href="https://www.seamless.com/menu/ibiza-juice-bar-32-04b-30th-ave-queens/2299950/menu-item/2635839132?menu-item-options="
                  className="bg-yellow-400 text-black px-6 py-3 rounded-full font-semibold hover:bg-yellow-500 transition-colors mt-4 inline-block"
                >
                  Order Now
                </Link>
              </div>

              {/* 2nd Item */}
              <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition-shadow">
                <Image
                  src="/quesadilla.jpg"
                  alt="Chicken Quesadilla with side dips"
                  width={500}
                  height={350}
                  className="w-full h-auto rounded-lg"
                />
                <h3 className="text-2xl font-semibold text-black mt-4">
                  Chicken Quesadilla
                </h3>
                <p className="text-gray-700 mt-2">
                  Our signature grilled chicken with melted mozzarella cheese. Served with sour cream, salsa, and guac.
                </p>
                <Link
                  href="https://www.seamless.com/menu/ibiza-juice-bar-32-04b-30th-ave-queens/2299950/menu-item/18637034485?menu-item-options="
                  className="bg-yellow-400 text-black px-6 py-3 rounded-full font-semibold hover:bg-yellow-500 transition-colors mt-4 inline-block"
                >
                  Order Now
                </Link>
              </div>

              {/* 3rd Item */}
              <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition-shadow">
                <Image
                  src="/waffle.avif"
                  alt="Original Ibiza Waffle with toppings"
                  width={500}
                  height={350}
                  className="w-full h-auto rounded-lg"
                />
                <h3 className="text-2xl font-semibold text-black mt-4">
                  Original Ibiza Waffle
                </h3>
                <p className="text-gray-700 mt-2">
                  Classic waffle with powdered sugar, fresh berries, chocolate syrup, & side of maple syrup.
                </p>
                <Link
                  href="https://www.seamless.com/menu/ibiza-juice-bar-32-04b-30th-ave-queens/2299950/menu-item/9702409022?menu-item-options="
                  className="bg-yellow-400 text-black px-6 py-3 rounded-full font-semibold hover:bg-yellow-500 transition-colors mt-4 inline-block"
                >
                  Order Now
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ========== STAY CONNECTED SECTION ========== */}
        <section className="bg-white py-12 px-6">
          <div className="max-w-screen-md mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-extrabold text-black mb-4">
              Join Our Juice Community
            </h2>
            <p className="text-gray-700 md:text-lg mb-6">
              Follow us on social media for exclusive offers, new menu highlights, and behind-the-scenes peeks!
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              {/* Instagram */}
              <a
                href="https://www.instagram.com/ibizajuicebar/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-yellow-400 text-black px-6 py-2 rounded-full font-semibold hover:bg-yellow-500 transition-colors"
              >
                Instagram
              </a>

              {/* TikTok */}
              <a
                href="https://www.tiktok.com/@ibizajuicebar.nyc"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-yellow-400 text-black px-6 py-2 rounded-full font-semibold hover:bg-yellow-500 transition-colors"
              >
                TikTok
              </a>
            </div>
          </div>
        </section>


        {/* ========== PLACE YOUR ORDER SECTION ========== */}
        <section className="bg-[#FFFBE8] py-16 px-6">
          <div className="max-w-screen-xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-extrabold text-black mb-6">
                Place Your Order
              </h2>
              <div className="space-y-4">
                <p className="text-gray-700 md:text-lg">
                  Give us a call or Order Online and we'll have your food ready.
                </p>
                <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4 text-black">
                  <span className="text-xl">Call now</span>
                  <span className="text-xl text-black font-bold">
                    <a href="tel:347-829-3130">347-829-3130</a>
                  </span>
                  <span className="text-xl">or</span>
                  <Link
                    href="https://www.seamless.com/menu/ibiza-juice-bar-32-04b-30th-ave-queens/2299950"
                    className="text-yellow-600 hover:text-yellow-700 underline text-xl"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Order Online
                  </Link>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
              {/* Hours */}
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-2xl font-semibold text-black mb-4">Hours</h3>
                <div className="space-y-2">
                  <p className="text-gray-700 flex justify-between">
                    <span>Sunday</span>
                    <span>09:00 am - 09:00 pm</span>
                  </p>
                  <p className="text-gray-700 flex justify-between">
                    <span>Monday</span>
                    <span>08:00 am - 10:00 pm</span>
                  </p>
                  <p className="text-gray-700 flex justify-between">
                    <span>Tuesday</span>
                    <span>08:00 am - 10:00 pm</span>
                  </p>
                  <p className="text-gray-700 flex justify-between">
                    <span>Wednesday</span>
                    <span>08:00 am - 10:00 pm</span>
                  </p>
                  <p className="text-gray-700 flex justify-between">
                    <span>Thursday</span>
                    <span>08:00 am - 10:00 pm</span>
                  </p>
                  <p className="text-gray-700 flex justify-between">
                    <span>Friday</span>
                    <span>08:00 am - 10:00 pm</span>
                  </p>
                  <p className="text-gray-700 flex justify-between">
                    <span>Saturday</span>
                    <span>09:00 am - 10:00 pm</span>
                  </p>
                </div>
              </div>

              {/* Location */}
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-2xl font-semibold text-black mb-4">Our Location</h3>
                <div className="space-y-2">
                  <p className="text-gray-700">32-04 30th Ave,</p>
                  <p className="text-gray-700">Long Island City, NY 11102</p>
                </div>

                {/* Google Map Embed */}
                <div className="mt-4">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.6917713210427!2d-73.9217xxxx!3d40.7699xxxx!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259xxxyyyzzz%3A0xb0cf081bf7268653!2s32-04%2030th%20Ave%2C%20Astoria%2C%20NY%2011102%2C%20USA!5e0!3m2!1sen!2sus!4v1692302348798!5m2!1sen!2sus"
                    width="100%"
                    height="300"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="border rounded-md"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========== GOOGLE REVIEWS SECTION ========== */}
        <section className="bg-[#FFFBE8] py-16 px-6">
          <div className="max-w-screen-xl mx-auto">
            {/* Heading & Subheading */}
            <div className="mb-10 text-center">
              <h2 className="text-4xl md:text-5xl font-extrabold text-black mb-4">
                WHAT CUSTOMERS ARE SAYING
              </h2>
              <p className="text-gray-700 md:text-lg">
                Our guests can't get enough of our fresh juices, smoothies, and bowls!
              </p>
            </div>

            {/* 3-Column Grid of Reviews */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* 1st Review */}
              <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition-shadow">
                {/* Star Rating (5 stars example) */}
                <div className="flex items-center mb-4">
                  {Array.from({ length: 5 }).map((_, idx) => (
                    <svg
                      key={idx}
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      className="h-5 w-5 text-yellow-400"
                    >
                      <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.771 1.476 8.288L12 18.896l-7.412 4.469 1.476-8.288-6.064-5.771 8.332-1.151z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700">
                  "Ibiza Juice Bar in Astoria is a must-visit! Their fresh, flavorful juices and smoothies are top-notch, and the food is healthy and delicious. The staff is warm and welcoming, making the whole experience even better."
                </p>
                <p className="text-sm text-gray-500 mt-2">– José A. Martínez</p>
              </div>

              {/* 2nd Review */}
              <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-4">
                  {Array.from({ length: 5 }).map((_, idx) => (
                    <svg
                      key={idx}
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      className="h-5 w-5 text-yellow-400"
                    >
                      <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.771 1.476 8.288L12 18.896l-7.412 4.469 1.476-8.288-6.064-5.771 8.332-1.151z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700">
                  "Ibiza Juice Bar is an absolute gem! The juices and smoothies are not only delicious but also super fresh and packed with flavor. The vibe is relaxed and inviting, making it a perfect spot to recharge. Highly recommend!"
                </p>
                <p className="text-sm text-gray-500 mt-2">– Malvin Rodriguez</p>
              </div>

              {/* 3rd Review */}
              <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-4">
                  {Array.from({ length: 5 }).map((_, idx) => (
                    <svg
                      key={idx}
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      className="h-5 w-5 text-yellow-400"
                    >
                      <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.771 1.476 8.288L12 18.896l-7.412 4.469 1.476-8.288-6.064-5.771 8.332-1.151z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700">
                  "Stopped in for a smoothie and was surprised by the burst of flavor. The owner was extremely welcoming and recommended a few items for my next visit. I'll definitely be back for their açaí bowls."
                </p>
                <p className="text-sm text-gray-500 mt-2">– Aaliyah Sharif (Local Guide)</p>
              </div>
            </div>
          </div>
        </section>

        {/* ========== FOOTER ========== */}
        <footer className="mt-auto w-full bg-white border-t border-gray-200">
          <div className="max-w-screen-xl mx-auto py-4 flex flex-col md:flex-row items-center justify-between px-4">
            <p className="text-gray-500 text-sm">
              &copy; {new Date().getFullYear()} Ibiza Juice Bar. All rights reserved.
            </p>
            <div className="flex space-x-4 mt-2 md:mt-0">
              {/* Social Icons or Links (Optional) */}
              <Link href="https://www.instagram.com/ibizajuicebar/" className="text-gray-400 hover:text-gray-600 transition-colors">
                Instagram
              </Link>

              <Link href="https://www.tiktok.com/@ibizajuicebar.nyc" className="text-gray-400 hover:text-gray-600 transition-colors">
                TikTok
              </Link>
            </div>
          </div>
        </footer>
      </main>
    </PageTransition>
  );
}
