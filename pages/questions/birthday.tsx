import { useState } from 'react';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { setBirthday } from '../../store/quizSlice';

export default function Birthday() {
  const dispatch = useDispatch();
  const birthday = useSelector((state: RootState) => state.quiz.birthday);
  const [localBirthday, setLocalBirthday] = useState(birthday);
  const [error, setError] = useState('');
  const router = useRouter();

  const isValidDate = (dateString: string): boolean => {
    const date = new Date(dateString);
    const now = new Date();
    return date instanceof Date && !isNaN(date.getTime()) && date <= now;
  };

  const handleNext = () => {
    if (!localBirthday || !isValidDate(localBirthday)) {
      setError('Please enter a valid birthday.');
      return;
    }
    setError('');
    dispatch(setBirthday(localBirthday));
    router.push('/questions/email');
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <div className="w-full text-center max-w-xs">
        <h2 className="text-2xl font-bold mb-4">What's your birthday?</h2>
        <input
          type="date"
          value={localBirthday}
          onChange={(e) => setLocalBirthday(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-xl"
        />
        {error && <p className="text-red-500 mt-2">{error}</p>}
        <button
          onClick={handleNext}
          className="mt-4 w-full bg-green-500 text-white px-4 py-2 rounded-xl"
        >
          Next
        </button>
      </div>
    </div>
  );
}