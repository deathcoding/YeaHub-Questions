import { Button } from "@/shared/ui/Button";

const ratingValues = ['1-3', '4-6', '7-8', '9-10'];

export function FilterByRating() {

  const handleClick = () => {
     throw new Error("Function not implemented.");
  }

  return (
    <>
      {ratingValues.map(rate => (
        <Button key={rate} onClick={handleClick}>{rate}</Button>
      ))}
    </>
);
}
