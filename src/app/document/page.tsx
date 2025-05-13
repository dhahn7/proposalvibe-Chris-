'use client';

import React from 'react';
import { useSearchParams } from 'next/navigation';
import { format } from 'date-fns';

export default function DocumentPage() {
  const searchParams = useSearchParams();
  
  const scopeOfWork = searchParams.get('scope') || 'Not provided';
  const contactInfo = {
    name: searchParams.get('name') || 'Not provided',
    address: searchParams.get('address') || 'Not provided',
    phone: searchParams.get('phone') || 'Not provided',
    email: searchParams.get('email') || 'Not provided'
  };
  const timeline = searchParams.get('timeline') || 'Not provided';
  const budget = searchParams.get('budget') || 'Not provided';
  const downPayment = searchParams.get('downPayment') || '50';
  const terms = searchParams.get('terms') || 'Standard contractor terms apply.';
  const currentDate = format(new Date(), 'MM/dd/yyyy');

  // Parse budget string to extract numbers if possible
  const budgetLines = budget.split('\n').filter(line => line.trim());
  let total = 0;

  return (
    <div className="max-w-[8.5in] mx-auto bg-white p-8 shadow-lg">
      <div className="mb-6">
        <h1 className="text-2xl font-bold">{contactInfo.name} Project Proposal</h1>
        <p className="text-sm text-gray-600">Date: {currentDate}</p>
      </div>

      <div className="grid grid-cols-2 gap-8 mb-8">
        <div>
          <h3 className="font-semibold mb-2">Customer</h3>
          <div className="text-sm">
            <p>{contactInfo.name}</p>
            <p>{contactInfo.address}</p>
            <p>Phone Number: {contactInfo.phone}</p>
            <p>Email: {contactInfo.email}</p>
          </div>
        </div>
        <div>
          <h3 className="font-semibold mb-2">Company</h3>
          <div className="text-sm">
            <p>Custom Construction Co.</p>
            <p>350 Builder Street, Suite 220</p>
            <p>Construction City, ST 12345</p>
            <p>info@customconstruction.com</p>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Overview</h2>
        <p className="text-sm whitespace-pre-wrap">{scopeOfWork}</p>
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Scope of Work</h2>
        <div className="text-sm">
          {scopeOfWork.split('\n').map((line, index) => (
            <p key={index} className="mb-2 flex items-start">
              <span className="mr-2">•</span>
              <span>{line}</span>
            </p>
          ))}
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Timeline</h2>
        <div className="text-sm whitespace-pre-wrap">{timeline}</div>
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Price Breakdown</h2>
        <p className="text-sm mb-4 text-gray-600">Line items and amounts are all generated. Audit and adjust totals before sharing.</p>
        <div className="border rounded-lg overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-2 text-left font-medium">Item</th>
                <th className="px-4 py-2 text-left font-medium">Quantity</th>
                <th className="px-4 py-2 text-left font-medium">Unit Price</th>
                <th className="px-4 py-2 text-left font-medium">Total</th>
              </tr>
            </thead>
            <tbody>
              {budgetLines.map((line, i) => (
                <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  <td className="px-4 py-2">{line}</td>
                  <td className="px-4 py-2">1</td>
                  <td className="px-4 py-2">$0.00</td>
                  <td className="px-4 py-2">$0.00</td>
                </tr>
              ))}
            </tbody>
            <tfoot className="bg-gray-50 font-medium">
              <tr>
                <td colSpan={3} className="px-4 py-2 text-right">Total:</td>
                <td className="px-4 py-2">${total.toFixed(2)}</td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Payment</h2>
        <p className="text-sm">
          To start work, we will need a {downPayment}% deposit. The remainder will be paid when the work has been completed to your satisfaction.
        </p>
      </div>

      <div className="mb-12">
        <h2 className="text-xl font-semibold mb-4">Terms & Conditions</h2>
        <div className="text-sm whitespace-pre-wrap">{terms}</div>
      </div>

      <div className="grid grid-cols-2 gap-8 mt-12 pt-8 border-t">
        <div>
          <p className="font-medium mb-8">Client Signature:</p>
          <div className="border-b border-dashed w-48"></div>
          <p className="text-sm text-gray-600 mt-2">Date</p>
        </div>
        <div>
          <p className="font-medium mb-8">Contractor Signature:</p>
          <div className="border-b border-dashed w-48"></div>
          <p className="text-sm text-gray-600 mt-2">Date</p>
        </div>
      </div>
    </div>
  );
}