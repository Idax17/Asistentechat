import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, Lightbulb, BookOpen, Clock } from 'lucide-react';
import { Message } from '../types';
import { commonQuestions, studyTips } from '../data/academicData';
import axios from 'axios';

const studyTipss = [
  {
    title: "Técnica Pomodoro",
    tip: "Estudia en bloques de 25 minutos con descansos de 5 minutos. Cada 4 bloques, toma un descanso más largo (15-30 min)."
  },
  {
    title: "Espaciado",
    tip: "Distribuye tus sesiones de estudio en varios días. Es más efectivo que estudiar todo de una vez."
  },
  {
    title: "Autoexplicación",
    tip: "Explica el tema en voz alta como si se lo enseñaras a alguien más. Esto refuerza tu comprensión."
  },
  {
    title: "Mapas mentales",
    tip: "Organiza la información visualmente conectando conceptos clave. Ideal para temas complejos."
  },
  {
    title: "Práctica activa",
    tip: "Resume lo aprendido sin mirar tus apuntes. Usa preguntas de prueba para evaluarte."
  },
  {
    title: "Enseña a otros",
    tip: "Explicar el material a un compañero te ayuda a identificar qué dominas y qué necesitas repasar."
  },
  {
    title: "Ambiente adecuado",
    tip: "Busca un lugar tranquilo, bien iluminado y sin distracciones (como el celular)."
  },
  {
    title: "Analogías",
    tip: "Relaciona conceptos nuevos con cosas que ya conoces para recordarlos mejor."
  }
];

const randomTip = studyTipss[Math.floor(Math.random() * studyTips.length)];

interface ChatInterfaceProps {
  conversationId: number | null;
  conversationHistory: { Consulta: string; Respuesta: string }[];
  setConversationHistory: React.Dispatch<React.SetStateAction<{ Consulta: string; Respuesta: string }[]>>;
  reloadConversationHistory: () => void
}

const ChatInterface: React.FC<ChatInterfaceProps> = ({
  conversationId,
  conversationHistory,
  setConversationHistory,
  reloadConversationHistory,
}) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      content: '¡Hola! Soy tu asistente académico de la UNEG. ¿En qué puedo ayudarte hoy? Puedo ayudarte con:\n\n• Materias específicas\n• Recursos de estudio\n• Técnicas de aprendizaje\n• Organización del tiempo\n\nTambién puedes probar con preguntas como:\n"¿Cómo mejorar en matemáticas?"\n"¿Qué técnicas de estudio recomiendas?"\n"¿Cómo organizar mi horario de estudio?"',
      sender: 'assistant',
      timestamp: new Date(),
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [tipoRespuesta, setTipoRespuesta] = useState(1); // Valor por defecto: 1 (Tutor)
  const [isTyping, setIsTyping] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  
  /*
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);
*/
  const generateResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase().trim();
    
    // Matemáticas
    if (message.includes('matemática') || message.includes('cálculo') || message.includes('álgebra') || message.includes('matematica')) {
      return `Para mejorar en matemáticas, te recomiendo:

📚 **Recursos UNEG:**
1. Consulta las guías de estudio del departamento de matemáticas
2. Asiste a los talleres de refuerzo los jueves de 2-4pm

🎯 **Estrategias efectivas:**
• Practica 30 minutos diarios con ejercicios graduales
• Usa el método "3 pasos": Entender, Practicar, Enseñar
• Graba tus errores en un cuaderno de "lecciones aprendidas"

💻 **Recursos digitales:**
• Khan Academy (contenido en español)
• Wolfram Alpha para resolver problemas
• GeoGebra para visualización

¿Quieres que te recomiende material para algún tema específico como derivadas, integrales o álgebra lineal?`;
    }
    
    // Física
    if (message.includes('física') || message.includes('fisica') || message.includes('mecánica') || message.includes('termodinámica')) {
      return `Para dominar física, considera:

🔍 **Enfoque conceptual:**
1. Primero entiende los principios (no memorices fórmulas)
2. Relaciona cada concepto con fenómenos cotidianos
3. Usa diagramas y dibujos para visualizar problemas

🧪 **Práctica efectiva:**
• Resuelve problemas de menor a mayor dificultad
• Participa en los laboratorios virtuales de la UNEG
• Forma parte del club de física los viernes

🛠️ **Herramientas útiles:**
• PhET Simulations (simulaciones interactivas)
• FísicaLab (software gratuito)
• Canal de YouTube "Física UNEG" con tutoriales

¿Qué área de física te interesa más: mecánica, electricidad o termodinámica?`;
    }
    
    // Programación
    if (message.includes('programación') || message.includes('programacion') || message.includes('código') || message.includes('codigo') || message.includes('computación')) {
      return `Para convertirte en un mejor programador:

💻 **Ruta de aprendizaje:**
1. Fundamentos: lógica y algoritmos
2. Sintaxis básica del lenguaje
3. Estructuras de datos
4. Proyectos prácticos

🏆 **Consejos clave:**
• Codifica diariamente (aunque sea 20 minutos)
• Contribuye a proyectos open source de la UNEG
• Participa en hackathons mensuales

📌 **Recursos UNEG:**
• Laboratorio de programación abierto 24/7
• Tutorías entre pares (Pregunta por el programa "MentorCode")
• Repositorio GitHub con ejercicios resueltos

¿Estás trabajando con algún lenguaje en particular como Python, Java o C++?`;
    }
    
    // Organización del tiempo
    if (message.includes('tiempo') || message.includes('organizar') || message.includes('horario') || message.includes('procrastinar')) {
      return `Para una mejor gestión del tiempo académico:

⏳ **Técnicas comprobadas:**
1. **Pomodoro UNEG:** 45min estudio / 15min descanso (adaptado a clases universitarias)
2. **Bloques temáticos:** Agrupa materias similares
3. **Regla 2-min:** Si algo toma menos de 2 minutos, hazlo ahora

📅 **Planificación semanal:**
• Lunes: Revisión de objetivos
• Miércoles: Tutorías y dudas
• Viernes: Autoevaluación

📱 **Herramientas digitales:**
• Google Calendar con recordatorios
• App "Focus UNEG" (desarrollada por estudiantes)
• Técnica "Time blocking" para evitar multitasking

¿Quieres un ejemplo de horario para cargas pesadas de estudio?`;
    }
    
    // Técnicas de estudio
    if (message.includes('técnica') || message.includes('tecnica') || message.includes('estudiar') || message.includes('método') || message.includes('metodo') || message.includes('aprender')) {
      return `Técnicas de estudio avaladas por investigación:

🧠 **Para comprensión profunda:**
1. **Feynman:** Explica como si enseñaras a un niño
2. **Mapas conceptuales:** Conecta ideas principales
3. **Autoexplicación:** Habla en voz alta los conceptos

📝 **Para memorización:**
• **Repaso espaciado:** Usa la app Anki con intervalos científicos
• **Palacio mental:** Asocia conceptos con lugares familiares
• **Siglas y acrónimos:** Crea tus propias reglas mnemotécnicas

🏛️ **Recursos UNEG:**
• Taller "Aprender a Aprender" cada semestre
• Guía de estudio inteligente en la biblioteca
• Sesiones de estudio grupal guiadas

¿Te gustaría profundizar en alguna técnica en particular?`;
    }
    
    // Mejorar calificaciones
    if (message.includes('nota') || message.includes('calificación') || message.includes('calificacion') || message.includes('mejorar') || message.includes('examen') || message.includes('prueba')) {
      return `Para mejorar tus calificaciones de forma sostenible:

📈 **Estrategias basadas en evidencia:**
1. **Estudio activo:** Haz predicciones antes de ver las respuestas
2. **Pruebas prácticas:** Crea tus propios exámenes
3. **Distribuido:** Mejor 4 sesiones de 1h que 1 de 4h

✏️ **Durante exámenes:**
• Lee completo el examen primero
• Responde lo seguro, luego lo difícil
• Revisa con método "de atrás hacia adelante"

🆘 **Apoyo UNEG:**
• Centro de tutorías académicas
• Servicio de consejería estudiantil
• Talleres "Cómo enfrentar exámenes"

¿Qué materia te resulta más difícil y en qué aspecto específico?`;
    }
    
    // Respuesta por defecto
    return `Entiendo que necesitas ayuda académica. Para darte una mejor respuesta, podrías especificar:

• ¿Qué materia o tema necesitas reforzar?
• ¿Tienes problemas con técnicas de estudio, organización o comprensión?
• ¿Buscas recursos específicos de la UNEG?

Por ejemplo, podrías preguntar:
"¿Cómo aprobar cálculo diferencial?"
"¿Dónde encontrar buenos recursos para física 2?"
"¿Qué técnicas usar para estudiar historia eficientemente?"

Estoy aquí para ayudarte a alcanzar tus metas académicas. ¡Cuéntame más!`;
  };

  const handleSendMessage = async () => {
    if (!inputMessage.trim() || !conversationId) return;
    setError(null);
    setLoading(true);
    setIsTyping(true);

    setConversationHistory(prev => [
      ...prev,
      { Consulta: inputMessage, Respuesta: 'Pensando...' }
    ]);

    try {
      await axios.post(
        'http://localhost:8081/consult/gemini',
        {
          Consulta: inputMessage,
          ConsultUID: conversationId,
          Precision: tipoRespuesta
        },
        {
          withCredentials: true,
          headers: { 'Content-Type': 'application/json' }
        }
      );
      // Recarga el historial real desde el backend
      reloadConversationHistory();
      setInputMessage('');
    } catch (err: unknown) {
      setConversationHistory(prev => {
        const updated = [...prev];
        const idx = updated.findIndex(
          item => item.Consulta === inputMessage && item.Respuesta === 'Pensando...'
        );
        if (idx !== -1) {
          updated[idx] = { ...updated[idx], Respuesta: 'Error al obtener respuesta. Intenta de nuevo.' };
        }
        return updated;
      });
      setError('Error al enviar la consulta. Intenta de nuevo.');
    } finally {
      setIsTyping(false);
      setLoading(false);
    }
  };

  
  // Limpia el loader si cambias de conversación
  useEffect(() => {
    setIsTyping(false);
  }, [conversationId]);

  const messagesToShow = conversationId && conversationHistory.length > 0
  ? conversationHistory.flatMap((item, idx) => [
      {
        id: `u${idx}`,
        sender: 'user',
        content: item.Consulta,
        timestamp: new Date(),
      },
      {
        id: `a${idx}`,
        sender: 'assistant',
        content: item.Respuesta,
        timestamp: new Date(),
      },
    ])
    : messages;
  
    /* useEffect(() => {
      if (messagesEndRef.current) {
        messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
      }
    }, [messagesToShow]); */

  const handleQuestionClick = (question: string) => {
    setInputMessage(question);
  };

  return (
    <div className="flex flex-col h-full bg-gray-50">
      {/* Quick Actions */}
      <div className="bg-white border-b border-gray-200 p-4">
        <h3 className="text-sm font-semibold text-gray-700 mb-3">Preguntas Frecuentes</h3>
        <div className="flex flex-wrap gap-2">
          {commonQuestions.slice(0, 4).map((question, index) => (
            <button
              key={index}
              onClick={() => handleQuestionClick(question)}
              className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm hover:bg-blue-100 transition-colors"
            >
              {question}
            </button>
          ))}
        </div>
      </div>

      {/* Messages */}
      <div
        className="flex-1 overflow-y-auto p-4 space-y-4 max-h-[600px] min-h-[350px]"
        ref={messagesEndRef}
      >
        {messagesToShow.map((message, idx) => {
          // Usa message.id si existe, si no, el índice
          const key = `${message.id}-${idx}`;
          // Si no hay timestamp, usa la hora actual
          const timestamp = message.timestamp instanceof Date ? message.timestamp : new Date();
          return (
            <div
              key={key}
              className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div className={`flex max-w-xs lg:max-w-md ${message.sender === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                <div className={`flex-shrink-0 ${message.sender === 'user' ? 'ml-3' : 'mr-3'}`}>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    message.sender === 'user' 
                      ? 'bg-blue-500' 
                      : 'bg-gradient-to-r from-purple-500 to-blue-500'
                  }`}>
                    {message.sender === 'user' ? (
                      <User className="h-4 w-4 text-white" />
                    ) : (
                      <Bot className="h-4 w-4 text-white" />
                    )}
                  </div>
                </div>
                <div
                  className={`px-4 py-2 rounded-lg ${
                    message.sender === 'user'
                      ? 'bg-blue-500 text-white'
                      : 'bg-white text-gray-800 shadow-sm border border-gray-200'
                  }`}
                >
                  <p className="text-sm whitespace-pre-line">{message.content}</p>
                  <p className={`text-xs mt-1 ${
                    message.sender === 'user' ? 'text-blue-100' : 'text-gray-500'
                  }`}>
                    {timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
        {isTyping && (
          <div className="flex justify-start">
            <div className="flex mr-3">
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center">
                <Bot className="h-4 w-4 text-white" />
              </div>
            </div>
            <div className="bg-white px-4 py-2 rounded-lg shadow-sm border border-gray-200">
              <div className="flex space-x-1">
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
              </div>
            </div>
          </div>
        )}
      </div>


<div className="bg-white border-t border-gray-200 p-4">
  <h4 className="text-sm font-semibold text-gray-700 mb-2 flex items-center">
    <Lightbulb className="h-4 w-4 mr-2 text-yellow-500" />
    Consejo del Día
  </h4>
  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3">
    <p className="text-sm text-gray-700">
      <strong>{randomTip.title}:</strong> {randomTip.tip}
    </p>
  </div>
</div>

      {/* Input */}
      <div className="bg-white border-t border-gray-200 p-4">
        <div className="flex space-x-3">
          
          <select
            className="px-4 py-2 rounded-lg border text-xs bg-gray-100"
            value={tipoRespuesta}
            onChange={e => setTipoRespuesta(Number(e.target.value))}
            aria-label='Tipo De Respuesta'
          >
            <option value = {1} >Tutoria</option>
            <option value = {2} >Investigador</option>
          </select>

          <input
            type="text"
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
            placeholder="Escriba su consulta..."
            className="flex-1 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            disabled={loading}
          />
          <button
            onClick={handleSendMessage}
            disabled={!inputMessage.trim() || loading}
            className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-lg hover:from-blue-600 hover:to-purple-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
            aria-label='x'
          >
            <Send className="h-5 w-5" />
          </button>
        </div>
        {error && (
          <div className="text-red-500 text-xs mt-2">{error}</div>
        )}
      </div>
    </div>
  );
};

export default ChatInterface;