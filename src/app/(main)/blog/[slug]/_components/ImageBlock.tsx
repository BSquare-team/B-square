// src/app/(main)/blog/[slug]/_components/ImageBlock.tsx

interface ImageBlockProps {
  src: string;
  alt: string;
  caption?: string;
}

export default function ImageBlock({ src, alt, caption }: ImageBlockProps) {
  return (
    <figure className="my-8">
      <img
        src={src}
        alt={alt}
        className="w-full rounded-xl object-cover max-h-96"
      />
      {caption && (
        <figcaption className="text-center text-sm text-gray-500 dark:text-gray-400 mt-2">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
