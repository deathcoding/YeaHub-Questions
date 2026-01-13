import { Input } from "@/shared/ui/Input";
import { useState, type ChangeEvent } from "react";

export function SearchContent() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  return (
    <Input
      value={searchTerm}
      onChange={handleInputChange}
      placeholder="Введите запрос"
    />
  );
}
