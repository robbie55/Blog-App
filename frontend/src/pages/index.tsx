import { useState } from 'react';

export default function Home() {
  const [price, setPrice] = useState<number>(0);

  return (
    <div>
      <div>
        <span>Some Blog Post</span>
      </div>
      <div>
        <span>{price}</span>
      </div>
    </div>
  );
}
