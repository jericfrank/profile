import { useCallback } from 'react';
import ga from 'react-ga4';
import { motion } from 'framer-motion';

import {
  Button,
} from '@mui/material';

interface Props {
  text: string;
  url: string;
}

function CustomBtn({ text, url }: Props) {
  const handleClickButton = useCallback(() => {
    ga.event({
      category: 'CTA',
      action: 'Click',
      label: `Intro - let's chat button`,
    });
  }, []);

  return (
    <motion.div
      animate={{ y: [0, -10, 0] }}
      transition={{
        duration: 0.5,
        repeat: Infinity,
        repeatType: 'loop',
        ease: 'easeInOut',
      }}
    >
      <Button
        onClick={handleClickButton}
        component="a"
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        sx={{
          mt: 4,
          px: 4,
          py: 1.5,
          fontSize: '1.1rem',
          fontWeight: 'bold',
          borderRadius: '999px',
          background: 'rgba(0, 0, 0, 0.87)',
          color: '#fff',
          border: '4px solid rgba(0, 0, 0, 0.87)',
          // boxShadow: '0 4px 14px rgba(0, 124, 240, 0.4)',
          transition: 'all 0.3s ease-in-out',
          '&:hover': {
            transform: 'scale(1.1)',
          },
        }}
      >
        {text}
      </Button>
    </motion.div>
  );
}

export default CustomBtn;
