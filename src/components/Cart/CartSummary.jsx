import React from 'react';

export default function CartSummary({ items, total }) {
  const subtotal = total;
  const tax = subtotal * 0.08; // 8% tax
  const shipping = subtotal > 100 ? 0 : 10;
  const finalTotal = subtotal + tax + shipping;

  return (
    <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
        Order Summary
      </h3>
      
      <div className="space-y-3">
        <div className="flex justify-between">
          <span className="text-gray-600 dark:text-gray-400">
            Subtotal ({items.length} items)
          </span>
          <span className="font-medium text-gray-900 dark:text-white">
            ${subtotal.toFixed(2)}
          </span>
        </div>
        
        <div className="flex justify-between">
          <span className="text-gray-600 dark:text-gray-400">Tax</span>
          <span className="font-medium text-gray-900 dark:text-white">
            ${tax.toFixed(2)}
          </span>
        </div>
        
        <div className="flex justify-between">
          <span className="text-gray-600 dark:text-gray-400">Shipping</span>
          <span className="font-medium text-gray-900 dark:text-white">
            {shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}
          </span>
        </div>
        
        {shipping === 0 && (
          <p className="text-sm text-green-600 dark:text-green-400">
            🎉 Free shipping on orders over $100!
          </p>
        )}
        
        <div className="border-t border-gray-200 dark:border-gray-600 pt-3">
          <div className="flex justify-between">
            <span className="text-lg font-semibold text-gray-900 dark:text-white">
              Total
            </span>
            <span className="text-lg font-semibold text-gray-900 dark:text-white">
              ${finalTotal.toFixed(2)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
