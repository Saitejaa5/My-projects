import React from 'react';

interface QuickActionsProps {
  onSelect: (action: string) => void;
}

const QuickActions: React.FC<QuickActionsProps> = ({ onSelect }) => {
  const quickActions = [
    "Headache",
    "Flu symptoms",
    "Stomach pain",
    "Allergies",
    "Sleep problems",
    "Mental health",
    "Back pain",
    "Skin issues",
    "Joint pain",
    "Heart health",
    "Diabetes",
    "Nutrition advice"
  ];

  return (
    <div className="flex flex-wrap gap-2">
      {quickActions.map((action, index) => (
        <button
          key={index}
          onClick={() => onSelect(action)}
          className="bg-blue-50 hover:bg-blue-100 text-blue-700 px-3 py-1.5 rounded-full text-sm transition-colors duration-200 whitespace-nowrap"
        >
          {action}
        </button>
      ))}
    </div>
  );
};

export default QuickActions;