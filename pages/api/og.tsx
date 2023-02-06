import { ImageResponse } from '@vercel/og';
// import Image from 'next/image';
// import OgImage from '../public/og_image.png';

export const config = {
  runtime: 'edge',
};

export default async function handler() {
  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          width: '100%',
          height: '100%',
          textAlign: 'center',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {/* <Image
          src={OgImage}
          alt="image"
        /> */}
        Hello
      </div>
    ),
    {
      width: 2400,
      height: 1260,
    },
  );
}