import { useUrlFilter } from "@/shared/lib/hooks/useUrlFilter";
import { Input } from "@/shared/ui/Input";
import { type ChangeEvent } from "react";

export function SearchContent() {
  // const [searchTerm, setSearchTerm] = useState("");

  const { toggle, activeValue } = useUrlFilter({
      paramName: "keywords",
      mode: "single",
      resetParams: ["keywords"],
    });
  
   
    
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    toggle(e.target.value)
  };



  return (
    <Input
      value={activeValue}
      onChange={handleInputChange}
      placeholder="Введите запрос"
    />
  );
}
