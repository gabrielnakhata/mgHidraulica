import React from "react";
import { cn } from "@/lib/utils";
import { Padauk } from "next/font/google";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  className?: string;
  centered?: boolean;
}

export default function SectionTitle({
  title,
  subtitle,
  className,
  centered = true,
}: SectionTitleProps) {
  return (
    <div className={cn("mb-12", centered && "text-center", className)}>
      <h2 className="text-3xl md:text-6xl font-bold text-dark-900 mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-3xl md:text-2xl text-dark-600 max-w-2xl mx-auto">{subtitle}</p>
      )}
    </div>
  );
}
