import { useQuery } from '@tanstack/react-query';
import constate from 'constate';
import { createContext } from 'react';

interface FeatureContext {
  name: string;
  setName: (value: string) => void;
  somethingResponse: {
    data: string | null;
    isLoading: boolean;
    isSuccess: boolean;
    error: Error | null;
  };
}

const defaultFeatureContext: FeatureContext = {
  name: '',
  setName: () => {},
  somethingResponse: {
    data: null,
    isLoading: false,
    isSuccess: false,
    error: null,
  },
};

export const FeatureContext = createContext(defaultFeatureContext);

interface FeatureProps {
  id: string;
  suffix: string;
}

function useFeature(props: FeatureProps) {
  const { id, suffix } = props;
  // const { id } = useParams<{ id: string }>();
  // const [name, setName] = useState('Jaz');
  const somethingResponse = useQuery({
    queryKey: ['/getSomething', id, suffix],
    queryFn: () => {
      return new Promise<string>((resolve) => {
        setTimeout(() => {
          resolve('Jaz' + id + suffix);
        }, 1000);
      });
    },
  });

  return {
    somethingResponse,
    name: somethingResponse.data ?? '',
  };
}

export const [FeatureProvider, useFeatureContext] = constate(useFeature);
