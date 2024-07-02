import { Typography } from '@mui/material';
import { useFeatureContext } from './context';

export function InnerBit() {
  const { name } = useFeatureContext();
  return <Typography>{name}</Typography>;
}
