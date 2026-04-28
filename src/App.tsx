import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Trophy, 
  Users, 
  Calendar, 
  MapPin, 
  ChevronRight, 
  CheckCircle2, 
  Play, 
  Star, 
  ArrowRight, 
  Menu, 
  X,
  Phone,
  Mail,
  Instagram,
  Facebook,
  Twitter
} from 'lucide-react';

const PROGRAMS = [
  {
    id: 'elite',
    title: 'Elite Development',
    age: 'U13 - U17',
    description: 'High-intensity training for competitive players aiming for professional pathways.',
    features: ['Professional Tactical Analysis', 'Strength & Conditioning', 'International Tournament Access'],
    image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&q=80&w=800&h=600'
  },
  {
    id: 'foundation',
    title: 'Foundation Phase',
    age: 'U6 - U12',
    description: 'Mastering technical skills and game understanding in a fun, positive environment.',
    features: ['Technical Skill Mastery', 'Small-Sided Games', 'Positive Character Building'],
    image: 'https://images.unsplash.com/photo-1510565239343-43a042978082?auto=format&fit=crop&q=80&w=800&h=600'
  },
  {
    id: 'camps',
    title: 'Holiday Camps',
    age: 'All Ages',
    description: 'Exclusive seasonal camps with guest coaches from Juventus HQ in Italy.',
    features: ['Intensive 1-Week Program', 'Official Juventus Merch', 'Evaluation Reports'],
    image: 'https://images.unsplash.com/photo-1517466787929-bc90951d0974?auto=format&fit=crop&q=80&w=800&h=600'
  }
];

const TESTIMONIALS = [
  {
    name: 'Samuel Addo',
    role: 'Parent',
    text: 'The discipline and professionalism at Juventus Academy Ghana are unmatched. My son has improved not just as a player, but as a person.',
    rating: 5
  },
  {
    name: 'Kofi Mensah',
    role: 'Elite U15 Player',
    text: 'Training like the pros in Italy has always been my dream. This academy brings that world-class experience to Accra.',
    rating: 5
  }
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="antialiased bg-black text-white selection:bg-white selection:text-black">
      {/* Navigation */}
      <nav 
        className={`fixed top-0 w-full z-50 transition-all duration-300 border-b ${
          scrolled ? 'bg-white text-black py-4 border-black/10 shadow-2xl' : 'bg-transparent text-white py-6 border-white/10'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div 
            className="text-3xl font-black italic tracking-tighter flex items-center cursor-pointer uppercase"
            onClick={() => scrollTo('home')}
          >
            <div className={`w-10 h-10 border-4 ${scrolled ? 'border-black' : 'border-white'} mr-4 flex items-center justify-center`}>
              J
            </div>
            Juventus <span className="opacity-50 ml-2 font-light">GHANA</span>
          </div>

          <div className="hidden md:flex items-center space-x-12 text-xs font-black uppercase tracking-[0.2em]">
            {['programs', 'about', 'schedule', 'contact'].map((item) => (
              <button 
                key={item} 
                onClick={() => scrollTo(item)}
                className="hover:italic transition-all cursor-pointer relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-current transition-all group-hover:w-full"></span>
              </button>
            ))}
            <button 
              onClick={() => scrollTo('register')}
              className={`px-8 py-3 font-black border-2 transition-all ${
                scrolled 
                ? 'bg-black text-white border-black hover:bg-white hover:text-black' 
                : 'bg-white text-black border-white hover:bg-black hover:text-white'
              }`}
            >
              REGISTER
            </button>
          </div>

          <button className="md:hidden" onClick={() => setIsMenuOpen(true)}>
            <Menu size={28} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-[60] bg-white text-black flex flex-col"
          >
            <div className="p-10 flex justify-between items-center border-b border-black/10">
               <div className="text-2xl font-black italic">J-GHANA</div>
              <button onClick={() => setIsMenuOpen(false)}>
                <X size={32} />
              </button>
            </div>
            <div className="flex-1 flex flex-col justify-center px-10 space-y-6 text-5xl font-black uppercase italic tracking-tighter">
              {['home', 'programs', 'about', 'schedule', 'contact', 'register'].map((item) => (
                <button 
                  key={item} 
                  onClick={() => scrollTo(item)}
                  className="text-left hover:pl-4 transition-all duration-300"
                >
                  {item}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center overflow-hidden bg-black border-b-8 border-white">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&q=80&w=2000" 
            className="w-full h-full object-cover opacity-60 grayscale brightness-90 animate-pulse-slow"
            alt="Hero Background"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center space-x-4 mb-8">
              <div className="w-12 h-1 bg-white"></div>
              <span className="text-sm font-black uppercase tracking-[0.4em]">Official Academy • West Africa</span>
            </div>
            
            <h1 className="text-7xl md:text-[180px] font-black leading-[0.75] tracking-tighter uppercase italic mb-12">
              BORN <br />
              <span className="text-white border-b-8 border-white pb-2">LEADERS</span>
            </h1>
            
            <div className="grid grid-cols-12 gap-6 items-end">
              <div className="col-span-12 md:col-span-6 lg:col-span-4">
                <p className="text-lg md:text-xl text-white/70 mb-10 font-medium leading-tight uppercase">
                  Ghanaian talent meets Italian excellence. Master the methodology of legends in the heart of Accra.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button 
                    onClick={() => scrollTo('register')}
                    className="bg-white text-black px-12 py-6 font-black uppercase text-sm tracking-widest hover:italic hover:scale-105 transition-all"
                  >
                    JOIN NOW
                  </button>
                </div>
              </div>
              <div className="hidden lg:block col-start-10 col-span-3 text-right">
                <div className="text-[10px] font-black opacity-40 uppercase tracking-[1em] mb-4">Established</div>
                <div className="text-6xl font-black italic">2024</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats - Massive Numbers */}
      <section className="bg-white text-black py-32 border-b border-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-24">
            {[
              { label: 'Active Talents', value: '500+', sub: 'Building the next generation of black stars' },
              { label: 'Methodology Score', value: 'A1', sub: 'Turin-certified technical training' },
              { label: 'Success Rate', value: '98%', sub: 'Player development and progression' }
            ].map((stat, i) => (
              <div key={i} className="border-t-4 border-black pt-8">
                <div className="text-[10px] font-black uppercase tracking-widest mb-4 opacity-40">{stat.label}</div>
                <div className="text-8xl font-black tracking-tighter italic mb-4">{stat.value}</div>
                <p className="text-xs font-bold uppercase max-w-[180px] leading-relaxed">{stat.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Section - Editorial Grid */}
      <section id="programs" className="py-32 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-24 flex flex-col md:flex-row justify-between items-start border-l-8 border-white pl-8">
            <h2 className="text-6xl md:text-[120px] font-black uppercase italic leading-none tracking-tighter">
              ACADEMY <br /> <span className="opacity-40">STREAMS</span>
            </h2>
            <div className="mt-8 md:mt-0 max-w-xs">
              <p className="text-xs font-black uppercase opacity-60 mb-6 tracking-widest leading-relaxed">
                Our strategic structural expansion plan for the 2024/25 season focused on elite outcomes.
              </p>
              <button 
                onClick={() => scrollTo('register')}
                className="text-sm font-black uppercase tracking-[0.3em] underline decoration-white decoration-4 underline-offset-8 hover:italic transition-all"
              >
                View Handbook
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1px bg-white/20 border border-white/20">
            {PROGRAMS.map((program) => (
              <div 
                key={program.id}
                className="bg-black p-12 group hover:bg-white hover:text-black transition-all duration-500 flex flex-col"
              >
                <div className="mb-12 flex justify-between items-start">
                  <div className="text-5xl font-black italic">{program.age}</div>
                  <ArrowRight className="opacity-0 group-hover:opacity-100 transition-all -translate-x-4 group-hover:translate-x-0" />
                </div>
                <h3 className="text-4xl font-black uppercase leading-none mb-6 italic tracking-tighter">{program.title}</h3>
                <p className="text-sm font-medium uppercase opacity-60 leading-relaxed mb-12 flex-grow">
                  {program.description}
                </p>
                <div className="space-y-3 opacity-0 group-hover:opacity-100 transition-all delay-100">
                  {program.features.map((f, i) => (
                    <div key={i} className="text-[10px] font-black uppercase tracking-widest flex items-center">
                      <span className="w-1.5 h-1.5 bg-current rounded-full mr-2"></span> {f}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Split Feature */}
      <section id="about" className="bg-white text-black border-y-8 border-black">
        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-[40%] p-12 lg:p-24 border-r border-black">
             <div className="text-[10px] font-black uppercase tracking-[0.5em] mb-12 opacity-30">04 • Methodology</div>
             <h2 className="text-6xl lg:text-9xl font-black italic uppercase leading-[0.75] tracking-tighter mb-16">
               THE <br /> ITALIAN <br /> <span className="bg-black text-white px-2">WAY.</span>
             </h2>
             <p className="text-xl font-medium uppercase leading-tight italic mb-12">
               NOT JUST FOOTBALL. <br />WE DEVELOP HUMANS.
             </p>
             <div className="h-64 w-full border-4 border-black p-2 mb-12">
                <img 
                  src="https://images.unsplash.com/photo-1526676037777-05a232554f77?auto=format&fit=crop&q=80&w=800" 
                  className="w-full h-full object-cover grayscale"
                  alt="Focus"
                />
             </div>
          </div>
          <div className="lg:w-[60%] lg:min-h-screen flex flex-col">
            <div className="flex-1 p-12 lg:p-24 flex flex-col justify-center">
               <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                 <div>
                   <h4 className="text-4xl font-black italic uppercase mb-6 tracking-tighter">Identity</h4>
                   <p className="text-xs font-bold font-mono opacity-50 leading-relaxed uppercase">
                     We bring the world's most successful club methodology to Accra. Our coaches are trained at J-College in Turin, ensuring every drill meets the black and white standard.
                   </p>
                 </div>
                 <div>
                   <h4 className="text-4xl font-black italic uppercase mb-6 tracking-tighter">Elite Path</h4>
                   <p className="text-xs font-bold font-mono opacity-50 leading-relaxed uppercase">
                     Our players aren't just local talents; they are part of a global network. Scouts, tournaments in Europe, and international education pathways are at the core of our elite stream.
                   </p>
                 </div>
               </div>
            </div>
            <div className="h-32 border-t border-black p-12 flex items-center justify-between">
              <span className="text-[10px] font-black italic uppercase tracking-widest">Global Expansion Strategy • HG-002</span>
              <div className="flex space-x-4">
                <div className="w-4 h-4 bg-black"></div>
                <div className="w-4 h-4 bg-black/20"></div>
                <div className="w-4 h-4 bg-black/5"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Registration Section - Ultra Bold */}
      <section id="register" className="py-48 bg-black text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-32">
             <h2 className="text-6xl md:text-[200px] font-black italic tracking-tighter leading-none uppercase">REGISTER</h2>
             <div className="flex justify-center items-center space-x-4 mt-6">
               <div className="h-2 w-2 bg-white rounded-full"></div>
               <span className="text-sm font-black uppercase tracking-[0.5em]">Enrollment Phase II Now Open</span>
               <div className="h-2 w-2 bg-white rounded-full"></div>
             </div>
          </div>

          <div className="grid grid-cols-12 gap-12">
            <div className="col-span-12 lg:col-span-7 bg-white text-black p-12 lg:p-20">
               <form className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8" onSubmit={(e) => e.preventDefault()}>
                  <div className="border-b-2 border-black pb-2">
                    <label className="text-[10px] font-black uppercase opacity-40">Talent Name</label>
                    <input type="text" className="w-full bg-transparent border-none font-black uppercase italic text-2xl outline-none py-2" placeholder="FULL NAME" />
                  </div>
                  <div className="border-b-2 border-black pb-2">
                    <label className="text-[10px] font-black uppercase opacity-40">Year of Birth</label>
                    <input type="number" className="w-full bg-transparent border-none font-black uppercase italic text-2xl outline-none py-2" placeholder="2014" />
                  </div>
                  <div className="border-b-2 border-black pb-2">
                    <label className="text-[10px] font-black uppercase opacity-40">Email Protocol</label>
                    <input type="email" className="w-full bg-transparent border-none font-black uppercase italic text-2xl outline-none py-2" placeholder="EMAIL ADDRESS" />
                  </div>
                  <div className="border-b-2 border-black pb-2">
                    <label className="text-[10px] font-black uppercase opacity-40">Target Stream</label>
                    <select className="w-full bg-transparent border-none font-black uppercase italic text-2xl outline-none py-2 cursor-pointer appearance-none">
                      <option>ELITE (U13-17)</option>
                      <option>FOUNDATION (U6-12)</option>
                      <option>CAMP 2024</option>
                    </select>
                  </div>
                  <button className="col-span-full bg-black text-white py-8 font-black uppercase italic text-2xl tracking-tighter hover:bg-white hover:text-black border-2 border-black transition-all">
                    SUBMIT TO HQ
                  </button>
               </form>
            </div>
            <div className="col-span-12 lg:col-span-5 flex flex-col justify-between p-8 border-4 border-white/20">
               <div>
                 <div className="text-4xl font-black leading-none uppercase italic mb-8">Ready to <br />be a Legend?</div>
                 <p className="text-xs font-bold font-mono opacity-50 uppercase leading-relaxed">
                   Upon submission, our technical scouts will review the data and invite the prospect for a tactical evaluation session at our Accra facility.
                 </p>
               </div>
               <div className="flex items-center space-x-6 grayscale opacity-50 pt-12">
                 <div className="font-black italic text-4xl">77</div>
                 <div className="font-black italic text-4xl">10</div>
                 <div className="font-black italic text-4xl">09</div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-white text-black py-24 border-t-8 border-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start mb-24">
             <div className="text-6xl md:text-[120px] font-black italic tracking-tighter uppercase leading-[0.8]">
               JUVE<br />GHANA
             </div>
             <div className="mt-12 md:mt-0 grid grid-cols-2 md:grid-cols-3 gap-16 uppercase">
               <div>
                 <div className="text-[10px] font-black opacity-30 tracking-widest mb-6 border-b border-black/10 pb-2">Navigation</div>
                 <ul className="space-y-4 font-black italic text-lg tracking-tighter">
                   <li><button className="hover:pl-2 transition-all">Programs</button></li>
                   <li><button className="hover:pl-2 transition-all">About</button></li>
                   <li><button className="hover:pl-2 transition-all">Timeline</button></li>
                   <li><button className="hover:pl-2 transition-all">Portal</button></li>
                 </ul>
               </div>
               <div>
                 <div className="text-[10px] font-black opacity-30 tracking-widest mb-6 border-b border-black/10 pb-2">Location</div>
                 <address className="not-italic text-xs font-bold leading-relaxed opacity-60">
                   LEGON STADIUM<br />UNIVERSITY OF GHANA<br />ACCRA, GHANA
                 </address>
               </div>
             </div>
          </div>
          
          <div className="pt-12 border-t border-black/10 flex flex-col md:flex-row justify-between items-center text-[10px] font-black uppercase tracking-[0.4em] opacity-30">
            <div>© 2024 JUVENTUS ACADEMY GHANA — ALL RIGHTS RESERVED</div>
            <div className="mt-4 md:mt-0 italic">Strategic Digital Core Alpha v1.0</div>
          </div>
        </div>
      </footer>
    </div>
  );
}
