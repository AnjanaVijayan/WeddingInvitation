# Anjana & Sachin - Wedding Website

A beautiful, vibrant wedding website with countdown timer, photo gallery, and background music.

## 📁 Folder Structure

```
wedding-website/
│
├── index.html          # Main HTML file
├── css/
│   └── style.css      # All styles
├── js/
│   └── script.js      # JavaScript for countdown & music
└── images/            # Your photos go here
    ├── bride.jpg      # Bride's main photo (350x450px recommended)
    ├── groom.jpg      # Groom's main photo (350x450px recommended)
    ├── gallery-1.jpg  # Gallery photo 1
    ├── gallery-2.jpg  # Gallery photo 2
    ├── gallery-3.jpg  # Gallery photo 3
    ├── gallery-4.jpg  # Gallery photo 4
    ├── gallery-5.jpg  # Gallery photo 5
    └── gallery-6.jpg  # Gallery photo 6
```

## 📸 Adding Your Photos

1. Prepare your images:
   - **Bride & Groom photos**: 350x450px (portrait orientation)
   - **Gallery photos**: 600x400px (landscape orientation)
   - Save as JPG format for best compatibility

2. Rename your images to match these names:
   - `bride.jpg` - Anjana's photo
   - `groom.jpg` - Sachin's photo
   - `gallery-1.jpg` through `gallery-6.jpg` - Your couple photos

3. Place all images in the `images/` folder

## 🎨 Customization

### Update Parents' Names
Open `index.html` and find these lines (around line 83 & 96):
```html
<strong>Mr. & Mrs. [Parents' Names]</strong>
```
Replace with actual parent names.

### Change Colors
Edit `css/style.css` at the top (lines 8-18) to change the color scheme:
```css
--primary-color: #c9184a;
--secondary-color: #ff006e;
```

## 🌐 FREE Hosting Options

### Option 1: GitHub Pages (RECOMMENDED - Easiest)

1. **Create GitHub Account**: Go to https://github.com and sign up (free)

2. **Create New Repository**:
   - Click "New Repository"
   - Name it: `yourname-wedding` (or any name)
   - Make it Public
   - Click "Create repository"

3. **Upload Files**:
   - Click "uploading an existing file"
   - Drag and drop ALL your files (index.html, css/, js/, images/)
   - Click "Commit changes"

4. **Enable GitHub Pages**:
   - Go to repository Settings
   - Scroll to "Pages" section
   - Under "Source", select "main" branch
   - Click Save

5. **Your Website URL**:
   - Will be: `https://yourusername.github.io/yourname-wedding/`
   - Takes 2-5 minutes to go live

**Video Tutorial**: https://www.youtube.com/watch?v=BA_c3bGQXlQ

---

### Option 2: Netlify (Advanced Features)

1. **Sign Up**: Go to https://www.netlify.com (free)

2. **Drag & Drop**:
   - After login, drag your entire `wedding-website` folder to Netlify
   - It will auto-deploy

3. **Custom Domain** (optional):
   - You can use a custom domain like `anjana-sachin.netlify.app`
   - Or buy a domain like `anjanasachinwedding.com`

**Benefits**:
- Instant deployment
- Automatic HTTPS
- Custom domain support
- Form handling

---

### Option 3: Vercel (For Developers)

1. **Sign Up**: https://vercel.com (free)
2. **Import Project**: Connect your GitHub or drag & drop
3. **Deploy**: Instant deployment with custom domain

---

### Option 4: InfinityFree (Traditional Hosting)

1. **Sign Up**: https://www.infinityfree.net (free)
2. **Upload via FTP**: Use FileZilla to upload files
3. **Access**: Your site at `yoursite.infinityfreeapp.com`

**Note**: More complex, but gives you traditional web hosting experience.

---

## 🎵 Background Music

The website uses a royalty-free track from Bensound. To change the music:

1. Download a royalty-free song (MP3 format)
2. Place it in the root folder or `music/` folder
3. Update `index.html` line 18:
```html
<source src="your-music-file.mp3" type="audio/mpeg">
```

**Free Music Sources**:
- https://www.bensound.com
- https://incompetech.com
- https://freemusicarchive.org

---

## ✅ Quick Checklist

- [ ] Add your photos to `images/` folder
- [ ] Update parents' names in `index.html`
- [ ] Test the website locally (double-click index.html)
- [ ] Choose a hosting platform
- [ ] Upload all files
- [ ] Share the link with family & friends!

---

## 🆘 Troubleshooting

**Images not showing?**
- Check file names match exactly (case-sensitive)
- Ensure images are in the `images/` folder
- Check image format is JPG or PNG

**Music not playing?**
- Some browsers block autoplay - user must click first
- Check internet connection for external music URL

**Website looks broken?**
- Ensure you uploaded ALL folders (css/, js/, images/)
- Check that folder structure is maintained

---

## 📱 Share Your Website

Once hosted, share the link via:
- WhatsApp
- Email
- Wedding invitations (QR code)
- Social media

---

## 💝 Credits

Website created with love for Anjana & Sachin's special day!

**Technologies Used**:
- HTML5
- CSS3
- Vanilla JavaScript
- Google Fonts (Playfair Display, Lora, Dancing Script)

---

**Questions?** Create an issue or contact the developer!

Congratulations on your upcoming wedding! 🎊💒
