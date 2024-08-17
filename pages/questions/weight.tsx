import { useState } from 'react';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { setWeight } from '../../store/quizSlice';

export default function Weight() {
  const dispatch = useDispatch();
  const weight = useSelector((state: RootState) => state.quiz.weight);
  const [localWeight, setLocalWeight] = useState(weight);
  const [error, setError] = useState('');
  const router = useRouter();

  const handleNext = () => {
    if (!localWeight || parseFloat(localWeight) <= 0) {
      setError('Please enter a valid weight.');
      return;
    }
    setError('');
    dispatch(setWeight(localWeight));
    router.push('/questions/birthday');
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <div className="w-full text-center max-w-xs">
        <h2 className="text-2xl font-bold mb-4">What's your weight?</h2>
        <input
          type="number"
          value={localWeight}
          onChange={(e) => setLocalWeight(e.target.value)}
          placeholder="Weight in lbs"
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