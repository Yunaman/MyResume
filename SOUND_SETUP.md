# 🔊 Sound Effects Setup

Your portfolio now has cool sound effects! But you need to add the actual sound files.

## 📁 Required Sound Files

Create these files in `public/sounds/` folder:

### 1. **whoosh.mp3**
- **When**: Page loads (Hero section entrance)
- **Vibe**: Smooth, elegant swoosh
- **Duration**: ~1 second
- **Free source**: https://mixkit.co/free-sound-effects/whoosh/

### 2. **type.mp3**
- **When**: Typewriter effect starts
- **Vibe**: Subtle mechanical typing sound
- **Duration**: ~0.3 seconds
- **Free source**: https://mixkit.co/free-sound-effects/typing/

### 3. **slide.mp3**
- **When**: Testimonial slides change
- **Vibe**: Soft slide/swipe sound
- **Duration**: ~0.5 seconds
- **Free source**: https://mixkit.co/free-sound-effects/slide/

### 4. **click.mp3**
- **When**: Buttons/dots clicked
- **Vibe**: Premium, soft click
- **Duration**: ~0.2 seconds
- **Free source**: https://mixkit.co/free-sound-effects/click/

### 5. **hover.mp3**
- **When**: Hover over cards/buttons
- **Vibe**: Ultra-subtle, elegant
- **Duration**: ~0.2 seconds
- **Free source**: https://mixkit.co/free-sound-effects/interface/

---

## 🎵 Recommended Sources for Free Sounds

### 1. **Mixkit** (Best for UI sounds)
- URL: https://mixkit.co/free-sound-effects/
- License: Free for commercial use
- Quality: High-quality, professional
- Categories: UI sounds, whooshes, clicks

### 2. **Freesound.org**
- URL: https://freesound.org/
- License: Various (check each sound)
- Quality: Community-driven, excellent variety
- Search terms: "ui whoosh", "keyboard type", "soft click"

### 3. **Zapsplat**
- URL: https://www.zapsplat.com/
- License: Free with attribution (Pro license available)
- Quality: Professional sound effects
- Categories: Interface sounds, technology

### 4. **Pixabay Sounds**
- URL: https://pixabay.com/sound-effects/
- License: Free for commercial use, no attribution
- Quality: Good variety
- Search: Interface sounds

---

## 📥 Quick Setup Instructions

### Option 1: Download from Mixkit (Recommended)

1. Go to https://mixkit.co/free-sound-effects/
2. Search for these terms and download:
   - "whoosh" → Save as `whoosh.mp3`
   - "typing" → Save as `type.mp3`
   - "swipe" or "slide" → Save as `slide.mp3`
   - "button click" → Save as `click.mp3`
   - "interface" or "hover" → Save as `hover.mp3`

3. Place all files in: `public/sounds/`

### Option 2: Create Placeholder Silence Files

If you want to test without sounds first:

```bash
# Create silent audio files (macOS/Linux)
cd public/sounds
for file in whoosh type slide click hover; do
  ffmpeg -f lavfi -i anullsrc=r=44100:cl=mono -t 0.5 -q:a 9 -acodec libmp3lame ${file}.mp3
done
```

Or just create empty files for now:
```bash
mkdir -p public/sounds
touch public/sounds/whoosh.mp3
touch public/sounds/type.mp3
touch public/sounds/slide.mp3
touch public/sounds/click.mp3
touch public/sounds/hover.mp3
```

---

## 🎨 Sound Specifications

For best results, use:

- **Format**: MP3 (best browser compatibility)
- **Sample Rate**: 44100 Hz
- **Bit Rate**: 128 kbps (good quality, small size)
- **Channels**: Mono (smaller file size)
- **Volume**: Normalized to -3dB (not too loud)

---

## ⚙️ Sound Settings (Already Configured)

The sounds are already integrated with these volumes:

```javascript
whoosh.mp3  → 0.3 (30% volume) - Subtle entrance
type.mp3    → 0.2 (20% volume) - Background typing
slide.mp3   → 0.3 (30% volume) - Smooth transitions
click.mp3   → 0.2 (20% volume) - Soft feedback
hover.mp3   → 0.15 (15% volume) - Ultra-subtle hover
```

These are **intentionally quiet** to match the luxury aesthetic.

---

## 🎯 Where Sounds Are Used

### Hero Section
- **whoosh.mp3**: Plays 500ms after page load
- **type.mp3**: Plays when name starts typing
- Creates cinematic entrance

### Testimonials Section
- **slide.mp3**: Plays on auto-scroll (every 5 seconds)
- **click.mp3**: Plays when clicking dots or play/pause
- Provides feedback for interactions

### Portfolio Section
- **hover.mp3**: Plays on card hover
- **click.mp3**: Plays on filter clicks
- Subtle interaction feedback

### Skills Section
- **hover.mp3**: Plays on card hover
- Creates premium interactive feel

### Future Enhancement Ideas
- Success sound on form submission
- Nav click sounds
- Theme toggle sound
- Button hover sounds

---

## 🔇 Disable Sounds (If Needed)

Sounds automatically respect:
- **User interaction**: Won't play until user interacts with page
- **Autoplay policies**: Browsers block autoplay, we handle gracefully
- **No errors**: If sound files missing, app still works perfectly

To disable sounds completely:
1. Delete the `useSound()` calls in components
2. Or just don't add the sound files (no errors!)

---

## 🎭 Sound Design Tips

### Premium Luxury Vibe

✅ **Do:**
- Use subtle, soft sounds (like turning pages in a luxury magazine)
- Keep volume low (20-40% max)
- Use high-quality recordings
- Match the cinematic Mont-Fort aesthetic

❌ **Don't:**
- Use loud, jarring sounds
- Overuse sound effects (every click doesn't need sound)
- Use 8-bit or retro sounds (doesn't match vibe)
- Use beeps or robotic sounds

### Recommended Sound Characteristics

- **Whoosh**: Silk fabric moving, smooth air
- **Typing**: Mechanical keyboard, not rapid-fire
- **Slide**: Paper sliding on wood, premium feel
- **Click**: Luxury car door latch, satisfying

---

## 📊 Performance Impact

- **File sizes**: ~10-30KB each (tiny!)
- **Total**: ~100KB for all sounds
- **Load time**: Negligible (async loaded)
- **Caching**: Browsers cache sound files
- **Mobile data**: Minimal impact

---

## ✅ Testing

After adding sound files:

1. **Open your portfolio**
2. **Refresh page** - Should hear whoosh
3. **Wait for typing** - Subtle typing sound
4. **Go to testimonials** - Listen for auto-scroll
5. **Click dots** - Hear click feedback
6. **Adjust volume** if needed in code

---

## 🎵 Customization

To change volume, edit these files:

**Hero.tsx:**
```typescript
const { play: playWhoosh } = useSound("/sounds/whoosh.mp3", 0.3); // Change 0.3
const { play: playType } = useSound("/sounds/type.mp3", 0.2);     // Change 0.2
```

**Testimonials.tsx:**
```typescript
const { play: playSlide } = useSound("/sounds/slide.mp3", 0.3);   // Change 0.3
const { play: playClick } = useSound("/sounds/click.mp3", 0.2);   // Change 0.2
```

---

## 🎉 Final Result

With sounds added, your portfolio will have:

🔊 **Cinematic entrance** with whoosh  
⌨️ **Typewriter sounds** on hero text  
🎯 **Smooth slide transitions** on testimonials  
✨ **Click feedback** for interactions  
💎 **Luxury feel** that matches the aesthetic  

**Your portfolio will stand out with premium audio feedback!** 🚀

---

**Sound files not included in repo due to licensing. Download from free sources above.** 🎵
