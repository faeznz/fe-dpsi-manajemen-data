import React from 'react';
import Lottie from 'react-lottie';
import LoadingAnimation from '../../assets/lotties/loading.json';

export default function LottieLoading() {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: LoadingAnimation,
      };
    
    return (
      <div>
        <Lottie 
          options={defaultOptions}
          height={100}
          width={100}
        />
      </div>
    );
  }
  