import { useState } from 'react';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { setEmail } from '../../store/quizSlice';

export default function Email() {
  const dispatch = useDispatch();
  const weight = useSelector((state: RootState) => state.quiz.weight);
  const birthday = useSelector((state: RootState) => state.quiz.birthday);
  const email = useSelector((state: RootState) => state.quiz.email);
  const [localEmail, setLocalEmail] = useState(email);
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = async () => {
    if (!localEmail || !localEmail.includes('@')) {
      setError('Please enter a valid email address.');
      return;
    }
    setError('');
    dispatch(setEmail(localEmail));

    const response = await fetch('/api/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ weight, birthday, email: localEmail }),
    });

    if (response.ok) {
      router.push('/confirmation');
    } else {
      setError('Failed to submit data. Please try again.');
    }
  };


  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <div className="w-full text-center max-w-xs">
        <h2 className="text-3xl font-bold mb-4"> What's your email?</h2>
        <input
          type="email"
          value={localEmail}
          onChange={(e) => setLocalEmail(e.target.value)}
          placeholder="Email"
          className="w-full p-2 border border-gray-300 rounded-xl"
        />
        {error && <p className="text-red-500 mt-2">{error}</p>}
        <button
          onClick={handleSubmit}
          className="mt-4 w-full bg-green-500 text-white px-4 py-2 rounded-xl"
        >
          Submit
        </button>
      </div>
    </div>
  );
}