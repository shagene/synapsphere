import { useQuery } from '@tanstack/react-query';

// This is a mock function. Replace it with your actual API call.
const fetchQuizzes = async () => {
  // Simulating an API call
  await new Promise(resolve => setTimeout(resolve, 1000));
  return [
    { id: 1, title: 'JavaScript Basics' },
    { id: 2, title: 'React Fundamentals' },
    { id: 3, title: 'TypeScript Advanced' },
  ];
};

export function useQuizzes() {
  return useQuery({
    queryKey: ['quizzes'],
    queryFn: fetchQuizzes,
  });
}