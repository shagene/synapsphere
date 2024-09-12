'use client'

import React from 'react'

export default function GuestLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="guest-container">{children}</div>;
}