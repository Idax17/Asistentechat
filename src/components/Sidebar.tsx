import React from 'react';
import { BookOpen, Calendar, FileText, TrendingUp, Users, HelpCircle } from 'lucide-react';

interface SidebarProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeSection, onSectionChange }) => {
  const menuItems = [
    { id: 'chat', label: 'Chat Académico', icon: HelpCircle },
    { id: 'subjects', label: 'Mis Materias', icon: BookOpen },
    { id: 'resources', label: 'Recursos', icon: FileText },
    { id: 'schedule', label: 'Horarios', icon: Calendar },
    { id: 'progress', label: 'Mi Progreso', icon: TrendingUp },
    { id: 'home', label: 'Home', icon: Users },
  ];

  return (
    <aside className="bg-white border-r border-gray-200 w-64 min-h-screen">
      <nav className="p-4">
        <ul className="space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <li key={item.id}>
                <button
                  onClick={() => onSectionChange(item.id)}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-all duration-200 ${
                    activeSection === item.id
                      ? 'bg-gradient-to-r from-blue-50 to-purple-50 text-blue-700 border-l-4 border-blue-500'
                      : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'
                  }`}
                >
                  <Icon className={`h-5 w-5 ${activeSection === item.id ? 'text-blue-600' : 'text-gray-500'}`} />
                  <span className="font-medium">{item.label}</span>
                </button>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;