import { ArrowRight, Users, MessageCircle, BookOpen, HandFist } from 'lucide-react';
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section 
        className="relative overflow-hidden py-20 lg:py-32"
        style={{
          background: 'linear-gradient(135deg, #6B0504 0%, #8b1008 50%, #6B0504 100%)'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 drop-shadow-lg">
              Athar
            </h1>
            <p className="text-3xl lg:text-4xl font-bold text-white mb-8 max-w-3xl mx-auto drop-shadow-md">
              Building solidarity towards collective success
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="#about" 
                className="text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
                style={{
                  backgroundColor: '#FD9635',
                }}
              >
                Learn More <ArrowRight className="w-5 h-5" />
              </Link>
              <Link 
                href="/join" 
                className="border-2 border-white text-white hover:bg-white hover:text-red-700 px-8 py-4 rounded-lg font-semibold transition-all duration-300 backdrop-blur-sm"
              >
                Join Our Community
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section 
        id="about" 
        className="py-20"
        style={{ backgroundColor: '#FBFFFE' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-8 text-black">
            What We&apos;re Building
          </h2>
          <p className="text-xl max-w-4xl mx-auto leading-relaxed text-gray-600">
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
            <h2 className="text-4xl font-bold mb-4 text-black">
              Why It Matters
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We address five interconnected gaps in our community
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div 
              className="p-8 rounded-2xl hover:shadow-lg transition-all duration-300 border border-gray-200"
              style={{ backgroundColor: '#FBFFFE' }}
            >
              <div 
                className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 shadow-md"
                style={{ backgroundColor: '#6B0504' }}
              >
                <HandFist className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-black">
                Support & Belonging
              </h3>
              <p className="text-gray-600">Few safe, reliable networks to guide and lift people up.</p>
            </div>

            <div 
              className="p-8 rounded-2xl hover:shadow-lg transition-all duration-300 border border-gray-200"
              style={{ backgroundColor: '#FBFFFE' }}
            >
              <div 
                className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 shadow-md"
                style={{ backgroundColor: '#FD9635' }}
              >
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-black">
                Role Models
              </h3>
              <p className="text-gray-600">A lack of relatable and non-traditional success stories.</p>
            </div>

            <div 
              className="p-8 rounded-2xl hover:shadow-lg transition-all duration-300 border border-gray-200"
              style={{ backgroundColor: '#FBFFFE' }}
            >
              <div 
                className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 shadow-md bg-black"
              >
                <MessageCircle className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-black">
                Survival-Mode Mindset
              </h3>
              <p className="text-gray-600">Focus on personal gain over collective growth.</p>
            </div>

            <div 
              className="p-8 rounded-2xl hover:shadow-lg transition-all duration-300 border border-gray-200"
              style={{ backgroundColor: '#FBFFFE' }}
            >
              <div 
                className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 shadow-md"
                style={{ backgroundColor: '#FD9635' }}
              >
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-black">
                Public Spaces
              </h3>
              <p className="text-gray-600">Limited places for open dialogue and action.</p>
            </div>

            <div 
              className="p-8 rounded-2xl hover:shadow-lg transition-all duration-300 border border-gray-200 md:col-span-2 lg:col-span-1"
              style={{ backgroundColor: '#FBFFFE' }}
            >
              <div 
                className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 shadow-md"
                style={{ backgroundColor: '#6B0504' }}
              >
                <ArrowRight className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-black">
                Agency & Voice
              </h3>
              <p className="text-gray-600">Few opportunities to shape our own future.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How We Operate Section */}
      <section 
        id="how" 
        className="py-20"
        style={{ backgroundColor: '#FBFFFE' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-black">
              How We Operate
            </h2>
            <p className="text-lg text-gray-600">Our work centers on three pillars</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="text-center bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200">
              <div 
                className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg"
                style={{ backgroundColor: '#6B0504' }}
              >
                <MessageCircle className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-black">
                Dialogue
              </h3>
              <p className="text-gray-600">Creating relational and empowering spaces for critical, brave conversations.</p>
            </div>

            <div className="text-center bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200">
              <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg bg-black">
                <Users className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-black">
                Support
              </h3>
              <p className="text-gray-600">Offering workshops, handbooks, networking opportunities, and financial resources.</p>
            </div>

            <div className="text-center bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200">
              <div 
                className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg"
                style={{ backgroundColor: '#FD9635' }}
              >
                <BookOpen className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-black">
                Storytelling
              </h3>
              <p className="text-gray-600">Using writing and the arts to share diverse stories of hardship, resilience, and success.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Tools Section - SIMPLIFIED */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Key Tools</h2>
            <p className="text-lg text-gray-300">
              How we&apos;re building our community
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg text-center hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer">
              <h3 className="text-lg font-semibold text-black mb-2">Webinar Workshops</h3>
              <p className="text-gray-600 text-sm">
                College applications workshops and mentorship
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg text-center hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer">
              <h3 className="text-lg font-semibold text-black mb-2">Community Discussions</h3>
              <p className="text-gray-600 text-sm">
                Online sessions with guest speakers
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg text-center hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer">
              <h3 className="text-lg font-semibold text-black mb-2">Digital Magazine</h3>
              <p className="text-gray-600 text-sm">
                Showcasing untold Palestinian stories
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg text-center hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer">
              <h3 className="text-lg font-semibold text-black mb-2">Scholarship Fundraising</h3>
              <p className="text-gray-600 text-sm">
                Expanding educational access
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section 
        id="vision" 
        className="py-20 relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #FD9635 0%, #ffb366 50%, #FD9635 100%)' }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-8 drop-shadow-md">The Change We Wish to See</h2>
          <p className="text-xl text-white text-opacity-95 max-w-4xl mx-auto mb-8 drop-shadow-sm">
            Redefine success as shared growth and collective achievement, fostering solidarity, 
            resilience, and mutual support. We envision a cultural transformation from individualism 
            to solidarity, where the community uplifts every member.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/join" 
              className="px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
              style={{ 
                backgroundColor: '#FBFFFE', 
                color: '#000000' 
              }}
            >
              Join Our Community
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}