import { useCallback } from 'react';
import { Link } from 'react-router-dom';
import ga from 'react-ga4';

import { Avatar } from '@mui/material';

export function AvatarCircle() {
  const handleClick = useCallback(() => {
    ga.event({
      category: 'CTA',
      action: 'Click',
      label: 'Main - circle avatar linkedin',
    });
  }, []);

  return (
    <Link
      to="https://www.linkedin.com/in/jerecfrank/"
      target="_blank"
      onClick={handleClick}
    >
      <Avatar
        alt="Jerec Frank"
        src="https://aws-profile-s3.s3.us-east-1.amazonaws.com/unnamed.jpg"
        sx={{
          width: 60,
          height: 60,
          bgcolor: 'black',
          border: '4px solid rgba(0, 0, 0, 0.87)'
        }}
      />
    </Link>
  );
}
