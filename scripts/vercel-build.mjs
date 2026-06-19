import { execSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const outputDir = path.join(root, '.vercel', 'output');

// Run the regular Vite build
execSync('npm run build', { stdio: 'inherit' });

// Clean and create Vercel Output API structure
fs.rmSync(outputDir, { recursive: true, force: true });
fs.mkdirSync(path.join(outputDir, 'static'), { recursive: true });
fs.mkdirSync(path.join(outputDir, 'functions', 'index.func'), { recursive: true });

// Copy static client assets
copyDir(path.join(root, 'dist', 'client'), path.join(outputDir, 'static'));

// Copy built server into the edge function directory.
// With noExternal+inlineDynamicImports the build produces a single server.js.
const serverSrc = path.join(root, 'dist', 'server');
const funcDir = path.join(outputDir, 'functions', 'index.func');
copyDir(serverSrc, funcDir);

// Edge function entry point — adapts the Web Fetch export to Vercel edge handler
fs.writeFileSync(
  path.join(funcDir, 'index.js'),
  `import server from './server.js';
export default async function handler(request) {
  return server.fetch(request, {}, {});
}
`
);

// Vercel edge function config
fs.writeFileSync(
  path.join(outputDir, 'functions', 'index.func', '.vc-config.json'),
  JSON.stringify({ runtime: 'edge', entrypoint: 'index.js' })
);

// Vercel Output API routing config:
// 1. Serve immutable hashed assets directly
// 2. Fall through to filesystem for static files
// 3. Route everything else to the edge function
fs.writeFileSync(
  path.join(outputDir, 'config.json'),
  JSON.stringify({
    version: 3,
    routes: [
      {
        src: '/_build/(.*)',
        headers: { 'cache-control': 'public, max-age=31536000, immutable' },
        continue: true,
      },
      { handle: 'filesystem' },
      { src: '/(.*)', dest: '/index' },
    ],
  })
);

console.log('✓ Vercel output structure created');

function copyDir(src, dest) {
  if (!fs.existsSync(src)) {
    console.warn(`Warning: ${src} does not exist, skipping`);
    return;
  }
  fs.mkdirSync(dest, { recursive: true });
  for (const entry of fs.readdirSync(src, { withFileTypes: true })) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    if (entry.isDirectory()) {
      copyDir(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}
