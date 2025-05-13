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
        <div class="flex justify-between items-center mb-4">
          <h3 class="text-2xl font-bold">Budget</h3>
          <span class="text-2xl">$</span>
        </div>
        <div class="bg-white p-6 rounded-lg border">
          <div class="text-lg mb-6">
            ${budget}
          </div>
          <table class="w-full mb-6">
            <thead>
              <tr>
                <th class="text-left py-2">Item</th>
                <th class="text-right py-2">Price</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="py-2">Labor</td>
                <td class="text-right py-2">$2,000</td>
              </tr>
              <tr>
                <td class="py-2">Materials</td>
                <td class="text-right py-2">$3,000</td>
              </tr>
              <tr class="border-t">
                <td class="py-2 font-bold">Total</td>
                <td class="text-right py-2 font-bold">$5,000</td>
              </tr>
            </tbody>
          </table>
          
          <div class="bg-muted/20 p-4 rounded-lg">
            <h4 class="font-semibold mb-2">Payment Schedule</h4>
            <div class="grid grid-cols-2 gap-4">
              <div>
                <p class="text-sm text-muted-foreground">Down Payment (50%)</p>
                <p class="font-bold">$2,500</p>
              </div>
              <div>
                <p class="text-sm text-muted-foreground">Final Payment</p>
                <p class="font-bold">$2,500</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="mt-12 pt-8 border-t">
        <div class="mb-8">
          <h3 class="font-bold text-lg mb-4">Terms & Conditions</h3>
          <div class="space-y-6">
            <section>
              <h4 class="font-semibold mb-2">1. Estimate Validity</h4>
              <ul class="list-disc pl-5 space-y-1">
                <li>This estimate is valid for 30 days from the date issued.</li>
                <li>Prices are subject to change if the estimate expires.</li>
              </ul>
            </section>
            
            <section>
              <h4 class="font-semibold mb-2">2. Payment Terms</h4>
              <ul class="list-disc pl-5 space-y-1">
                <li>A 50% down payment is required to begin work.</li>
                <li>The remaining balance is due upon project completion.</li>
                <li>All payments must be made by check or bank transfer.</li>
                <li>Late payments are subject to a 1.5% monthly interest charge.</li>
              </ul>
            </section>
            
            <section>
              <h4 class="font-semibold mb-2">3. Project Changes</h4>
              <ul class="list-disc pl-5 space-y-1">
                <li>Any modifications to the scope of work must be agreed upon in writing.</li>
                <li>Changes may affect the project timeline and final cost.</li>
                <li>Additional work will be billed at our standard rates.</li>
              </ul>
            </section>
            
            <section>
              <h4 class="font-semibold mb-2">4. Warranties</h4>
              <ul class="list-disc pl-5 space-y-1">
                <li>Workmanship is guaranteed for one year from completion.</li>
                <li>Manufacturer warranties apply to all materials used.</li>
                <li>Warranty claims must be submitted in writing.</li>
              </ul>
            </section>
          </div>
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