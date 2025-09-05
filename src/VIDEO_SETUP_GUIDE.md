# Video Setup Guide

## Overview
Your portfolio now supports video backgrounds and character animations! This guide will help you add your video files to complete the setup.

## Required Video Files

### 1. Background Video
- **Location**: `/public/videos/sakura-live-wallpaper.mp4`
- **Purpose**: Animated background for the entire portfolio
- **Recommended specs**:
  - Format: MP4 (H.264) and WebM (VP9) for maximum compatibility
  - Resolution: 1920x1080 or higher
  - Duration: 10-30 seconds (it will loop)
  - File size: Keep under 10MB for good performance

### 2. Character Animation Videos
Place these in `/public/videos/`:
- `chibi-kaiser.mp4` - Kaiser from Blue Lock
- `chibi-dokja.mp4` - Kim Dokja from ORV  
- `chibi-eren.mp4` - Eren Yeager from AOT
- `chibi-hinata.mp4` - Hinata from Haikyuu

**Recommended specs for character videos**:
- Format: MP4 (H.264) and WebM (VP9) optional
- Resolution: 200x200 to 400x400 pixels (they display in circles)
- Duration: 2-10 seconds (they will loop)
- File size: Keep each under 2MB for smooth animations
- Background: Transparent or solid color (will be cropped to circle)

## File Structure
After adding your videos, your `/public` folder should look like:
```
public/
├── videos/
│   ├── sakura-live-wallpaper.mp4
│   ├── sakura-live-wallpaper.webm (optional)
│   ├── chibi-kaiser.mp4
│   ├── chibi-dokja.mp4
│   ├── chibi-eren.mp4
│   └── chibi-hinata.mp4
```

## Video Optimization Tips

### For Background Video:
1. Use a gentle, non-distracting animation
2. Consider using a cinemagraph-style effect
3. Ensure good contrast so text remains readable
4. Test on mobile devices for performance

### For Character Videos:
1. Center the character in the frame (will be cropped to circle)
2. Use smooth, looping animations
3. Bright, colorful characters work best
4. Consider the character's personality in the animation

## Fallback Behavior
If videos fail to load:
- Background falls back to the static sakura image
- Characters fall back to emoji representations
- Page remains fully functional

## Testing Checklist
- [ ] Videos load and play automatically
- [ ] Videos loop seamlessly
- [ ] Good performance on mobile devices
- [ ] Text remains readable over background
- [ ] Characters move smoothly during scroll
- [ ] Fallbacks work when videos are missing

## Browser Compatibility
- Chrome/Safari: Full video support
- Firefox: Full video support
- Mobile browsers: Autoplay may be restricted (handled gracefully)
- Older browsers: Automatic fallback to static content

## Performance Notes
- All videos are muted (required for autoplay)
- Character videos are small and optimized for smooth scrolling
- Background video has reduced opacity to maintain readability
- Loading states prevent layout jumps

Ready to add your videos? Just drop them into the `/public/videos/` folder with the correct names!