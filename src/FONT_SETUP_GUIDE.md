# Custom Fonts Setup Guide

## Overview
The portfolio now uses three beautiful custom fonts to enhance the Japanese/Korean aesthetic while maintaining English readability. This guide will help you add the required font files.

## Required Font Files

### 1. Amanojaku by tkzgraphic
- **Used for**: Main headings and titles
- **Character**: Bold, dynamic display font with Japanese influences
- **Files needed**:
  - `Amanojaku.woff2` (preferred)
  - `Amanojaku.woff` (fallback)
  - `Amanojaku.ttf` (fallback)

### 2. Osake by StringLabs
- **Used for**: Subheadings and navigation elements
- **Character**: Clean, modern with subtle Asian typography influences
- **Files needed**:
  - `Osake.woff2` (preferred)
  - `Osake.woff` (fallback)
  - `Osake.ttf` (fallback)

### 3. Mistuki by Måns Grebäck
- **Used for**: Quotes, decorative text, and accent elements
- **Character**: Elegant script with flowing letterforms
- **Files needed**:
  - `Mistuki.woff2` (preferred)
  - `Mistuki.woff` (fallback)
  - `Mistuki.ttf` (fallback)

## File Structure
Create the following folder structure and add your font files:

```
public/
├── fonts/
│   ├── Amanojaku.woff2
│   ├── Amanojaku.woff
│   ├── Amanojaku.ttf
│   ├── Osake.woff2
│   ├── Osake.woff
│   ├── Osake.ttf
│   ├── Mistuki.woff2
│   ├── Mistuki.woff
│   └── Mistuki.ttf
```

## Font Usage in the Portfolio

### Amanojaku
- Main "Sakura" title
- Section headings like "My World"
- Important navigation elements
- Footer decorative text

### Osake
- Subtitle "Dreams Falling Like Petals"
- Interest badges (Anime Enthusiast, etc.)
- Footer journey text
- Category headings

### Mistuki
- Quotes and italic text
- Decorative subtitles
- Poetry-like elements
- Accent text throughout

## Fallback Behavior
If custom fonts fail to load, the system gracefully falls back to:
- **Amanojaku** → Noto Sans JP → sans-serif
- **Osake** → Noto Sans KR → sans-serif  
- **Mistuki** → Dancing Script → cursive

## Font Optimization Tips

### File Formats
1. **WOFF2**: Modern, best compression (preferred)
2. **WOFF**: Good compression, wide support
3. **TTF**: Universal fallback

### Performance
- Keep font files under 100KB each if possible
- Use `font-display: swap` for better loading experience
- Consider subsetting fonts if they're large

## Browser Compatibility
- **Modern browsers**: Full WOFF2 support
- **Older browsers**: WOFF and TTF fallbacks
- **No support**: Graceful fallback to Google Fonts

## Testing Checklist
- [ ] All three fonts load correctly
- [ ] Text remains readable during font loading
- [ ] Fallbacks work when font files are missing
- [ ] Performance is good on mobile devices
- [ ] Typography hierarchy looks balanced

## Font Licensing
Make sure you have proper licensing for:
- **Amanojaku** by tkzgraphic
- **Osake** by StringLabs
- **Mistuki** by Måns Grebäck

Check each font's license terms for web usage rights.

## Troubleshooting

### Fonts not loading?
1. Check file paths in `/public/fonts/`
2. Verify font file integrity
3. Check browser developer console for errors
4. Ensure proper file permissions

### Text looks wrong?
1. Verify font file formats are correct
2. Check if fonts support the characters being used
3. Test fallback fonts are working
4. Clear browser cache

Ready to add your fonts? Just drop the font files into `/public/fonts/` with the correct names and the typography will come alive!