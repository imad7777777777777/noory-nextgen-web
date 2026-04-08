const IPhoneFrame = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => {
  return (
    <div className={`relative ${className}`}>
      {/* iPhone frame */}
      <div className="relative bg-foreground/90 rounded-[3rem] p-[10px] shadow-xl">
        {/* Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[35%] h-[28px] bg-foreground/90 rounded-b-2xl z-20" />
        {/* Screen */}
        <div className="relative rounded-[2.4rem] overflow-hidden bg-background">
          {children}
        </div>
      </div>
    </div>
  );
};

export default IPhoneFrame;
