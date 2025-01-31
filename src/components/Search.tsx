import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Search from "@/assets/search.svg";

interface SearchComponentProps {
    handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    value?: string;
}

const SearchComponent = ({ handleInputChange }: SearchComponentProps) => {

  return (
    <div className="relative w-[200px]">
      <Input
        type="text"
        onChange={handleInputChange}
        className="pr-10 text-white border-[0.5px] border-gray-600 rounded-lg shadow-none "
        aria-label="Search input"
      />
      <Button
          size="icon"
          variant="ghost"
          className="absolute right-0 top-0 h-full hover:bg-accent-0"
          aria-label="Search"
        >
        <Search />
      </Button>
    </div>
  );
};

export default SearchComponent;
