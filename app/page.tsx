import { ArrowRight, Users, MessageCircle, BookOpen, HandFist } from 'lucide-react';
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-neutral-cream">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 lg:py-32">
      <div className="absolute inset-0 bg-gradient-to-br from-secondary-burgundy via-secondary-burgundy to-secondary-terracotta opacity-95" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6">
              Athar
            </h1>
            <p className="text-3xl lg:text-4xl font-bold text-white mb-8 max-w-3xl mx-auto">
              Building solidarity towards collective success
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="#about" 
                className="bg-accent-gold hover:bg-accent-gold-dark text-primary-500 px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2"
              >
                Learn More <ArrowRight className="w-5 h-5" />
              </Link>
              <Link 
                href="#how" 
                className="border-2 border-white text-white hover:bg-white hover:text-primary-500 px-8 py-4 rounded-lg font-semibold transition-all duration-300"
              >
                Join Our Community
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section - New detailed description */}
      <section id="about" className="py-20 bg-neutral-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-primary-500 mb-8">What We&apos;re Building</h2>
          <p className="text-xl text-neutral-warm-gray max-w-4xl mx-auto leading-relaxed">
            A hybrid platform where Palestinian youth can connect with a wider community, 
            receive academic and professional support, and engage in meaningful dialogue 
            that drives collective progress.
          </p>
        </div>
      </section>

      {/* Why It Matters Section */}
      <section id="why" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary-500 mb-4">Why It Matters</h2>
            <p className="text-lg text-neutral-warm-gray max-w-3xl mx-auto">
              We address five interconnected gaps in our community
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-neutral-cream p-8 rounded-2xl hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 bg-secondary-burgundy rounded-lg flex items-center justify-center mb-4">
                <HandFist className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-primary-500 mb-3">Support & Belonging</h3>
              <p className="text-neutral-warm-gray">Few safe, reliable networks to guide and lift people up.</p>
            </div>

            <div className="bg-neutral-cream p-8 rounded-2xl hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 bg-accent-gold rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-primary-500 mb-3">Role Models</h3>
              <p className="text-neutral-warm-gray">A lack of relatable and non-traditional success stories.</p>
            </div>

            <div className="bg-neutral-cream p-8 rounded-2xl hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 bg-secondary-burgundy rounded-lg flex items-center justify-center mb-4">
                <MessageCircle className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-primary-500 mb-3">Survival-Mode Mindset</h3>
              <p className="text-neutral-warm-gray">Focus on personal gain over collective growth.</p>
            </div>

            <div className="bg-neutral-cream p-8 rounded-2xl hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 bg-secondary-burnt-orange rounded-lg flex items-center justify-center mb-4">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-primary-500 mb-3">Public Spaces</h3>
              <p className="text-neutral-warm-gray">Limited places for open dialogue and action.</p>
            </div>

            <div className="bg-neutral-cream p-8 rounded-2xl hover:shadow-lg transition-shadow duration-300 md:col-span-2 lg:col-span-1">
              <div className="w-12 h-12 bg-primary-500 rounded-lg flex items-center justify-center mb-4">
                <ArrowRight className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-primary-500 mb-3">Agency & Voice</h3>
              <p className="text-neutral-warm-gray">Few opportunities to shape our own future.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How We Operate Section */}
      <section id="how" className="py-20 bg-gradient-to-br from-neutral-cream to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary-500 mb-4">How We Operate</h2>
            <p className="text-lg text-neutral-warm-gray">Our work centers on three pillars</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-secondary-terracotta rounded-full flex items-center justify-center mx-auto mb-6">
                <MessageCircle className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-primary-500 mb-4">Dialogue</h3>
              <p className="text-neutral-warm-gray">Creating relational and empowering spaces for critical, brave conversations.</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-secondary-burgundy rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-primary-500 mb-4">Support</h3>
              <p className="text-neutral-warm-gray">Offering workshops, handbooks, networking opportunities, and financial resources.</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-primary-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <BookOpen className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-primary-500 mb-4">Storytelling</h3>
              <p className="text-neutral-warm-gray">Using writing and the arts to share diverse stories of hardship, resilience, and success.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Tools Section */}
      <section id="tools" className="py-20 bg-primary-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Key Tools</h2>
            <p className="text-lg text-neutral-cream">How we're building our community</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl text-center hover:bg-white/20 transition-colors duration-300">
              <h3 className="text-lg font-semibold text-white mb-2">Webinar Workshops</h3>
              <p className="text-neutral-cream text-sm">College applications and career guidance</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl text-center hover:bg-white/20 transition-colors duration-300">
              <h3 className="text-lg font-semibold text-white mb-2">Community Discussions</h3>
              <p className="text-neutral-cream text-sm">Online sessions with guest speakers</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl text-center hover:bg-white/20 transition-colors duration-300">
              <h3 className="text-lg font-semibold text-white mb-2">Digital Magazine</h3>
              <p className="text-neutral-cream text-sm">Showcasing Palestinian stories</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl text-center hover:bg-white/20 transition-colors duration-300">
              <h3 className="text-lg font-semibold text-white mb-2">Scholarship Fundraising</h3>
              <p className="text-neutral-cream text-sm">Expanding educational access</p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section id="vision" className="py-20 bg-gradient-to-r from-secondary-burgundy to-secondary-terracotta">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-8">The Change We Wish to See</h2>
          <p className="text-xl text-white/90 max-w-4xl mx-auto mb-8">
            Redefine success as shared growth and collective achievement, fostering solidarity, 
            resilience, and mutual support. We envision a cultural transformation from individualism 
            to solidarity, where the community uplifts every member.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="#" 
              className="bg-white text-primary-500 px-8 py-4 rounded-lg font-semibold hover:bg-neutral-cream transition-colors duration-300"
            >
              Join Our Movement
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}