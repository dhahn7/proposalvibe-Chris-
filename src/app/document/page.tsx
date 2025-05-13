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
    const currentDate = format(new Date(), 'MM/dd/yyyy');
    const estimateNumber = Math.floor(100000 + Math.random() * 900000).toString();

    return `
      <div class="flex justify-between items-start mb-12">
        <div>
          <h1 class="text-3xl font-bold mb-4">Custom Builds</h1>
          <p>2059 N Wildflower Dr</p>
          <p>Casa Grande, AZ, 85222</p>
          <p>(520) 723-5430</p>
          <p>contact@custombuilds.com</p>
        </div>
        <div class="text-right">
          <h2 class="text-2xl font-bold mb-4">Estimate</h2>
          <p><strong>Estimate Number:</strong> ${estimateNumber}</p>
          <p><strong>Estimate Date:</strong> ${currentDate}</p>
        </div>
      </div>

      <div class="mb-8">
        <h3 class="font-semibold mb-2">Client</h3>
        <div class="pl-4">
          <p>${contactInfo.name}</p>
          <p>${contactInfo.address}</p>
          <p>${contactInfo.phone}</p>
          <p>${contactInfo.email}</p>
        </div>
      </div>

      <div class="mb-8">
        <h3 class="font-semibold mb-2">Description of Work</h3>
        <div class="bg-muted/30 p-4 rounded-lg">
          <p>${scopeOfWork}</p>
        </div>
      </div>

      <div class="mb-8">
        <h3 class="font-semibold mb-2">Timeline</h3>
        <div class="pl-4">
          <p>${timeline}</p>
        </div>
      </div>

      <div class="mb-8">
        <h3 class="font-semibold mb-2">Services / Items</h3>
        <table class="w-full border-collapse">
          <thead>
            <tr class="bg-muted/30">
              <th class="border p-2 text-left">Service / Item</th>
              <th class="border p-2 text-left">Description</th>
              <th class="border p-2 text-right">Quantity / Hours</th>
              <th class="border p-2 text-right">Unit Cost</th>
              <th class="border p-2 text-right">Total</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="border p-2">Labor</td>
              <td class="border p-2">General construction labor</td>
              <td class="border p-2 text-right">40</td>
              <td class="border p-2 text-right">$75.00</td>
              <td class="border p-2 text-right">$3,000.00</td>
            </tr>
            <tr>
              <td class="border p-2">Materials</td>
              <td class="border p-2">Construction materials</td>
              <td class="border p-2 text-right">1</td>
              <td class="border p-2 text-right">$2,500.00</td>
              <td class="border p-2 text-right">$2,500.00</td>
            </tr>
            <tr class="bg-muted/30">
              <td colspan="4" class="border p-2 text-right font-bold">Total:</td>
              <td class="border p-2 text-right font-bold">$${budget}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="mt-12 pt-8 border-t">
        <div class="mb-8">
          <p class="font-semibold">Terms & Conditions:</p>
          <ul class="list-disc pl-5 space-y-2 mt-2">
            <li>This estimate is valid for 30 days from the date above.</li>
            <li>50% deposit required to begin work.</li>
            <li>Final payment due upon project completion.</li>
            <li>Any changes to the scope of work may affect the timeline and cost.</li>
          </ul>
        </div>
        
        <div class="grid grid-cols-2 gap-8 mt-12">
          <div>
            <p class="font-semibold mb-4">Client Signature:</p>
            <div class="border-b border-dashed w-48"></div>
            <p class="text-sm text-muted-foreground mt-2">Date</p>
          </div>
          <div>
            <p class="font-semibold mb-4">Contractor Signature:</p>
            <div class="border-b border-dashed w-48"></div>
            <p class="text-sm text-muted-foreground mt-2">Date</p>
          </div>
        </div>
      </div>
    `;
  };

  return (
    <div className="container mx-auto py-8 px-4 max-w-4xl">
      <DocumentEditor initialContent={generateInitialContent()} />
    </div>
  );
}