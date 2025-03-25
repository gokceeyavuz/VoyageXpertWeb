export function Tabs({ children }) {
  return <div className="border-b">{children}</div>;
}

export function TabsList({ children }) {
  return <div className="flex">{children}</div>;
}

export function TabsTrigger({ children, onClick }) {
  return (
    <button className="px-4 py-2 border-b-2" onClick={onClick}>
      {children}
    </button>
  );
}

export function TabsContent({ children }) {
  return <div className="p-4">{children}</div>;
}
