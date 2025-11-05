import { Mail, Phone, Music, Gamepad2, TrendingUp, Award, Target } from "lucide-react";

export default function Index() {
  return (
    <div className="min-h-screen bg-neutral-100">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-primary-500 flex items-center justify-center">
              <span className="text-white font-bold">JP</span>
            </div>
            <h1 className="text-2xl font-bold text-primary-700">Buyer Persona</h1>
          </div>
          <nav className="hidden md:flex gap-8">
            <a href="#about" className="text-primary-600 hover:text-primary-700 font-medium text-sm">
              ABOUT
            </a>
            <a href="#personality" className="text-primary-600 hover:text-primary-700 font-medium text-sm">
              PERSONALITY
            </a>
            <a href="#interest" className="text-primary-600 hover:text-primary-700 font-medium text-sm">
              INTEREST
            </a>
            <a href="#contact" className="text-primary-600 hover:text-primary-700 font-medium text-sm">
              CONTACT
            </a>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* About & Personality Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8" id="about">
          {/* Left: About Card */}
          <div className="lg:col-span-1 bg-accent2-500 rounded-2xl p-8 text-center text-white shadow-lg">
            <div className="mb-6">
              <div className="w-32 h-32 mx-auto mb-4 rounded-full border-4 border-accent2-600 overflow-hidden shadow-lg">
                <img
                  src="https://storage.googleapis.com/uxpilot-auth.appspot.com/e54ceb88d5-56e3587d26c9e57798c7.png"
                  alt="Jamileth Guerra"
                  className="w-full h-full object-cover"
                />
              </div>
              <h2 className="text-3xl font-bold mb-2 text-primary-900">Jamileth</h2>
              <p className="text-accent2-700 font-semibold mb-4">"Jactsu" Guerra</p>
            </div>

            <div className="space-y-3 text-sm text-primary-900 font-medium divide-y divide-accent2-600">
              <div className="pt-0 pb-3">
                <p className="text-xs uppercase tracking-wide text-accent2-700 mb-1">About</p>
                <p className="font-semibold">Estratega Publicitaria</p>
                <p className="text-xs text-primary-800">AI Hybrid | Age 20</p>
              </div>
              <div className="pt-3 pb-3">
                <p className="text-xs">Single • Panamá (Villa Daniela)</p>
              </div>
              <div className="pt-3 pb-0">
                <p className="text-xs mb-2">📞 6604-3511 / 6530-0791</p>
              </div>
            </div>

            <div className="flex gap-3 justify-center mt-6">
              <a href="#" className="w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center hover:bg-primary-700 transition">
                <span className="text-xs text-white font-bold">f</span>
              </a>
              <a href="#" className="w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center hover:bg-primary-700 transition">
                <span className="text-xs text-white font-bold">in</span>
              </a>
              <a href="#" className="w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center hover:bg-primary-700 transition">
                <span className="text-xs text-white font-bold">@</span>
              </a>
            </div>
          </div>

          {/* Right: Personality & Goals */}
          <div className="lg:col-span-2 space-y-6">
            {/* Personality Card */}
            <div id="personality" className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition">
              <div className="flex items-center gap-2 mb-4">
                <Award className="w-6 h-6 text-accent1-500" />
                <h3 className="text-xl font-bold text-accent1-600">Personality</h3>
              </div>
              <div className="space-y-3">
                <div>
                  <p className="text-xs font-semibold text-neutral-600 mb-1">Estrategia Jactsu</p>
                  <div className="flex gap-1">
                    <div className="flex-1 h-2 bg-primary-500 rounded-full"></div>
                    <div className="flex-1 h-2 bg-neutral-300 rounded-full"></div>
                  </div>
                </div>
                <div>
                  <p className="text-xs font-semibold text-neutral-600 mb-1">Creatividad Aplicada</p>
                  <div className="flex gap-1">
                    <div className="flex-1 h-2 bg-accent2-500 rounded-full"></div>
                    <div className="flex-1 h-2 bg-neutral-300 rounded-full"></div>
                  </div>
                </div>
                <div>
                  <p className="text-xs font-semibold text-neutral-600 mb-1">Resolución de Retos</p>
                  <div className="flex gap-1">
                    <div className="flex-1 h-2 bg-primary-500 rounded-full"></div>
                    <div className="flex-1 h-2 bg-neutral-300 rounded-full"></div>
                  </div>
                </div>
                <div>
                  <p className="text-xs font-semibold text-neutral-600 mb-1">Automatización e IA</p>
                  <div className="flex gap-1">
                    <div className="w-1/2 h-2 bg-accent2-500 rounded-full"></div>
                    <div className="flex-1 h-2 bg-neutral-300 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Goals Card */}
            <div className="bg-white rounded-2xl p-6 shadow-md">
              <div className="flex items-center gap-2 mb-4">
                <Target className="w-6 h-6 text-primary-500" />
                <h3 className="text-xl font-bold text-primary-600">Goals</h3>
              </div>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-sm text-neutral-700">
                  <div className="w-2 h-2 rounded-full bg-accent1-500"></div>
                  <span>Crear impacto en estrategia digital panameña</span>
                </li>
                <li className="flex items-center gap-2 text-sm text-neutral-700">
                  <div className="w-2 h-2 rounded-full bg-accent1-500"></div>
                  <span>Dominar automatización y AI aplicada</span>
                </li>
                <li className="flex items-center gap-2 text-sm text-neutral-700">
                  <div className="w-2 h-2 rounded-full bg-accent1-500"></div>
                  <span>Construir marca personal reconocida</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bio & Strengths Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Bio Card */}
          <div className="lg:col-span-1 bg-neutral-800 rounded-2xl p-6 text-white">
            <h3 className="text-lg font-bold mb-4 text-accent2-400">BIO</h3>
            <p className="text-sm text-neutral-300 leading-relaxed mb-4">
              Jamileth "Jactsu" Guerra es una joven estratega publicitaria panameña de 20 años. Especialista en fusión humano-tecnología (AI Hybrid), con enfoque en resolución creativa de problemas.
            </p>
            <p className="text-xs text-neutral-400">
              "Carrera de resistencia, no velocidad" - filosofía de vida que aplica a cada proyecto.
            </p>
          </div>

          {/* Disc Profile Card */}
          <div className="lg:col-span-1 bg-neutral-800 rounded-2xl p-6 text-white">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold text-accent2-400">DISC Profile</h3>
              <div className="w-6 h-6 text-accent2-400">≡</div>
            </div>
            <div className="space-y-2">
              <div className="flex items-end gap-2">
                <div className="text-xs font-semibold text-neutral-300">D</div>
                <div className="flex-1 bg-neutral-700 rounded-full overflow-hidden h-16">
                  <div className="bg-accent1-500 h-full" style={{ width: "70%" }}></div>
                </div>
              </div>
              <div className="flex items-end gap-2">
                <div className="text-xs font-semibold text-neutral-300">I</div>
                <div className="flex-1 bg-neutral-700 rounded-full overflow-hidden h-16">
                  <div className="bg-primary-400 h-full" style={{ width: "50%" }}></div>
                </div>
              </div>
              <div className="flex items-end gap-2">
                <div className="text-xs font-semibold text-neutral-300">S</div>
                <div className="flex-1 bg-neutral-700 rounded-full overflow-hidden h-16">
                  <div className="bg-accent2-500 h-full" style={{ width: "40%" }}></div>
                </div>
              </div>
              <div className="flex items-end gap-2">
                <div className="text-xs font-semibold text-neutral-300">C</div>
                <div className="flex-1 bg-neutral-700 rounded-full overflow-hidden h-16">
                  <div className="bg-neutral-600 h-full" style={{ width: "60%" }}></div>
                </div>
              </div>
            </div>
          </div>

          {/* Tactical Strengths Card */}
          <div className="lg:col-span-1 bg-white rounded-2xl p-6 shadow-md">
            <h3 className="text-lg font-bold mb-4 text-primary-700">Fortalezas Tácticas</h3>
            <div className="space-y-4">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto rounded-full bg-accent1-100 flex items-center justify-center mb-2">
                  <span className="text-2xl font-bold text-accent1-600">95%</span>
                </div>
                <p className="text-xs font-medium text-neutral-700">Resolución de Retos</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto rounded-full bg-accent2-100 flex items-center justify-center mb-2">
                  <span className="text-2xl font-bold text-accent2-600">90%</span>
                </div>
                <p className="text-xs font-medium text-neutral-700">Estrategia Publicitaria</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto rounded-full bg-primary-100 flex items-center justify-center mb-2">
                  <span className="text-2xl font-bold text-primary-600">85%</span>
                </div>
                <p className="text-xs font-medium text-neutral-700">Automatización e IA</p>
              </div>
            </div>
          </div>
        </div>

        {/* Interest Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8" id="interest">
          {/* Interest Card */}
          <div className="bg-neutral-800 rounded-2xl p-6">
            <h3 className="text-lg font-bold text-accent2-400 mb-6">Interest</h3>
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto rounded-full bg-primary-500 flex items-center justify-center mb-2 shadow-lg">
                  <Gamepad2 className="w-8 h-8 text-white" />
                </div>
                <p className="text-xs font-medium text-neutral-300">Gaming</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto rounded-full bg-accent2-500 flex items-center justify-center mb-2 shadow-lg">
                  <Music className="w-8 h-8 text-white" />
                </div>
                <p className="text-xs font-medium text-neutral-300">Folclore</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto rounded-full bg-accent1-500 flex items-center justify-center mb-2 shadow-lg">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <p className="text-xs font-medium text-neutral-300">Analytics</p>
              </div>
            </div>
          </div>

          {/* Frustrations Card */}
          <div className="bg-neutral-800 rounded-2xl p-6">
            <h3 className="text-lg font-bold text-accent1-400 mb-4">Frustrations</h3>
            <ul className="space-y-3">
              <li className="flex gap-3 items-start text-sm text-neutral-300">
                <span className="text-accent1-400 font-bold mt-1">×</span>
                <span>Falta de comprensión de estrategia digital en Panamá</span>
              </li>
              <li className="flex gap-3 items-start text-sm text-neutral-300">
                <span className="text-accent1-400 font-bold mt-1">×</span>
                <span>Procesos lentos sin automatización</span>
              </li>
              <li className="flex gap-3 items-start text-sm text-neutral-300">
                <span className="text-accent1-400 font-bold mt-1">×</span>
                <span>Falta de reconocimiento a talento local</span>
              </li>
              <li className="flex gap-3 items-start text-sm text-neutral-300">
                <span className="text-accent1-400 font-bold mt-1">×</span>
                <span>Resistencia al cambio tecnológico</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Contact Section */}
        <section id="contact" className="bg-white rounded-2xl p-8 shadow-md">
          <h3 className="text-2xl font-bold text-primary-700 mb-8 flex items-center gap-2">
            <Phone className="w-6 h-6" />
            Conexión Profesional
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-4 bg-neutral-100 rounded-xl hover:shadow-md transition">
              <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-primary-500 flex items-center justify-center">
                <Award className="w-6 h-6 text-white" />
              </div>
              <p className="font-semibold text-neutral-900 text-sm mb-1">Portafolio Digital</p>
              <p className="text-xs text-neutral-600">Trabajos destacados</p>
            </div>
            <div className="text-center p-4 bg-neutral-100 rounded-xl hover:shadow-md transition">
              <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-primary-500 flex items-center justify-center">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <p className="font-semibold text-neutral-900 text-sm mb-1">LinkedIn / Behance</p>
              <p className="text-xs text-neutral-600">Perfiles activos</p>
            </div>
            <div className="text-center p-4 bg-neutral-100 rounded-xl hover:shadow-md transition">
              <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-primary-500 flex items-center justify-center">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <p className="font-semibold text-neutral-900 text-sm mb-1">Contacto Directo</p>
              <p className="text-xs text-neutral-600">6604-3511</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
