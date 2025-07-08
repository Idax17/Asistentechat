import React from 'react';
import { Clock, MapPin, User, Calendar, ChevronRight, AlertCircle, BookOpen, FlaskConical, Code, Calculator } from 'lucide-react';

const ScheduleView: React.FC = () => {
  const schedule = [
    { 
      id: 1, 
      subject: 'Cálculo I', 
      time: '08:00 - 10:00', 
      room: 'Aula 201', 
      professor: 'Ing. García', 
      day: 'Lunes',
      icon: <Calculator className="h-5 w-5" />,
      color: 'bg-purple-100 text-purple-800 border-purple-200'
    },
    { 
      id: 2, 
      subject: 'Física I', 
      time: '10:30 - 12:30', 
      room: 'Lab. Física', 
      professor: 'Ing. Rodríguez', 
      day: 'Lunes',
      icon: <FlaskConical className="h-5 w-5" />,
      color: 'bg-blue-100 text-blue-800 border-blue-200'
    },
    { 
      id: 3, 
      subject: 'Programación I', 
      time: '14:00 - 16:00', 
      room: 'Lab. Comp.', 
      professor: 'Ing. Martínez', 
      day: 'Lunes',
      icon: <Code className="h-5 w-5" />,
      color: 'bg-emerald-100 text-emerald-800 border-emerald-200'
    },
    { 
      id: 4, 
      subject: 'Álgebra Lineal', 
      time: '08:00 - 10:00', 
      room: 'Aula 105', 
      professor: 'Ing. López', 
      day: 'Martes',
      icon: <BookOpen className="h-5 w-5" />,
      color: 'bg-amber-100 text-amber-800 border-amber-200'
    },
    { 
      id: 5, 
      subject: 'Química General', 
      time: '10:30 - 12:30', 
      room: 'Lab. Química', 
      professor: 'Lic. Pérez', 
      day: 'Martes',
      icon: <FlaskConical className="h-5 w-5" />,
      color: 'bg-rose-100 text-rose-800 border-rose-200'
    },
  ];

  const days = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes'];
  const timeSlots = ['08:00', '10:30', '14:00', '16:30'];
  const currentClass = schedule[0];
  const today = 'Lunes'; // Podrías usar new Date() para obtener el día actual
  const todayClasses = schedule.filter(item => item.day === today);

  return (
    <div className="p-6 min-h-full bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Horario Académico</h1>
          <p className="text-gray-600">Organiza tu semana académica de manera eficiente</p>
        </div>

        {/* Current Class Banner */}
        <div className="relative bg-gradient-to-r from-indigo-600 to-blue-500 rounded-xl p-6 text-white mb-8 overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute right-0 top-0 w-32 h-32 bg-white rounded-full transform translate-x-16 -translate-y-16"></div>
            <div className="absolute right-0 bottom-0 w-64 h-64 bg-white rounded-full transform translate-x-32 translate-y-16"></div>
          </div>
          
          <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div>
              <div className="flex items-center mb-2">
                <span className="px-3 py-1 bg-white/20 rounded-full text-sm font-medium">CLASE EN CURSO</span>
                <span className="ml-3 flex items-center text-sm font-medium">
                  <Clock className="h-4 w-4 mr-1" />
                  <span>45 min restantes</span>
                </span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold mb-3">{currentClass.subject}</h2>
              
              <div className="flex flex-wrap gap-4 text-sm">
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 mr-2 opacity-80" />
                  <span>{currentClass.room}</span>
                </div>
                <div className="flex items-center">
                  <User className="h-4 w-4 mr-2 opacity-80" />
                  <span>{currentClass.professor}</span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-2 opacity-80" />
                  <span>{currentClass.time}</span>
                </div>
              </div>
            </div>
            
            <button className="flex items-center justify-center gap-2 px-5 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg transition-all">
              <span>Unirse a clase</span>
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Today's Classes */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold text-gray-900">Hoy - {today}</h2>
            <button className="text-sm text-blue-600 hover:text-blue-800 font-medium">Ver todas</button>
          </div>
          
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {todayClasses.map(classItem => (
              <div key={classItem.id} className={`${classItem.color} border rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow`}>
                <div className="flex justify-between items-start mb-3">
                  <div className="flex items-center gap-2">
                    <div className={`p-2 rounded-lg ${classItem.color.replace('bg-', 'bg-opacity-50 ')}`}>
                      {classItem.icon}
                    </div>
                    <h3 className="font-bold text-lg">{classItem.subject}</h3>
                  </div>
                  <span className="text-xs font-medium px-2 py-1 bg-white/30 rounded-full">{classItem.time}</span>
                </div>
                
                <div className="space-y-2 text-sm pl-12">
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-2 opacity-70" />
                    <span>{classItem.room}</span>
                  </div>
                  <div className="flex items-center">
                    <User className="h-4 w-4 mr-2 opacity-70" />
                    <span>{classItem.professor}</span>
                  </div>
                </div>
                
                <div className="mt-4 pt-3 border-t border-white/20">
                  <button className="text-xs font-medium flex items-center hover:underline">
                    Detalles de la clase <ChevronRight className="h-3 w-3 ml-1" />
                  </button>
                </div>
              </div>
            ))}
            
            {todayClasses.length < 3 && (
              <div className="bg-gray-100 rounded-xl p-5 flex flex-col items-center justify-center text-center">
                <AlertCircle className="h-8 w-8 text-gray-400 mb-2" />
                <h3 className="font-medium text-gray-700 mb-1">
                  {todayClasses.length === 0 ? 'No hay clases hoy' : 'No hay más clases hoy'}
                </h3>
                <p className="text-sm text-gray-500">
                  {todayClasses.length === 0 ? 'Disfruta tu día' : 'Tu próxima clase es mañana a las 08:00'}
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Weekly Schedule */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="p-6 border-b border-gray-200 flex items-center justify-between">
            <div className="flex items-center">
              <Calendar className="h-6 w-6 mr-3 text-blue-600" />
              <h2 className="text-xl font-semibold text-gray-900">Horario Semanal</h2>
            </div>
            <div className="flex space-x-2">
              <button className="px-3 py-1 text-sm bg-gray-100 hover:bg-gray-200 rounded-md">Esta semana</button>
              <button className="px-3 py-1 text-sm text-gray-600 hover:bg-gray-100 rounded-md">Próxima semana</button>
            </div>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Hora
                  </th>
                  {days.map(day => (
                    <th key={day} className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      {day}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {timeSlots.map(time => (
                  <tr key={time} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {time}
                    </td>
                    {days.map(day => {
                      const classForSlot = schedule.find(
                        item => item.day === day && item.time.startsWith(time)
                      );
                      
                      return (
                        <td key={`${day}-${time}`} className="px-6 py-4 whitespace-nowrap">
                          {classForSlot ? (
                            <div className={`${classForSlot.color} border rounded-lg p-3 shadow-xs`}>
                              <div className="flex justify-between items-start">
                                <div className="flex items-center gap-2">
                                  <div className={`p-1 rounded-md ${classForSlot.color.replace('bg-', 'bg-opacity-50 ')}`}>
                                    {classForSlot.icon}
                                  </div>
                                  <h4 className="font-semibold">{classForSlot.subject}</h4>
                                </div>
                                <span className="text-xs opacity-80">{classForSlot.time.split(' - ')[1]}</span>
                              </div>
                              <p className="text-xs opacity-80 mt-1">{classForSlot.room}</p>
                              <p className="text-xs opacity-70 mt-1">{classForSlot.professor}</p>
                            </div>
                          ) : (
                            <div className="h-16 border-2 border-dashed border-gray-100 rounded-lg"></div>
                          )}
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScheduleView;