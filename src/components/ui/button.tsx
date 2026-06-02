import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium cursor-pointer transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow-sm hover:bg-primary/90 rounded-md",
        hero: "bg-brand-green text-white rounded-full shadow-[0_10px_30px_-10px_color-mix(in_oklab,var(--brand-green)_60%,transparent)] hover:bg-brand-green-light hover:-translate-y-0.5",
        heroOutline: "border border-brand-dark/15 bg-white/60 backdrop-blur text-brand-dark rounded-full hover:bg-white hover:border-brand-green",
        gold: "bg-brand-gold text-brand-dark rounded-full hover:brightness-105 hover:-translate-y-0.5",
        dark: "bg-brand-dark text-white rounded-full hover:bg-brand-dark/90",
        destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90 rounded-md",
        outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground rounded-md",
        secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80 rounded-md",
        ghost: "hover:bg-accent hover:text-accent-foreground rounded-md",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-5 py-2",
        sm: "h-8 px-3 text-xs",
        lg: "h-12 px-7 text-base",
        xl: "h-14 px-8 text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: { variant: "default", size: "default" },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
