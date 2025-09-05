// Configuration file for image positions, sizes and animations

export const imageConfig = {
  // ORV1 image configuration
  orv1: {
    maxHeight: '25vh',
    maxWidth: '25vw',
    zIndex: 999, // Highest z-index to ensure it's at the absolute top
    bottomOffset: 0, // No longer used as we position at top
  },
  
  // Kaiser image configuration
  kaiser: {
    zIndex: 40,
    // We're now handling the initial and animated positions directly in the component
    // using motion.div nested structure for better control
    transition: {
      type: 'tween',
      duration: 0.5,
      ease: 'easeOut'
    }
  }
};