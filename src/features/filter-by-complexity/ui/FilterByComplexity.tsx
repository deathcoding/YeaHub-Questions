import { Button } from "@/shared/ui/Button";

const complexityRanges = ['1-3', '4-6', '7-8', '9-10'];

export function FilterByComplexity() {

  const handleClick = () => {
     throw new Error("Function not implemented.");
  }

  return (
    <>
      {complexityRanges.map(range => (
        <Button key={range} onClick={handleClick}>{range}</Button>
      ))}
    </>
);
}
