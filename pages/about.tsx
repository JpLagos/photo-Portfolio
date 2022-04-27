import React, {useState} from 'react'
import Image from 'next/image'

const about = () => {
  function cn(...classes: string[]) {
    return classes.filter(Boolean).join(' ');
  }
  const [isLoading, setLoading] = useState(true);


  return (
    <div className='flex md:mt-28 flex-col mx-auto lg:max-w-7xl'>
      <h1 className="text-6xl m-10 text-center font-montserrat">About</h1>
      <div className='flex justify-center mx-2 flex-col'>

        <Image
          src={'/background.jpg'}
          alt="About image"
          width="500px"
          height="450px"
          className={cn(
            'group-hover:opacity-75 duration-700 ease-in-out',
            isLoading
              ? 'grayscale blur-2xl scale-110'
              : 'grayscale-0 blur-0 scale-100'
          )}
          onLoadingComplete={() => setLoading(false)}
          >
        </Image>
        <p className='text-sm italic my-2 text-center'>"Beautiful things don't ask for attention"</p>

      </div>

      
      <div className='flex flex-col gap-10 justify-center self-center'>
      <h2 className='text-2xl '>My journey</h2>
        <div className='flex flex-col sm:flex-row gap-10 my-5 justify-center'>
            <p className='max-w-sm'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tincidunt id aliquet risus feugiat in ante. Porttitor rhoncus dolor purus non enim praesent elementum facilisis leo. In fermentum et sollicitudin ac orci phasellus egestas tellus rutrum. Ac turpis egestas sed tempus. Sapien nec sagittis aliquam malesuada bibendum arcu. In iaculis nunc sed augue. Fames ac turpis egestas integer eget aliquet nibh praesent. Magna fringilla urna porttitor rhoncus dolor. Lectus arcu bibendum at varius vel pharetra vel. Sit amet volutpat consequat mauris nunc. Pulvinar etiam non quam lacus. Non nisi est sit amet facilisis magna. 
            </p>
            <div className='flex justify-center'>
              <Image
              src={'/background.jpg'}
              alt="About image"
              width="350px"
              height="300px"
              className={cn(
                'group-hover:opacity-75 duration-700 ease-in-out',
                isLoading
                  ? 'grayscale blur-2xl scale-110'
                  : 'grayscale-0 blur-0 scale-100'
              )}
              onLoadingComplete={() => setLoading(false)}
              layout='fixed'
              ></Image>
            </div>
        </div>
        <div className='flex flex-col sm:flex-row-reverse gap-10 my-5'>
          <p className='max-w-sm'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tincidunt id aliquet risus feugiat in ante. Porttitor rhoncus dolor purus non enim praesent elementum facilisis leo. In fermentum et sollicitudin ac orci phasellus egestas tellus rutrum. Ac turpis egestas sed tempus. Sapien nec sagittis aliquam malesuada bibendum arcu. In iaculis nunc sed augue. 
          </p>
          <div className='flex justify-center'>
              <Image
              src={'/background.jpg'}
              alt="About image"
              width="350px"
              height="300px"
              className={cn(
                'group-hover:opacity-75 duration-700 ease-in-out',
                isLoading
                  ? 'grayscale blur-2xl scale-110'
                  : 'grayscale-0 blur-0 scale-100'
              )}
              onLoadingComplete={() => setLoading(false)}
              layout='fixed'
              ></Image>
            </div>
          </div>
      </div>
    </div>
  )
}

export default about