import { memo } from "react";

export const Button = memo<{
  onClick: () => void;
  children: React.ReactNode;
}>(({ onClick, children }) => {
  return (
    <button
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      onClick={onClick}
    >
      {children}
    </button>
  );
});
