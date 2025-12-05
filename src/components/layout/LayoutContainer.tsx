import { cn } from "@/lib/utils";

export default function LayoutContainer({
  children,
  className,
  outerClassName,
}: {
  children: React.ReactNode;
  className?: string;
  outerClassName?: string;
}) {
  return (
    <div className={cn("w-full overflow-x-hidden", outerClassName)}>
      <div className={cn("max-w-[1600px] w-full mx-auto px-4 sm:px-6 md:px-8 flex justify-center", className)}>
        {children}
      </div>
    </div>
  );
}
