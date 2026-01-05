import './App.css';

function App() {
  return (
    <div className="min-h-screen flex flex-col items-center">
      {/* Navigation */}
      <nav className="fixed top-0 w-full backdrop-blur-md bg-black/30 z-50 border-b border-white/10">
        <div className="w-full max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex justify-center h-20 items-center">
            <div className="text-2xl font-bold text-white">Taha Irfan</div>
            <div className="hidden md:flex space-x-12 ml-12">
              <a href="#chapter1" className="text-white hover:text-orange-500 transition-colors">Chapter 1</a>
              <a href="#chapter2" className="text-white hover:text-orange-500 transition-colors">Chapter 2</a>
              <a href="#chapter3" className="text-white hover:text-orange-500 transition-colors">Chapter 3</a>
              <a href="#chapter4" className="text-white hover:text-orange-500 transition-colors">Chapter 4</a>
              <a href="#chapter5" className="text-white hover:text-orange-500 transition-colors">Chapter 5</a>
              <a href="#chapter6" className="text-white hover:text-orange-500 transition-colors">Chapter 6</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Chapter 1: The Beginning */}
      <section id="chapter1" className="w-full pt-40 pb-32 px-6 sm:px-8 lg:px-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-900/20 via-red-900/20 to-orange-900/20 animate-pulse"></div>
        <div className="w-full max-w-4xl mx-auto flex flex-col items-center relative">
          <div className="text-orange-500/60 text-sm mb-4 font-mono">CHAPTER 1</div>
          <h1 className="text-6xl md:text-7xl font-bold mb-4 text-white text-center">
            The <span className="text-orange-500 animate-pulse drop-shadow-[0_0_15px_rgba(234,88,12,0.6)]">Beginning</span>
          </h1>
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white text-center">
            Hi, I'm <span className="text-orange-500">Taha Irfan</span>
          </h2>
          <p className="text-xl md:text-2xl mb-8 text-white text-center max-w-2xl">
            Computer Engineer passionate about design & creation
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-12 text-white/80 text-sm md:text-base">
            <a href="mailto:taha.syed.irfan@gmail.com" className="hover:text-orange-500 transition-colors">taha.syed.irfan@gmail.com</a>
            <span className="text-orange-500/50">•</span>
            <a href="tel:+16046529393" className="hover:text-orange-500 transition-colors">(604) 652-9393</a>
            <span className="text-orange-500/50">•</span>
            <span>Milton, ON</span>
            <span className="text-orange-500/50">•</span>
            <a href="https://github.com/tah-6" target="_blank" rel="noopener noreferrer" className="hover:text-orange-500 transition-colors">github.com/tah-6</a>
          </div>
          <a href="#chapter2" className="btn-primary text-center">Begin the Journey</a>
        </div>
      </section>

      {/* Chapter 2: The Foundation */}
      <section id="chapter2" className="w-full py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-orange-950/20 to-black/20"></div>
        <div className="w-full max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 relative flex flex-col items-center">
          <div className="text-orange-500/60 text-sm mb-4 font-mono">CHAPTER 2</div>
          <h2 className="section-title text-center mb-4">The Foundation</h2>
          <p className="text-white/70 text-center mb-16 max-w-2xl italic">
            "Every great journey begins with a solid foundation. Mine started with a passion for understanding how things work."
          </p>
          
          <div className="card w-full p-8 mb-8">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">University of Guelph</h3>
                <p className="text-lg text-orange-500 mb-1">Bachelor of Engineering, Computer Engineering</p>
                <p className="text-white/70">Guelph, ON</p>
              </div>
              <div className="text-right mt-4 md:mt-0">
                <p className="text-white/80">Expected Completion</p>
                <p className="text-orange-500 font-semibold">April 2029</p>
              </div>
            </div>
            
            <div className="mt-6 pt-6 border-t border-orange-500/20">
              <h4 className="text-xl font-semibold text-orange-500 mb-3">Chairman & Membership Development Coordinator</h4>
              <p className="text-white/90 mb-2">Guelph Engineering Society</p>
              <ul className="text-white/80 space-y-2 list-disc list-inside">
                <li>Coordinated initiatives for student engagement and multidisciplinary team meetings</li>
                <li>Fostered collaboration across engineering disciplines</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Chapter 3: Building Skills */}
      <section id="chapter3" className="w-full py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-t from-orange-950/20 to-black/20"></div>
        <div className="w-full max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 relative flex flex-col items-center">
          <div className="text-orange-500/60 text-sm mb-4 font-mono">CHAPTER 3</div>
          <h2 className="section-title text-center mb-4">Building Skills</h2>
          <p className="text-white/70 text-center mb-16 max-w-2xl italic">
            "Mastery comes from practice, experimentation, and the relentless pursuit of knowledge."
          </p>

          {/* Hardware & Embedded */}
          <div className="w-full mb-12">
            <h3 className="text-2xl font-bold text-orange-500 mb-6 text-center">Hardware & Embedded</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {['Digital Logic Design', 'FPGA Development (VHDL/Verilog)', 'Microcontrollers & Embedded C', 'Hardware Bring-up, Debugging & Validation'].map((skill) => (
                <div key={skill} className="card text-center group p-6 flex flex-col items-center justify-center">
                  <h4 className="font-semibold text-sm md:text-base text-white group-hover:text-orange-500 transition-colors">
                    {skill}
                  </h4>
                </div>
              ))}
            </div>
          </div>

          {/* Tools & Technologies */}
          <div className="w-full mb-12">
            <h3 className="text-2xl font-bold text-orange-500 mb-6 text-center">Tools & Technologies</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {['Oscilloscope', 'Logic Analyzer', 'Multimeter', 'Xilinx ISE', 'Git', 'Makefiles', 'Linux Development Environment'].map((tool) => (
                <div key={tool} className="card text-center group p-6 flex flex-col items-center justify-center">
                  <h4 className="font-semibold text-sm md:text-base text-white group-hover:text-orange-500 transition-colors">
                    {tool}
                  </h4>
                </div>
              ))}
            </div>
          </div>

          {/* Engineering Practices */}
          <div className="w-full">
            <h3 className="text-2xl font-bold text-orange-500 mb-6 text-center">Engineering Practices</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {['Schematic Interpretation', 'Testbench Development', 'Technical Documentation', 'Root-Cause Analysis'].map((practice) => (
                <div key={practice} className="card text-center group p-6 flex flex-col items-center justify-center">
                  <h4 className="font-semibold text-sm md:text-base text-white group-hover:text-orange-500 transition-colors">
                    {practice}
                  </h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Chapter 4: Creating Solutions */}
      <section id="chapter4" className="w-full py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-orange-950/20 to-black/20"></div>
        <div className="w-full max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 relative flex flex-col items-center">
          <div className="text-orange-500/60 text-sm mb-4 font-mono">CHAPTER 4</div>
          <h2 className="section-title text-center mb-4">Creating Solutions</h2>
          <p className="text-white/70 text-center mb-16 max-w-2xl italic">
            "Ideas become reality through code, circuits, and countless hours of problem-solving."
          </p>
          
          <div className="grid md:grid-cols-1 gap-10 w-full">
            {/* Wearable Haptic Navigation System */}
            <div className="card group p-8">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <span className="text-orange-500/70 text-sm font-mono mb-2 block">Independent Embedded Systems Project</span>
                  <h3 className="text-2xl font-bold mb-2 text-white group-hover:text-orange-500 transition-colors">
                    Wearable Haptic Navigation System
                  </h3>
                  <p className="text-white/70 text-sm">June 2025 - Present • Milton, ON</p>
                </div>
              </div>
              <div className="mt-4 space-y-3 text-white/90">
                <p className="leading-relaxed">
                  Built a wearable navigation device that uses vibration patterns to guide users, eliminating the need to constantly check a phone screen.
                </p>
                <ul className="list-disc list-inside space-y-2 text-white/80 ml-2">
                  <li>Designed system architecture linking smartphone GPS/compass data via Bluetooth</li>
                  <li>Developed embedded C++ firmware for haptic pattern generation</li>
                  <li>Designed motor driver circuit for precise vibration control</li>
                  <li>Integrated components into a functional prototype</li>
                  <li>Reduced user navigation effort through intuitive haptic feedback</li>
                </ul>
              </div>
            </div>

            {/* Automatic Plant Watering System */}
            <div className="card group p-8">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <span className="text-orange-500/70 text-sm font-mono mb-2 block">Academic Embedded Systems Project</span>
                  <h3 className="text-2xl font-bold mb-2 text-white group-hover:text-orange-500 transition-colors">
                    Automatic Plant Watering System
                  </h3>
                  <p className="text-white/70 text-sm">September 2023 - January 2024 • Milton, ON</p>
                </div>
              </div>
              <div className="mt-4 space-y-3 text-white/90">
                <p className="leading-relaxed">
                  Built a fully autonomous system for environmental monitoring and watering control, ensuring optimal plant health without manual intervention.
                </p>
                <ul className="list-disc list-inside space-y-2 text-white/80 ml-2">
                  <li>Implemented bare-metal firmware with a finite state machine</li>
                  <li>Integrated sensor sampling and control logic for real-time decision making</li>
                  <li>Added comprehensive fault detection and error handling</li>
                  <li>Created a reliable, self-contained system for automated plant care</li>
                </ul>
              </div>
            </div>

            {/* TreeCleaner */}
            <div className="card group p-8">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <span className="text-orange-500/70 text-sm font-mono mb-2 block">Web Development Project</span>
                  <h3 className="text-2xl font-bold mb-2 text-white group-hover:text-orange-500 transition-colors">
                    TreeCleaner
                  </h3>
                  <p className="text-white/70 text-sm">Web Application</p>
                </div>
              </div>
              <div className="mt-4 space-y-3 text-white/90">
                <p className="leading-relaxed">
                  A subscription management platform that helps users master their subscriptions by tracking recurring payments and avoiding forgotten free trials. It brings clarity to your financial life by ensuring you only pay for services you actually use.
                </p>
                <div className="grid md:grid-cols-2 gap-4 mt-4 mb-4">
                   <div className="bg-white/5 p-3 rounded-lg border border-white/10">
                     <h5 className="text-orange-400 font-semibold mb-1 text-sm">Real-time Tracking</h5>
                     <p className="text-xs text-white/70">Centralized dashboard for all recurring payments</p>
                   </div>
                   <div className="bg-white/5 p-3 rounded-lg border border-white/10">
                     <h5 className="text-orange-400 font-semibold mb-1 text-sm">Smart Alerts</h5>
                     <p className="text-xs text-white/70">Notifications before free trials convert</p>
                   </div>
                   <div className="bg-white/5 p-3 rounded-lg border border-white/10">
                     <h5 className="text-orange-400 font-semibold mb-1 text-sm">Bank-Grade Security</h5>
                     <p className="text-xs text-white/70">256-bit encryption for financial data</p>
                   </div>
                   <div className="bg-white/5 p-3 rounded-lg border border-white/10">
                     <h5 className="text-orange-400 font-semibold mb-1 text-sm">Savings Insights</h5>
                     <p className="text-xs text-white/70">Visual indicators of monthly savings</p>
                   </div>
                </div>
                <p className="text-white/80 text-sm mt-4">
                  <strong className="text-orange-500">Technologies:</strong> Next.js (React), Tailwind CSS, Vercel
                </p>
                <div className="flex gap-6 justify-center mt-6">
                  <a href="https://saasprojecttreecleaner.vercel.app" target="_blank" rel="noopener noreferrer" className="text-orange-500 hover:text-orange-400 transition-colors font-semibold">
                    Live Demo →
                  </a>
                </div>
              </div>
            </div>

            {/* Job Tracker */}
            <div className="card group p-8">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <span className="text-orange-500/70 text-sm font-mono mb-2 block">Web Development Project</span>
                  <h3 className="text-2xl font-bold mb-2 text-white group-hover:text-orange-500 transition-colors">
                    Internship & Job Tracker
                  </h3>
                  <p className="text-white/70 text-sm">Web Application</p>
                </div>
              </div>
              <div className="mt-4 space-y-3 text-white/90">
                <p className="leading-relaxed">
                  A lightweight, client-side web app built to organize and track co-op and internship applications. Users can add, edit, filter, and export/import job entries with local persistence, so data stays in the browser without a backend.
                </p>
                <p className="text-white/80 text-sm mt-4">
                  <strong className="text-orange-500">Technologies:</strong> Next.js (React), TypeScript, Tailwind CSS, Vercel (deployment)
                </p>
                <p className="text-white/80 text-sm">
                  <strong className="text-orange-500">My Role:</strong> Designed and implemented the entire application from scratch — including the React component architecture, localStorage persistence, CSV/JSON import/export utilities, dark-mode/mobile responsive UI, and deployment pipeline.
                </p>
                <div className="flex gap-6 justify-center mt-6">
                  <a href="https://uofg-job-tracker.vercel.app" target="_blank" rel="noopener noreferrer" className="text-orange-500 hover:text-orange-400 transition-colors font-semibold">
                    Live Demo →
                  </a>
                  <a href="https://github.com/tah-6/uofg-job-tracker" target="_blank" rel="noopener noreferrer" className="text-orange-500 hover:text-orange-400 transition-colors font-semibold">
                    GitHub →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Chapter 5: Leading & Growing */}
      <section id="chapter5" className="w-full py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-t from-orange-950/20 to-black/20"></div>
        <div className="w-full max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 relative flex flex-col items-center">
          <div className="text-orange-500/60 text-sm mb-4 font-mono">CHAPTER 5</div>
          <h2 className="section-title text-center mb-4">Leading & Growing</h2>
          <p className="text-white/70 text-center mb-16 max-w-2xl italic">
            "True growth happens when you step up to lead, inspire others, and build something greater than yourself."
          </p>
          
          <div className="card w-full p-8 max-w-3xl">
            <h3 className="text-2xl font-bold text-orange-500 mb-4">Guelph Engineering Society</h3>
            <h4 className="text-xl font-semibold text-white mb-4">Chairman & Membership Development Coordinator</h4>
            <div className="space-y-4 text-white/90">
              <p className="leading-relaxed">
                In my role with the Guelph Engineering Society, I've had the privilege of coordinating initiatives that bring engineering students together. This experience has taught me the importance of collaboration, communication, and creating spaces where innovation can flourish.
              </p>
              <div className="mt-6 pt-6 border-t border-orange-500/20">
                <h5 className="text-lg font-semibold text-orange-500 mb-3">Key Contributions:</h5>
                <ul className="list-disc list-inside space-y-2 text-white/80 ml-2">
                  <li>Coordinated initiatives for student engagement across engineering disciplines</li>
                  <li>Organized multidisciplinary team meetings to foster collaboration</li>
                  <li>Developed strategies to increase membership participation and involvement</li>
                  <li>Created opportunities for students to connect, learn, and grow together</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Chapter 6: The Journey Continues */}
      <section id="chapter6" className="w-full py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-t from-orange-950/20 to-black/20"></div>
        <div className="w-full max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 relative flex flex-col items-center">
          <div className="text-orange-500/60 text-sm mb-4 font-mono">CHAPTER 6</div>
          <h2 className="section-title text-center mb-4">The Journey Continues</h2>
          <p className="text-white/70 text-center mb-16 max-w-2xl italic">
            "Every ending is a new beginning. The story continues, and I'm always open to new chapters."
          </p>
          
          <div className="flex flex-col items-center">
            <p className="text-white mb-12 text-lg leading-relaxed text-center max-w-2xl">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions. Whether it's embedded systems, web development, or innovative solutions, let's build something amazing together.
            </p>
            
            <div className="card p-8 mb-8">
              <h3 className="text-xl font-bold text-orange-500 mb-6 text-center">Get in Touch</h3>
              <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-12">
                <a href="mailto:taha.syed.irfan@gmail.com" className="text-white hover:text-orange-500 transition-colors text-lg flex items-center gap-2">
                  <span>📧</span> Email
                </a>
                <a href="https://github.com/tah-6" target="_blank" rel="noopener noreferrer" className="text-white hover:text-orange-500 transition-colors text-lg flex items-center gap-2">
                  <span>💻</span> GitHub
                </a>
                <a href="https://www.linkedin.com/in/taha-irfan-57547525a/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-orange-500 transition-colors text-lg flex items-center gap-2">
                  <span>💼</span> LinkedIn
                </a>
                <a href="tel:+16046529393" className="text-white hover:text-orange-500 transition-colors text-lg flex items-center gap-2">
                  <span>📞</span> Phone
                </a>
              </div>
            </div>

            <div className="text-center text-white/60 text-sm">
              <p>Milton, ON • Available for opportunities</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full py-8 border-t border-white/10 text-center text-white/60 text-sm">
        <p>© {new Date().getFullYear()} Taha Irfan. Built with passion and dedication.</p>
      </footer>
    </div>
  );
}

export default App;
