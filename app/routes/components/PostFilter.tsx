type PostFilterProps = {
  searchQuery: string;
  onSearchChange: (value: string) => void;
};

const PostFilter = ({ searchQuery, onSearchChange }: PostFilterProps) => {
  return (
    <div className="mb-4">
      <input
        placeholder="search post..."
        value={searchQuery}
        onChange={(e) => onSearchChange(e.target.value)}
        type="text"
        className="rounded-lg bg-gray-00 w-full px-4 py-2
         text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
};

export default PostFilter;
