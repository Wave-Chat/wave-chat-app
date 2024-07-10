import React from "react";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  labelText?: string;
  error?: string;
}

const Input = ({ labelText, error, ...props }: Props) => {
  return (
    <div className={props.className}>
      {labelText && (
        <label className="block text-muted-foreground mb-2 text-xs lg:text-sm xl:text-base">
          {labelText}
        </label>
      )}
      <input
        className={`border rounded-md disabled:border-muted w-full block outline-none py-2 px-1 transition-all text-xs lg:text-sm xl:text-base bg-input focus:ring focus:ring-primary 
          ${error ? "border-destructive animate-shake" : "border-border"}`}
        {...props}
      />
      {error && <p className="text-destructive text-xs mt-1">{error}</p>}
    </div>
  );
};

export default Input;
