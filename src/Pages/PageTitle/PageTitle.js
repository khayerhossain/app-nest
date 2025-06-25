import { useEffect } from 'react';

const usePageTitle = (title) => {
  useEffect(() => {
    document.title = `AppNest || ${title}`;
  }, [title]);
};

export default usePageTitle;
