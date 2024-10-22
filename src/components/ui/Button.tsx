import Link from "next/link";

type ButtonProps = {
  disabled?: boolean;
  title?: string;
  text: string;
  className?: string;
  href?: string;
};

export const Button = ({
  disabled,
  title,
  text,
  className,
  href,
}: ButtonProps) => {
  if (href) {
    return (
      <Link
        href={href}
        className={`w-full block text-center bg-primary-green text-white py-4 rounded-lg hover:bg-primary-green transition-all text-sm ${className}`}
        title={title}
      >
        {text}
      </Link>
    );
  }

  return (
    <button
      type="submit"
      className={`w-full bg-primary-green text-white py-4 font-medium rounded-lg hover:bg-primary-green transition-all text-sm ${className}`}
      disabled={disabled}
      title={title}
    >
      {text}
    </button>
  );
};
