'use client';
import LottieAnimation from 'lottie-animation';


export default function Home() {
  return (
    <main className="flex">
          <LottieAnimation
          animationPath={'emergency.json'}
          autoplay={true}
          style={{ width: 500, height: 500 }}
          className=' bg-no-repeat'
         />
    </main>
  );
}
