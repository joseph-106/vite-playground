export const LinkButton = ({ text }: { text: string }) => {
  return (
    <div className="flex items-center py-2 pl-2 pr-3 mt-3 text-sm font-medium text-white bg-blue-500 rounded-md shadow-sm hover:bg-blue-400 group">
      {text}
    </div>
  );
};
