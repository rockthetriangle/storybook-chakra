interface ButtonProps {
  children: React.ReactNode;
  color?: string;
}

const Button = ({ children, color = "bg-blue-600 hover:bg-blue-700 text-white" }: ButtonProps) => {
  return (
    <button className={`px-4 py-2 rounded-md ${color}`}>
      {children}
    </button>
  );
};

export default Button;
