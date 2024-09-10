import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-navy-blue hover:bg-navy-blue/90 text-white dark:bg-usmc-gold dark:hover:bg-usmc-gold/90 dark:text-dark-bg",
        destructive:
          "bg-usmc-scarlet hover:bg-usmc-scarlet/90 text-white dark:bg-usmc-scarlet dark:hover:bg-usmc-scarlet/90 dark:text-white",
        outline:
          "bg-transparent border border-navy-blue text-navy-blue hover:bg-navy-blue hover:text-white dark:border-usmc-gold dark:text-usmc-gold dark:hover:bg-usmc-gold dark:hover:text-dark-bg",
        secondary:
          "bg-light-accent hover:bg-light-accent/90 text-navy-blue dark:bg-dark-accent dark:hover:bg-dark-accent/90 dark:text-usmc-gold",
        ghost: "text-navy-blue hover:bg-navy-blue hover:text-white dark:text-usmc-gold dark:hover:bg-usmc-gold dark:hover:text-dark-bg",
        link: "text-navy-blue underline-offset-4 hover:underline dark:text-usmc-gold",
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }