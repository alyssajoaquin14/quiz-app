import { useState, useEffect } from 'react';

export default function Confirmation() {
  const [data, setData] = useState<{ weight: string; birthday: string; email: string } | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/submit', {
          method: 'GET',
        });
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const result = await response.json();
        setData(result.data);
      } catch (err) {
        setError('Could not retrieve data. Please try again later.');
      }
    };
    fetchData();
  }, []);

  if (error) {
    return <p>{error}</p>;
  }

  if (!data) {
    return <p>Loading...</p>;
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <div className="w-full text-center">
        <h2 className="text-2xl font-bold mb-4">Thank You for Submitting the Quiz!</h2>
        <p><strong>Weight:</strong> {data.weight} lbs</p>
        <p><strong>Birthday:</strong> {data.birthday}</p>
        <p><strong>Email:</strong> {data.email}</p>
      </div>
    </div>
  );
}