import ActiveInput from "./ActiveInput";
import DefaultInput from "./DefaultInput";

const SearchInput: React.FC = () => {
  // const [isActive, setIsActive] = useState(false);

  return (
    <div className="">
      <DefaultInput />
      <ActiveInput />
    </div>
  );
};

export default SearchInput;
