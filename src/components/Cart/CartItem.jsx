import React from 'react';
import { TrashIcon, MinusIcon, PlusIcon } from '@heroicons/react/24/outline';

export default function CartItem({ item, onUpdateQuantity, onRemove }) {
  return (
    <div className="flex items-center space-x-4 p-4 border border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800">
      <img
        src={item.image}
        alt={item.name}
        className="w-16 h-16 object-cover rounded-md"
      />
      
      <div className="flex-1">
        <h3 className="text-lg font-medium text-gray-900 dark:text-white">
          {item.name}
        </h3>
        <p className="text-gray-600 dark:text-gray-400">
          ${item.price.toFixed(2)}
        </p>
      </div>
      
      <div className="flex items-center space-x-2">
        <button
          onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
          className="p-1 rounded-md bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
          disabled={item.quantity <= 1}
        >
          <MinusIcon className="w-4 h-4" />
        </button>
        
        <span className="w-12 text-center font-medium text-gray-900 dark:text-white">
          {item.quantity}
        </span>
        
        <button
          onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
          className="p-1 rounded-md bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
        >
          <PlusIcon className="w-4 h-4" />
        </button>
      </div>
      
      <div className="text-right">
        <p className="text-lg font-semibold text-gray-900 dark:text-white">
          ${(item.price * item.quantity).toFixed(2)}
        </p>
      </div>
      
      <button
        onClick={() => onRemove(item.id)}
        className="p-2 text-red-600 hover:text-red-800 dark:text-red-400 dark:hover:text-red-300 transition-colors"
      >
        <TrashIcon className="w-5 h-5" />
      </button>
    </div>
  );
}
