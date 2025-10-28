import { Fragment } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

export default function MainContent({
  children,
  settings,
  className,
}: {
  children: React.ReactNode;
  settings: {
    type: "video" | "image" | "color";
    src?: string;
    color?: string;
  };
  className?: string;
}) {
  return (
    <Fragment>
      <div
        className={cn(
          "w-full h-[670px] absolute top-0 left-0 right-0",
          className
        )}
      >
        {settings.type === "video" && (
          <video
            src={settings.src ?? ""}
            className="w-full h-full object-cover"
            autoPlay
            muted
            playsInline
            loop
          />
        )}
        {settings.type === "image" && (
          <div className="w-full h-full object-cover">
            <Image
              src={settings.src ?? ""}
              alt="background"
              fill
              className="object-cover"
            />
          </div>
        )}
        <div
          className={
            "w-full h-full absolute top-0 left-0 right-0 z-10 bg-black/50"
          }
          {...(settings.type === "color" && {
            style: { backgroundColor: settings.color },
          })}
        />
      </div>
      {children}
    </Fragment>
  );
}
