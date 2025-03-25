export default function Input({ placeholder, className, ...props }) {
    return (
      <input className={`p-2 border rounded ${className}`} placeholder={placeholder} {...props} />
    );
  }
  
