import { useMemo } from 'react';

import { Box } from '@mui/material';
import { motion } from 'framer-motion';

type FloatingIconProps = {
  src: string;
  size?: number;
  delay?: number;
  position?: {
    top?: string;
    left?: string;
    bottom?: string;
    right?: string;
  };
};

function FloatingIcon({
  src,
  size = 50,
  delay = 0,
  position,
}: FloatingIconProps) {
  const defaultPosition = useMemo(() => ({
    top: `${Math.random() * 80 + 10}%`,
    left: `${Math.random() * 90 + 5}%`,
  }), []);

  return (
    <Box
      sx={{
        position: 'absolute',
        ...(position || defaultPosition),
        zIndex: 0,
      }}
    >
      <motion.img
        src={src}
        alt="Floating Icon"
        width={size}
        height={size}
        initial={{ y: 0 }}
        animate={{ y: [0, -20, 0] }}
        transition={{
          duration: 4,
          repeat: Infinity,
          repeatType: 'loop',
          ease: 'easeInOut',
          delay,
        }}
        style={{ opacity: 0.8 }}
      />
    </Box>
  );
}

const ICON_PATHS = [
  'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg',
  'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg',
  'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg',
  'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg',
  'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original-wordmark.svg'
];

function FloatingIconContainer() {
  return (
    <>
      {ICON_PATHS.map((path, i) => (
        <FloatingIcon src={path} delay={i * 0.5} position={{ bottom: '30px', right: `${i * 200}px` }} />
      ))}
    </>
  );
}

export default FloatingIconContainer;
