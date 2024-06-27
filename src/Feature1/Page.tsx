import {
  Alert,
  Button,
  Container,
  Skeleton,
  Stack,
  Typography,
} from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';

export async function getSomething(value: number) {
  return new Promise<number>((resolve, reject) => {
    const valueIsEven = value % 2 === 0;
    const valueIsError = value === 4;
    setTimeout(
      () => {
        if (valueIsError) {
          reject(new Error(`Value is ${value}`));
          return;
        }
        if (valueIsEven) {
          resolve(value * Math.PI);
        } else {
          resolve(value * 2);
        }
      },
      200 + (valueIsEven ? 10 : 500),
    );
  });
}

export function Feature1Page() {
  const [value, setValue] = useState(1);
  // const [data, setData] = useState<number | null>(null);

  // const [isLoading, setIsLoading] = useState(false);
  // useEffect(() => {
  //   let isCurrent = true;
  //   setIsLoading(true);
  //   getSomething(value)
  //     .then((response) => {
  //       if (isCurrent) {
  //         setData(response);
  //         setIsLoading(false);
  //       }
  //     })
  //     .catch((error) => {
  //       if (isCurrent) {
  //         console.error(error);
  //         setIsLoading(false);
  //       }
  //     });
  //   return () => {
  //     isCurrent = false;
  //   };
  // }, [value, { value }]);
  const { data, isLoading, error, isSuccess } = useQuery({
    queryKey: ['/getSomething', value],
    queryFn: () => {
      return getSomething(value);
    },
    retry: 0, // Not a typical thing to set retry.
  });

  return (
    <Container maxWidth="xs">
      <Stack spacing={2}>
        <Typography>Value: {value}</Typography>
        <Typography>Data: {isSuccess ? data : '?'}</Typography>
        {error ? (
          <Typography color="error">Error: {String(error)}</Typography>
        ) : null}
        <Button
          onClick={() => {
            setValue((lastValue) => lastValue + 1);
            // refetch();
          }}
          variant="contained"
        >
          Increment
        </Button>
        {isLoading ? <Skeleton variant="rectangular" height={100} /> : null}
      </Stack>
    </Container>
  );
}
