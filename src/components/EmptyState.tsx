
import React from 'react';
import { Link } from 'react-router-dom';

interface EmptyStateProps {
  title: string;
  message: string;
  actionText: string;
  actionLink: string;
  icon?: React.ReactNode;
}

const EmptyState = ({ title, message, actionText, actionLink, icon }: EmptyStateProps) => {
  return (
    <div className="flex flex-col items-center justify-center py-12 px-4 text-center animate-fade-in">
      {icon && <div className="mb-4 text-slate-400">{icon}</div>}
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p className="text-slate-600 mb-6 max-w-md">{message}</p>
      <Link
        to={actionLink}
        className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded font-medium btn-transition"
      >
        {actionText}
      </Link>
    </div>
  );
};

export default EmptyState;
