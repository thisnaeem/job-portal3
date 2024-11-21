'use client';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-red-600">Oops!</h1>
        <p className="text-2xl font-semibold text-gray-700 mt-4">Something went wrong</p>
        <p className="text-gray-500 mt-4 mb-8">{error.message}</p>
        <button
          onClick={reset}
          className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition-colors"
        >
          Try again
        </button>
      </div>
    </div>
  );
} 