"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft, Shield, Calendar, FileText } from "lucide-react";
import { Navbar } from "../layout/Navbar";
import { Footer } from "../layout/Footer";

export interface LegalSection {
  id: string;
  title: string;
}

interface LegalDocLayoutProps {
  title: string;
  subtitle: string;
  lastUpdated: string;
  sections: LegalSection[];
  children: React.ReactNode;
}

export function LegalDocLayout({
  title,
  subtitle,
  lastUpdated,
  sections,
  children,
}: LegalDocLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col bg-background font-sans">
      <Navbar />

      <main className="flex-1 py-10 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Back link */}
          <div className="mb-8">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-primary-soft"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Back to Home</span>
            </Link>
          </div>

          {/* Page Header */}
          <div className="mb-10 rounded-2xl bg-surface p-6 sm:p-10 border border-border/80 shadow-sm">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-primary">
              <Shield className="h-4 w-4" />
              <span>FODDO Legal Compliance</span>
            </div>
            <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
              {title}
            </h1>
            <p className="mt-2 text-base text-muted-foreground max-w-3xl">
              {subtitle}
            </p>
            <div className="mt-4 flex items-center gap-4 text-xs font-medium text-muted-foreground border-t border-border/60 pt-4">
              <span className="flex items-center gap-1.5">
                <Calendar className="h-3.5 w-3.5 text-primary" />
                Last Updated: {lastUpdated}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <FileText className="h-3.5 w-3.5 text-primary" />
                Applies to FODDO Mobile & Web Services
              </span>
            </div>
          </div>

          {/* Main Layout Grid */}
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
            {/* Desktop Table of Contents Sidebar */}
            <aside className="hidden lg:block lg:col-span-3">
              <div className="sticky top-24 rounded-xl border border-border bg-card p-5 shadow-sm">
                <h3 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-4">
                  Table of Contents
                </h3>
                <nav className="space-y-1">
                  {sections.map((section, idx) => (
                    <a
                      key={section.id}
                      href={`#${section.id}`}
                      className="group flex items-center gap-2 rounded-lg px-3 py-2 text-xs font-medium text-muted-foreground transition-all hover:bg-surface hover:text-primary"
                    >
                      <span className="font-mono text-[10px] text-primary/70 group-hover:text-primary">
                        {String(idx + 1).padStart(2, "0")}.
                      </span>
                      <span className="line-clamp-1">{section.title}</span>
                    </a>
                  ))}
                </nav>
              </div>
            </aside>

            {/* Document Content */}
            <article className="lg:col-span-9">
              <div className="rounded-2xl border border-border bg-card p-6 sm:p-10 shadow-sm leading-relaxed">
                {children}
              </div>
            </article>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
