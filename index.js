import { useState, useEffect } from 'react';

export const useOnline = () => {
  const [status, setStatus] = useState(true);

  const handleOffline = (e) => {
    setStatus(false);
  };

  const handleOnline = (e) => {
    setStatus(true);
  };

  useEffect(() => {
    addEventListener('offline', handleOffline);
    addEventListener('online', handleOnline);

    return () => {
      removeEventListener(handleOffline);
      removeEventListener(handleOnline);
    };
  }, []);

  return status; // Return either True or False
};
