import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  taglineClassName?: string;
  titleClassName?: string;
  descriptionClassName?: string;
}

const SectionHeading = ({
  eyebrow,
  title,
  description,
  align = "center",
  taglineClassName,
  titleClassName,
  descriptionClassName,
}: SectionHeadingProps) => {
  const alignment =
    align === "center"
      ? "text-center mx-auto max-w-4xl"
      : "text-left max-w-4xl";

  return (
    <div className={cn("space-y-4", alignment)}>
      {eyebrow ? (
        <p
          className={cn(
            "text-sm uppercase tracking-[0.35em] text-emerald-700 font-semibold",
            taglineClassName
          )}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={cn(
          "text-4xl font-bold gradient-text leading-tight",
          titleClassName
        )}
      >
        {title}
      </h2>
      {description ? (
        <p className={cn("text-lg text-gray-600", descriptionClassName)}>
          {description}
        </p>
      ) : null}
    </div>
  );
};

export default SectionHeading;

