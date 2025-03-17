import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function Counter() {
  // useState hook to manage the counter state
  const [count, setCount] = useState(0);

  // Function to increment the counter
  const increment = () => {
    setCount(count + 1);
  };

  // Function to decrement the counter
  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <Card className="p-4 w-64 text-center">
      <CardContent>
        <h2 className="text-xl font-bold mb-2">Counter: {count}</h2>
        <div className="flex justify-center gap-4">
          <Button onClick={decrement} className="bg-red-500">-</Button>
          <Button onClick={increment} className="bg-green-500">+</Button>
        </div>
      </CardContent>
    </Card>
  );
}
