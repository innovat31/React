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

// second one

import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

function Home() {
  return (
    <Card className="p-4 w-64 text-center">
      <CardContent>
        <h2 className="text-xl font-bold">Home Page</h2>
        <Link to="/activity"><Button className="mt-4 bg-blue-500">Go to Activity</Button></Link>
      </CardContent>
    </Card>
  );
}

function Activity() {
  const activities = ["Go for a walk", "Read a book", "Watch a movie", "Try a new recipe", "Do some yoga"];
  const randomActivity = activities[Math.floor(Math.random() * activities.length)];

  return (
    <Card className="p-4 w-64 text-center">
      <CardContent>
        <h2 className="text-xl font-bold">Random Activity</h2>
        <p className="mt-2">{randomActivity}</p>
        <Link to="/"><Button className="mt-4 bg-green-500">Back to Home</Button></Link>
      </CardContent>
    </Card>
  );
}

export default function App() {
  return (
    <Router>
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/activity" element={<Activity />} />
        </Routes>
      </div>
    </Router>
  );
}
