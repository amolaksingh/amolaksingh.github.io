type Props = {
  children: React.ReactNode;
  className?: string;
};

export default function GlassCard({
  children,
  className = "",
}: Props) {
  return (
    <div
      className={`
      rounded-3xl
      border
      border-white/10
      bg-white/5
      backdrop-blur-xl
      shadow-[0_20px_80px_rgba(0,0,0,0.35)]
      ${className}
    `}
    >
      {children}
    </div>
  );
}