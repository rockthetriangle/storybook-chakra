import Input from "../atoms/Input";
import Button from "../atoms/Button";
import Icon from "../atoms/Icon";

interface SearchInputProps {
  withButton?: boolean;
  placeholder?: string;
}

const SearchInput = ({ withButton = true, placeholder }: SearchInputProps) => (
  <div className="flex w-full border border-gray-300 rounded-md dark:bg-gray-800 overflow-hidden">
    {/* Left-aligned Magnifying Glass Icon */}
    <div className="p-2">
      <Icon name="search" size="20px" color="gray" />
    </div>

    {/* Input Field */}
    <Input placeholder={placeholder} />

    {/* Right-aligned Search Button */}
    {withButton && (
      <Button className="px-4 py-2 bg-blue-500 text-white rounded-r-md hover:bg-blue-600">
        Search
      </Button>
    )}
  </div>
);

export default SearchInput;
