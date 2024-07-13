import clsx from "clsx";

export const MaxWidthWrapper = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <section
      className={clsx(
        "w-full max-w-7xl mx-auto px-0 sm:px-0 lg:px-8",
        className
      )}
    >
      {children}
    </section>
  );
};
