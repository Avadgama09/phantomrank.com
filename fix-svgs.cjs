const fs = require('fs');
const path = require('path');
const dir = 'public/images/Logo';

try {
  let reddit = fs.readFileSync(path.join(dir, 'Redditlogo.svg'), 'utf8');
  reddit = reddit.replace(/<path d=/g, '<path fill="#FFFFFF" d=');
  fs.writeFileSync(path.join(dir, 'Redditlogo.svg'), reddit);

  let threads = fs.readFileSync(path.join(dir, 'Threadslogo.svg'), 'utf8');
  if (!threads.includes('fill=')) {
    threads = threads.replace(/<path /, '<path fill="#FFFFFF" ');
  }
  fs.writeFileSync(path.join(dir, 'Threadslogo.svg'), threads);

  let sf = fs.readFileSync(path.join(dir, 'Sourceforgelogo.svg'), 'utf8');
  sf = sf.replace(/fill="#000000"/gi, 'fill="#FFFFFF"');
  sf = sf.replace(/fill="#000"/gi, 'fill="#FFFFFF"');
  fs.writeFileSync(path.join(dir, 'Sourceforgelogo.svg'), sf);

  let tw = fs.readFileSync(path.join(dir, 'Twitterlogo.svg'), 'utf8');
  if (!tw.includes('fill=')) {
    tw = tw.replace(/<path /, '<path fill="#FFFFFF" ');
  }
  fs.writeFileSync(path.join(dir, 'Twitterlogo.svg'), tw);
  console.log("SVGs fixed!");
} catch (e) {
  console.error(e);
}
