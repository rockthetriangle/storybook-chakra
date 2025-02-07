import SearchInput from "../molecules/SearchInput";

interface SearchBarProps {
  withButton?: boolean;
  placeholder?: string;
}

const SearchBar = ({ withButton = true, placeholder }: SearchBarProps) => {
  return (
    <div className="w-full px-4">
      <SearchInput withButton={withButton} placeholder={placeholder} />
    </div>
  );
};

export default SearchBar;
