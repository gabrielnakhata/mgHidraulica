import React from "react";
import { cn } from "@/lib/utils";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  hover?: boolean;
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, hover = true, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "rounded-lg border border-dark-200 bg-white p-6",
        hover && "transition-all hover:shadow-lg hover:border-primary-300",
        className
      )}
      {...props}
    />
  )
);

Card.displayName = "Card";

export default Card;
