import React from "react";
import { cn } from "@/lib/utils";

interface IconBoxProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  className?: string;
}

export default function IconBox({
  icon,
  title,
  description,
  className,
}: IconBoxProps) {
  return (
    <div
      className={cn(
        "flex flex-col items-center text-center p-6 rounded-lg bg-dark-50",
        className
      )}
    >
      <div className="w-16 h-16 rounded-lg bg-primary-500 text-white flex items-center justify-center mb-4 text-2xl">
        {icon}
      </div>
      <h3 className="text-lg font-semibold text-dark-900 mb-2">{title}</h3>
      <p className="text-dark-600 text-sm">{description}</p>
    </div>
  );
}
