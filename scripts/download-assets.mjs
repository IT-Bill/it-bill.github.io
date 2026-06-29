import { mkdir, writeFile } from "node:fs/promises";
import { basename, extname } from "node:path";

const imageAssets = [
  "https://www.jonsaxton.com/images/Jon.avif",
  "https://www.jonsaxton.com/images/TED.avif",
  "https://www.jonsaxton.com/images/f19f1fb61387b2e694d3d4b81617d0e4_685c1e5446d677e5cd68ba99_full_bleed-p-1600.webp",
  "https://www.jonsaxton.com/images/Dreamforce.svg",
  "https://www.jonsaxton.com/images/SOIC.avif",
  "https://www.jonsaxton.com/images/PCC.avif",
  "https://www.jonsaxton.com/images/The-Multiplier.avif",
  "https://www.jonsaxton.com/images/Harness.avif",
  "https://www.jonsaxton.com/images/Kalderos-AR.avif",
  "https://www.jonsaxton.com/images/Beefree-bg.avif",
  "https://www.jonsaxton.com/images/Martha-and-Mary-Background.webp",
];

const seoAssets = [
  {
    url: "https://www.jonsaxton.com/images/favicon.png",
    filename: "jonsaxton-favicon.png",
  },
  {
    url: "https://www.jonsaxton.com/images/webclip.png",
    filename: "jonsaxton-webclip.png",
  },
  {
    url: "https://cdn.prod.website-files.com/67c76c95fb90edd656cb91c4/681f2c6f9987f40eabeb59d2_a30e6668899233e0856beb0f4349891f_og.jpg",
    filename: "jonsaxton-og.jpg",
  },
];

const targets = [
  ...imageAssets.map((url) => ({
    url,
    path: `public/images/jonsaxton/${basename(new URL(url).pathname)}`,
  })),
  ...seoAssets.map(({ url, filename }) => ({
    url,
    path: `public/seo/${filename}`,
  })),
];

async function download({ url, path }) {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Failed ${response.status} ${url}`);
  }

  const buffer = Buffer.from(await response.arrayBuffer());
  const extension = extname(path).toLowerCase();
  if (!extension) {
    throw new Error(`Missing file extension for ${path}`);
  }

  await writeFile(path, buffer);
  return { url, path, bytes: buffer.byteLength };
}

await mkdir("public/images/jonsaxton", { recursive: true });
await mkdir("public/seo", { recursive: true });

const results = [];
for (let index = 0; index < targets.length; index += 4) {
  const batch = targets.slice(index, index + 4);
  results.push(...(await Promise.all(batch.map(download))));
}

console.table(results);
