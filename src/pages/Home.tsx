import { useState, useEffect} from 'react';
import Header from '../components/Header';
import { Link } from 'react-router-dom';
import { 
  BookOpen, 
  Users, 
  Award, 
  ArrowRight, 
  GraduationCap, 
  FileText, 
  TrendingUp,
  Clock,
  Target,
  Lightbulb,
  Star,
  ChevronRight
} from 'lucide-react';

const Home = () => {
  const [currentTip, setCurrentTip] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const features = [
    {
      icon: BookOpen,
      title: 'Contenido Completo',
      description: 'Información detallada de todas las materias con objetivos, temas y recursos',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Users,
      title: 'Para Estudiantes',
      description: 'Diseñado por y para estudiantes con consejos prácticos y experiencias reales',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Award,
      title: 'Calidad Académica',
      description: 'Contenido revisado y actualizado constantemente por la comunidad estudiantil',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: Target,
      title: 'Planificación Inteligente',
      description: 'Herramientas para planificar tu carrera y optimizar tu rendimiento académico',
      color: 'from-orange-500 to-orange-600'
    }
  ];

  const tips = [
    "💡 Revisa los prerrequisitos antes de inscribir materias",
    "📚 Usa los recursos recomendados para cada materia",
    "⭐ Consulta la dificultad y carga de trabajo estimada",
    "🎯 Planifica tu semestre según tus objetivos",
    "👥 Conecta con otros estudiantes de tu semestre"
  ];

  const quickStats = [
    { label: 'Materias', value: '45+', icon: BookOpen },
    { label: 'Semestres', value: '8', icon: Clock },
    { label: 'Créditos', value: '180+', icon: Award },
    { label: 'Años', value: '4', icon: GraduationCap }
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentTip((prev) => (prev + 1) % tips.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    
    <div className="min-h-screen">
      <Header />
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800"></div>
        <div className="absolute inset-0 bg-black opacity-20"></div>
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-white opacity-10 rounded-full animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-white opacity-5 rounded-full animate-pulse delay-1000"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="flex justify-center mb-8">
              <div className="bg-white/10 p-6 rounded-full backdrop-blur-sm border border-white/20 animate-bounce">
                <GraduationCap className="h-16 w-16 text-white" />
              </div>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Biblioteca de
              <span className="block text-yellow-300 animate-pulse">Materias</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
              Tu guía completa para la carrera de Ingeniería Informática en la UNEG
            </p>

            {/* Rotating Tips */}
            <div className="mb-8 h-8">
              <p className="text-lg text-yellow-200 animate-fade-in-out">
                {tips[currentTip]}
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/subjects"
                className="group bg-yellow-500 hover:bg-yellow-400 text-gray-900 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center space-x-2"
              >
                <span>Explorar Materias</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <button className="bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200 backdrop-blur-sm border border-white/20 hover:border-white/40 flex items-center space-x-2">
                <FileText className="h-5 w-5" />
                <span>Guía de Uso</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-16 bg-white relative -mt-16 mx-4 sm:mx-8 rounded-t-3xl shadow-2xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {quickStats.map((stat, index) => (
              <div
                key={index}
                className={`text-center p-6 rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 hover:from-blue-50 hover:to-blue-100 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-lg ${
                  isVisible ? 'animate-fade-in-up' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="bg-gradient-to-br from-blue-600 to-blue-700 p-3 rounded-lg w-fit mx-auto mb-3">
                  <stat.icon className="h-6 w-6 text-white" />
                </div>
                <p className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</p>
                <p className="text-gray-600 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Todo lo que necesitas para tu éxito académico
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Una plataforma completa con herramientas inteligentes para optimizar tu experiencia universitaria
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group p-8 rounded-2xl bg-white hover:bg-gradient-to-br hover:from-white hover:to-gray-50 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 border border-gray-100 hover:border-gray-200"
              >
                <div className={`bg-gradient-to-br ${feature.color} p-4 rounded-xl w-fit mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-4">{feature.description}</p>
                <div className="flex items-center text-blue-600 font-medium group-hover:text-blue-700 transition-colors">
                  <span>Explorar</span>
                  <ChevronRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Explora las materias de forma inteligente
            </h2>
            <p className="text-xl text-gray-600">
              Filtra por semestre, dificultad, tipo y más
            </p>
          </div>

          <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl p-8 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-10 rounded-full -translate-y-32 translate-x-32"></div>
            <div className="relative">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-4">Búsqueda Avanzada</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center space-x-2">
                      <Star className="h-4 w-4 text-yellow-400" />
                      <span>Filtro por dificultad</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <Clock className="h-4 w-4 text-yellow-400" />
                      <span>Carga de trabajo estimada</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <Target className="h-4 w-4 text-yellow-400" />
                      <span>Prerrequisitos claros</span>
                    </li>
                  </ul>
                </div>
                
                <div className="text-center">
                  <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm">
                    <TrendingUp className="h-12 w-12 text-yellow-400 mx-auto mb-4" />
                    <p className="text-lg font-semibold">Planifica tu éxito</p>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold mb-4">Información Detallada</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center space-x-2">
                      <Lightbulb className="h-4 w-4 text-yellow-400" />
                      <span>Consejos de estudiantes</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <BookOpen className="h-4 w-4 text-yellow-400" />
                      <span>Recursos recomendados</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <Users className="h-4 w-4 text-yellow-400" />
                      <span>Evaluación detallada</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700 relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-10 left-10 w-20 h-20 bg-white opacity-10 rounded-full animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-32 h-32 bg-white opacity-5 rounded-full animate-pulse delay-500"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white opacity-10 rounded-full animate-pulse delay-1000"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            ¿Listo para optimizar tu carrera?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Accede a información completa, planifica tu semestre y conecta con otros estudiantes
          </p>
          <Link
            to="/subjects"
            className="inline-flex items-center space-x-2 bg-white text-blue-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            <span>Comenzar Ahora</span>
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;