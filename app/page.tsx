"use client";

import React from "react";
import { motion } from "framer-motion";
import { Youtube, Instagram, ShoppingBag, BookOpen, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 via-white to-white text-gray-900">
      <header className="sticky top-0 z-50 backdrop-blur bg-white/70 border-b">
        <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-full overflow-hidden bg-white">
  <img src="/logo.png" alt="Day by Day Audio logo" className="h-full w-full object-cover" />
</div>
            <span className="font-semibold tracking-tight">Day by Day Audio</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#home" className="hover:text-gray-700">Home</a>
            <a href="#audiobooks" className="hover:text-gray-700">Audiobooks</a>
            <a href="#blog" className="hover:text-gray-700">Blog</a>
            <a href="#shop" className="hover:text-gray-700">Shop</a>
            <a href="#about" className="hover:text-gray-700">About</a>
            <a href="#contact" className="hover:text-gray-700">Contact</a>
          </nav>
          <div className="flex items-center gap-2">
            <a aria-label="YouTube" href="https://www.youtube.com/@DayByDayAudio" target="_blank" rel="noreferrer" className="p-2 rounded-lg hover:bg-gray-100">
              <Youtube className="h-5 w-5" />
            </a>
            <a aria-label="Instagram" href="https://instagram.com/daybydayaudio" target="_blank" rel="noreferrer" className="p-2 rounded-lg hover:bg-gray-100">
              <Instagram className="h-5 w-5" />
            </a>
            <Button className="hidden md:inline-flex">Subscribe</Button>
          </div>
        </div>
      </header>

      <section id="home" className="relative isolate">
        <div className="absolute inset-0 -z-10">
          <div className="h-full w-full bg-gradient-to-br from-orange-100 via-amber-100 to-white" />
        </div>
        <div className="mx-auto max-w-7xl px-4 py-20">
              
       <motion.div
         initial={{ opacity: 0, y: 12 }}
         animate={{ opacity: 1, y: 0 }}
         transition={{ duration: 0.6 }}
         // @ts-ignore
         className="max-w-3xl"
         >
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">
              Fuel your mind, <span className="bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">one day at a time.</span>
            </h1>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl">
              Motivational audiobooks that inspire daily progress. Watch on YouTube, explore book links, and shop merch — all in one place.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="https://www.youtube.com/@DayByDayAudio" target="_blank" rel="noreferrer">
                <Button className="inline-flex items-center gap-2">
                  <Youtube className="h-4 w-4" /> Watch on YouTube
                </Button>
              </a>
              <a href="#shop">
                <Button variant="outline" className="inline-flex items-center gap-2">
                  <ShoppingBag className="h-4 w-4" /> Shop Merchandise
                </Button>
              </a>
              <a href="#blog">
                <Button variant="ghost" className="inline-flex items-center gap-2">
                  <BookOpen className="h-4 w-4" /> Read the Blog
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="audiobooks" className="mx-auto max-w-7xl px-4 py-14">
        <div className="flex items-end justify-between mb-6">
          <h2 className="text-2xl md:text-3xl font-bold">Featured Audiobooks</h2>
          <a href="#" className="text-sm text-gray-600 hover:text-gray-900 inline-flex items-center gap-1">View All <ArrowRight className="h-4 w-4" /></a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { title: "Think and Grow Rich", author: "Napoleon Hill" },
            { title: "As a Man Thinketh", author: "James Allen" },
            { title: "The Airbnb Way", author: "Joseph Michelli" },
          ].map((b, i) => (
            <Card key={i} className="rounded-2xl shadow-sm hover:shadow-md transition">
              <CardHeader>
                <img src="https://picsum.photos/800/450" alt="Audiobook cover" className="aspect-video rounded-xl object-cover bg-gray-100" />
                <CardTitle className="mt-4 text-lg">{b.title}</CardTitle>
                <p className="text-sm text-gray-500">by {b.author}</p>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-sm text-gray-600">A timeless classic distilled for daily motivation and actionable insights.</p>
                <div className="flex flex-wrap gap-2">
                  <Button size="sm">Listen on YouTube</Button>
                  <Button size="sm" variant="outline">Buy on Amazon</Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section id="blog" className="bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 py-14">
          <div className="flex items-end justify-between mb-6">
            <h2 className="text-2xl md:text-3xl font-bold">From the Journal</h2>
            <a href="#" className="text-sm text-gray-600 hover:text-gray-900 inline-flex items-center gap-1">Read the Blog <ArrowRight className="h-4 w-4" /></a>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <Card key={i} className="rounded-2xl shadow-sm hover:shadow-md transition">
                <CardHeader>
                  <img src="https://picsum.photos/800/500" alt="Blog thumbnail" className="aspect-[16/10] rounded-xl object-cover bg-gray-100" />
                  <CardTitle className="mt-4 text-lg">Weekly Insight #{i}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">Short excerpt from your latest post. Keep it inspiring and actionable for readers.</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="shop" className="mx-auto max-w-7xl px-4 py-14">
        <div className="flex items-end justify-between mb-6">
          <h2 className="text-2xl md:text-3xl font-bold">Featured Merchandise</h2>
          <a href="#" className="text-sm text-gray-600 hover:text-gray-900 inline-flex items-center gap-1">Visit the Shop <ArrowRight className="h-4 w-4" /></a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { name: "Stay Consistent Hoodie" },
            { name: "Day by Day Mug" },
            { name: "Mind Over Matter Journal" },
          ].map((p, i) => (
            <Card key={i} className="rounded-2xl shadow-sm hover:shadow-md transition">
              <CardHeader>
                <img src="https://picsum.photos/600" alt="Product image" className="aspect-square rounded-xl object-cover bg-gray-100" />
                <CardTitle className="mt-4 text-lg">{p.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">$—</span>
                  <Button size="sm" variant="outline">Shop Now</Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="bg-gradient-to-r from-amber-100/60 to-orange-100/60">
        <div className="mx-auto max-w-7xl px-4 py-12 grid gap-6 md:grid-cols-2 items-center">
          <div>
            <h3 className="text-2xl font-bold">Join the Day by Day community</h3>
            <p className="text-gray-600 mt-2">Get notified when new audiobooks drop, new posts go live, and merch launches.</p>
          </div>
          <form className="flex flex-col sm:flex-row gap-3">
            <input type="email" placeholder="Your email address" className="w-full sm:flex-1 rounded-xl border px-4 py-3" />
            <Button>Subscribe</Button>
          </form>
        </div>
      </section>

      <section id="about" className="mx-auto max-w-7xl px-4 py-14">
        <div className="grid gap-8 md:grid-cols-2 items-center">
          <img src="https://picsum.photos/1200/675" alt="About image" className="aspect-video rounded-2xl object-cover bg-gray-100" />
          <div>
            <h2 className="text-2xl md:text-3xl font-bold">About Day by Day Audio</h2>
            <p className="mt-3 text-gray-600">We bring timeless self-development classics to life through motivational audiobooks — presented by Day by Day Audio. Our mission is to make personal growth accessible for everyone, one day at a time.</p>
          </div>
        </div>
      </section>

      <section id="contact" className="bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 py-14 grid gap-8 md:grid-cols-2">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold">Contact</h2>
            <p className="mt-3 text-gray-600">Got feedback, collaboration ideas, or rights inquiries? Reach out below.</p>
            <div className="mt-6 flex items-center gap-3 text-sm text-gray-600">
              <a href="#" className="inline-flex items-center gap-2 hover:text-gray-900"><Youtube className="h-4 w-4" /> YouTube</a>
              <a href="#" className="inline-flex items-center gap-2 hover:text-gray-900"><Instagram className="h-4 w-4" /> Instagram</a>
              <a href="mailto:daybydayaudio@gmail.com" className="inline-flex items-center gap-2 hover:text-gray-900">daybydayaudio@gmail.com</a>
            </div>
          </div>
          <form className="bg-white rounded-2xl border p-6 shadow-sm grid gap-3">
            <input className="rounded-xl border px-4 py-3" placeholder="Your name" />
            <input className="rounded-xl border px-4 py-3" placeholder="Your email" />
            <textarea className="rounded-xl border px-4 py-3 min-h-[120px]" placeholder="Your message" />
            <Button>Send message</Button>
          </form>
        </div>
      </section>

      <footer className="border-t">
        <div className="mx-auto max-w-7xl px-4 py-10 text-sm text-gray-600 grid gap-6 md:grid-cols-2">
          <div>
            <p className="font-medium text-gray-800">Day by Day Audio</p>
            <p className="mt-2">© 2025 Day by Day Audio. All rights reserved.</p>
            <p className="mt-2">Disclaimer: As an Amazon Associate, we may earn from qualifying purchases.</p>
          </div>
          <div className="md:text-right space-x-4">
            <a href="#home" className="hover:text-gray-900">Home</a>
            <a href="#audiobooks" className="hover:text-gray-900">Audiobooks</a>
            <a href="#blog" className="hover:text-gray-900">Blog</a>
            <a href="#shop" className="hover:text-gray-900">Shop</a>
            <a href="#about" className="hover:text-gray-900">About</a>
            <a href="#contact" className="hover:text-gray-900">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}