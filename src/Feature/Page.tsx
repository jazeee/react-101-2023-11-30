import { Typography } from '@mui/material';
import { InnerBit } from './InnerBit';
import { useFeatureContext } from './context';

export function FeaturePage() {
  // const { name } = useContext(FeatureContext);
  const { name } = useFeatureContext();
  return (
    <>
      <Typography>{name}</Typography> <InnerBit />
    </>
  );
}
