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
    const projectNumber = Math.floor(100000 + Math.random() * 900000).toString();

    return `
      <div class="max-w-4xl mx-auto bg-white">
        <div class="flex justify-between items-start mb-12">
          <div>
            <h1 class="text-3xl font-bold mb-4">Project Proposal</h1>
            <p class="text-sm text-muted-foreground">Date: ${currentDate}</p>
            <p class="text-sm text-muted-foreground">Project #: ${projectNumber}</p>
          </div>
          <div class="text-right">
            <img src="https://images.pexels.com/photos/3760529/pexels-photo-3760529.jpeg" alt="Company Logo" class="w-32 h-auto mb-2" />
            <p class="text-sm">Custom Construction Co.</p>
            <p class="text-sm">123 Builder Street</p>
            <p class="text-sm">Construction City, ST 12345</p>
          </div>
        </div>

        <div class="mb-8 p-6 bg-gray-50 rounded-lg">
          <h2 class="text-xl font-semibold mb-4">Client Information</h2>
          <div class="grid grid-cols-2 gap-4">
            <div>
              <p class="font-medium">Name:</p>
              <p>${contactInfo.name}</p>
            </div>
            <div>
              <p class="font-medium">Address:</p>
              <p>${contactInfo.address}</p>
            </div>
            <div>
              <p class="font-medium">Phone:</p>
              <p>${contactInfo.phone}</p>
            </div>
            <div>
              <p class="font-medium">Email:</p>
              <p>${contactInfo.email}</p>
            </div>
          </div>
        </div>

        <div class="mb-8">
          <h2 class="text-xl font-semibold mb-4">Scope of Work</h2>
          <div class="p-6 bg-gray-50 rounded-lg">
            <p class="whitespace-pre-wrap">${scopeOfWork}</p>
          </div>
        </div>

        <div class="mb-8">
          <h2 class="text-xl font-semibold mb-4">Project Timeline</h2>
          <div class="p-6 bg-gray-50 rounded-lg">
            <p class="whitespace-pre-wrap">${timeline}</p>
          </div>
        </div>

        <div class="mb-8">
          <h2 class="text-xl font-semibold mb-4">Investment</h2>
          <div class="p-6 bg-gray-50 rounded-lg">
            <div class="mb-6">
              <p class="whitespace-pre-wrap">${budget}</p>
            </div>
            
            <div class="border-t pt-4 mt-4">
              <h3 class="font-medium mb-3">Payment Schedule</h3>
              <div class="grid grid-cols-2 gap-4">
                <div>
                  <p class="text-sm text-muted-foreground">Down Payment (${downPayment}%)</p>
                  <p class="font-bold text-lg">$${(parseFloat(budget.replace(/[^0-9.]/g, '')) * (parseInt(downPayment) / 100)).toFixed(2)}</p>
                </div>
                <div>
                  <p class="text-sm text-muted-foreground">Remaining Balance</p>
                  <p class="font-bold text-lg">$${(parseFloat(budget.replace(/[^0-9.]/g, '')) * (1 - parseInt(downPayment) / 100)).toFixed(2)}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="mb-12">
          <h2 class="text-xl font-semibold mb-4">Terms & Conditions</h2>
          <div class="p-6 bg-gray-50 rounded-lg">
            ${terms ? `
              <div class="whitespace-pre-wrap">${terms}</div>
            ` : `
              <div class="space-y-4">
                <section>
                  <h3 class="font-medium mb-2">1. Payment Terms</h3>
                  <ul class="list-disc pl-5 space-y-1">
                    <li>${downPayment}% down payment required to begin work</li>
                    <li>Remaining balance due upon completion</li>
                    <li>All payments must be made within 30 days of invoice date</li>
                  </ul>
                </section>
                
                <section>
                  <h3 class="font-medium mb-2">2. Project Timeline</h3>
                  <ul class="list-disc pl-5 space-y-1">
                    <li>Start date to be determined upon receipt of down payment</li>
                    <li>Timeline subject to change based on weather and material availability</li>
                  </ul>
                </section>

                <section>
                  <h3 class="font-medium mb-2">3. Warranty</h3>
                  <ul class="list-disc pl-5 space-y-1">
                    <li>Workmanship guaranteed for one year from completion</li>
                    <li>Manufacturer warranties apply to all materials</li>
                  </ul>
                </section>
              </div>
            `}
          </div>
        </div>

        <div class="grid grid-cols-2 gap-8 mt-12 pt-8 border-t">
          <div>
            <p class="font-medium mb-4">Client Acceptance:</p>
            <div class="border-b border-dashed w-full"></div>
            <p class="text-sm text-muted-foreground mt-2">Date</p>
          </div>
          <div>
            <p class="font-medium mb-4">Contractor Approval:</p>
            <div class="border-b border-dashed w-full"></div>
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