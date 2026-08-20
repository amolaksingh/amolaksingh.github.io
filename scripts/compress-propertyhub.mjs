import sharp from "sharp";
import fs from "fs";
import path from "path";

const inputDir = "./public/projects/propertyhub";
const outputDir = "./public/projects/propertyhub-compressed";

fs.mkdirSync(outputDir, { recursive: true });

const files = fs
  .readdirSync(inputDir)
  .filter((file) => /\.(png|jpg|jpeg)$/i.test(file));

for (const file of files) {
  const input = path.join(inputDir, file);
  const output = path.join(
    outputDir,
    file.replace(/\.(png|jpg|jpeg)$/i, ".webp")
  );

  await sharp(input)
    .resize({
      width: 900,
      withoutEnlargement: true,
    })
    .webp({
      quality: 72,
      effort: 5,
    })
    .toFile(output);

  const originalSize = fs.statSync(input).size;
  const compressedSize = fs.statSync(output).size;

  console.log(
    `${file}: ${(originalSize / 1024 / 1024).toFixed(2)} MB -> ${(compressedSize / 1024 / 1024).toFixed(2)} MB`
  );
}
