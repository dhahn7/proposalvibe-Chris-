'use client';

import React from 'react';
import { useSearchParams } from 'next/navigation';
import DocumentEditor from '@/components/document-editor';
import { format } from 'date-fns';

export default function DocumentPage() {
  const searchParams = useSearchParams();
  
  const generateInitialContent = () => {
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
    const terms = searchParams.get('terms') || '';
    const currentDate = format(new Date(), 'MM/dd/yyyy');

    return `
      <div class="max-w-4xl mx-auto bg-white">
        <div class="mb-8">
          <div class="grid grid-cols-2 gap-4">
            <div>
              <h1 class="text-2xl font-bold">${contactInfo.name} Project Proposal</h1>
              <p class="text-sm text-muted-foreground">Date: ${currentDate}</p>
            </div>
          </div>
        </div>

        <div class="grid grid-cols-2 gap-8 mb-8">
          <div>
            <h3 class="font-semibold mb-2">Customer</h3>
            <div class="text-sm">
              <p>${contactInfo.name}</p>
              <p>${contactInfo.address}</p>
              <p>Phone Number: ${contactInfo.phone}</p>
              <p>Email: ${contactInfo.email}</p>
            </div>
          </div>
          <div>
            <h3 class="font-semibold mb-2">Company</h3>
            <div class="text-sm">
              <p>Custom Construction Co.</p>
              <p>350 Builder Street, Suite 220</p>
              <p>Construction City, ST 12345</p>
              <p>info@customconstruction.com</p>
            </div>
          </div>
        </div>

        <div class="mb-8">
          <h2 class="text-xl font-semibold mb-4">Overview</h2>
          <p class="text-sm whitespace-pre-wrap">${scopeOfWork}</p>
        </div>

        <div class="mb-8">
          <h2 class="text-xl font-semibold mb-4">Scope of Work</h2>
          <div class="text-sm whitespace-pre-wrap">
            ${scopeOfWork.split('\n').map(line => `<p class="mb-2">• ${line}</p>`).join('')}
          </div>
        </div>

        <div class="mb-8">
          <h2 class="text-xl font-semibold mb-4">Timeline</h2>
          <div class="text-sm whitespace-pre-wrap">${timeline}</div>
        </div>

        <div class="mb-8">
          <h2 class="text-xl font-semibold mb-4">Price Breakdown</h2>
          <p class="text-sm mb-4">Line items and amounts are all generated. Audit and adjust totals before sharing.</p>
          <div class="border rounded-lg overflow-hidden">
            <table class="w-full text-sm">
              <thead class="bg-gray-50">
                <tr>
                  <th class="px-4 py-2 text-left">Item</th>
                  <th class="px-4 py-2 text-left">Quantity</th>
                  <th class="px-4 py-2 text-left">Unit Price</th>
                  <th class="px-4 py-2 text-left">Total</th>
                </tr>
              </thead>
              <tbody>
                ${budget.split('\n').map((line, i) => `
                  <tr class="${i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}">
                    <td class="px-4 py-2">${line}</td>
                    <td class="px-4 py-2">1</td>
                    <td class="px-4 py-2">$0.00</td>
                    <td class="px-4 py-2">$0.00</td>
                  </tr>
                `).join('')}
              </tbody>
              <tfoot class="bg-gray-50 font-semibold">
                <tr>
                  <td colspan="3" class="px-4 py-2 text-right">Total:</td>
                  <td class="px-4 py-2">$0.00</td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>

        <div class="mb-8">
          <h2 class="text-xl font-semibold mb-4">Payment</h2>
          <p class="text-sm">To start work, we will need a ${downPayment}% deposit. The remainder will be paid when the work has been completed to your satisfaction.</p>
        </div>

        <div class="mb-12">
          <h2 class="text-xl font-semibold mb-4">Terms & Conditions</h2>
          <div class="text-sm whitespace-pre-wrap">
            ${terms || 'Standard contractor terms apply.'}
          </div>
        </div>

        <div class="grid grid-cols-2 gap-8 mt-12 pt-8 border-t">
          <div>
            <p class="font-medium mb-8">Client Signature:</p>
            <div class="border-b border-dashed w-48"></div>
            <p class="text-sm text-muted-foreground mt-2">Date</p>
          </div>
          <div>
            <p class="font-medium mb-8">Contractor Signature:</p>
            <div class="border-b border-dashed w-48"></div>
            <p class="text-sm text-muted-foreground mt-2">Date</p>
          </div>
        </div>
      </div>
    `;
  };

  return (
    <div className="container mx-auto py-8 px-4">
      <DocumentEditor initialContent={generateInitialContent()} />
    </div>
  );
}