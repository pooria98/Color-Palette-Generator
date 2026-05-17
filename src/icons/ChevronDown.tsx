const ChevronDown = ({ ...props }: React.SVGAttributes<SVGSVGElement>) => {
  return (
    <svg
      className="i i-chevron-down"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="m4 8 8 8 8-8" />
    </svg>
  );
};

export default ChevronDown;
