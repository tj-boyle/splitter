'use client'

import { useCallback, useRef, useState } from 'react'
import Webcam from 'react-webcam'
import Image from 'next/image'
import { CameraIcon, XCircleIcon } from '@heroicons/react/24/outline'

import css from './page.module.css'

export default function Home() {
  const videoConstraints = {
    // facingMode: { exact: 'environment' }
  }

  const webcamRef = useRef<Webcam>(null)
  const [imgSrc, setImgSrc] = useState<string>('')

  // create a capture function
  const capture = useCallback(() => {
    if (webcamRef?.current) {
      const screenshot = webcamRef.current.getScreenshot();

      if (screenshot) setImgSrc(screenshot)
    }
  }, []);

  const deleteImage = useCallback(() => {
    setImgSrc('')
  }, [])

  return (
    <div>
      {!imgSrc ? (
        <Webcam 
          height={450} 
          width={600} 
          audio={false}
          screenshotFormat='image/jpeg'
          videoConstraints={videoConstraints}
          ref={webcamRef}
        />
      ) : (
        <Image 
          className={css.screenshot}
          src={imgSrc} 
          alt='webcam'
          height={450}
          width={600} 
        />
      )}
      <div className={css.buttonContainer}>
        {!imgSrc ? ( 
          <button className={css.button} onClick={capture}><CameraIcon/></button>
        ) : (
          <button className={css.button} onClick={deleteImage}><XCircleIcon/></button>
        )}
      </div>
    </div>
  )
}
