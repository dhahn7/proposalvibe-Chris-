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
      <div class="space-y-8">
        <div class="text-center">
          <h1 class="text-3xl font-bold">${contactInfo.name} Project Proposal</h1>
          <p class="text-muted-foreground">Date: ${currentDate}</p>
        </div>

        <div class="grid grid-cols-2 gap-8">
          <div>
            <h3 class="font-semibold mb-2">Customer</h3>
            <div class="space-y-1">
              <p>${contactInfo.name}</p>
              <p>${contactInfo.address}</p>
              <p>Phone: ${contactInfo.phone}</p>
              <p>Email: ${contactInfo.email}</p>
            </div>
          </div>
          <div>
            <h3 class="font-semibold mb-2">Company</h3>
            <div class="space-y-1">
              <p>Custom Builds LLC</p>
              <p>2059 N Wildflower Dr</p>
              <p>Casa Grande, AZ 85222</p>
              <p>contact@custombuilds.com</p>
            </div>
          </div>
        </div>

        <div>
          <h2 class="text-xl font-bold mb-4">Overview</h2>
          <div class="prose prose-sm max-w-none">
            <p>${scopeOfWork}</p>
          </div>
        </div>

        <div>
          <h2 class="text-xl font-bold mb-4">Scope of Work</h2>
          <div class="prose prose-sm max-w-none">
            <p>${scopeOfWork}</p>
          </div>
        </div>

        <div>
          <h2 class="text-xl font-bold mb-4">Timeline</h2>
          <div class="prose prose-sm max-w-none">
            <p>${timeline}</p>
          </div>
        </div>

        <div>
          <h2 class="text-xl font-bold mb-4">Price Breakdown</h2>
          <div class="bg-muted/20 p-6 rounded-lg">
            <div class="prose prose-sm max-w-none mb-6">
              <p>${budget}</p>
            </div>

            <div class="mt-6">
              <h3 class="font-semibold mb-2">Payment Schedule</h3>
              <div class="grid grid-cols-2 gap-4">
                <div>
                  <p class="text-sm text-muted-foreground">Down Payment (${downPayment}%)</p>
                  <p class="font-bold">Required to begin work</p>
                </div>
                <div>
                  <p class="text-sm text-muted-foreground">Final Payment</p>
                  <p class="font-bold">Due upon completion</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h2 class="text-xl font-bold mb-4">Terms & Conditions</h2>
          <div class="prose prose-sm max-w-none">
            ${terms || `
              <div class="space-y-4">
                <p>1. This proposal is valid for 30 days from the date above.</p>
                <p>2. A ${downPayment}% down payment is required to begin work.</p>
                <p>3. Final payment is due upon project completion.</p>
                <p>4. Any changes to the scope of work may affect the timeline and cost.</p>
              </div>
            `}
          </div>
        </div>

        <div class="grid grid-cols-2 gap-8 mt-12 pt-8 border-t">
          <div>
            <p class="font-semibold mb-4">Client Acceptance:</p>
            <div class="border-b border-dashed w-48"></div>
            <p class="text-sm text-muted-foreground mt-2">Date</p>
          </div>
          <div>
            <p class="font-semibold mb-4">Contractor Approval:</p>
            <div class="border-b border-dashed w-48"></div>
            <p class="text-sm text-muted-foreground mt-2">Date</p>
          </div>
        </div>
      </div>
    `;
  };

  return (
    <div className="container mx-auto py-8 px-4 max-w-[800px]">
      <DocumentEditor initialContent={generateInitialContent()} />
    </div>
  );
}