const ShoeInfo = () => {
  return (
    <section className='flex flex-col justify-between items-center w-full h-full absolute top-0 left-0'>

      <div className='flex flex-col justify-start items-center pt-[10rem] w-fit'>
        <div className='flex justify-center gap-5 sm:justify-between w-full'>
          <p className='font-bold text-sm text-black-100'>
            [ 0.01 ]
          </p>
          <p className='font-bold text-sm text-black-100'>
            [ 2024 ]
          </p>
        </div>
        <h1 className='text-4xl sm:text-7xl font-bold uppercase text-black-100 pb-3'>
          Illfoam <span className='text-orange italic'>Velocity</span>
        </h1>
        <p className='self-start w-fit break-words px-6 sm:px-0 sm:text-left text-center text-sm italic'>
          Hitting the gym, running errands, or chasing new records? the Velocity adapts to your every move.
        </p>
      </div>
      <div className='w-fit absolute sm:bottom-[20rem] sm:right-[8rem] bottom-[4rem] opacity-[0%] sm:opacity-[100%]'>
        <h2 className='font-semibold text-lg py-3 italic'>
          The iconic shoe that put <span className='font-bold text-orange'>IllFoam</span> on the map.
        </h2>
        <p className='sm:text-md text-sm'>
        Step into unparalleled comfort and performance<br/>
        with the IllFoam Velocity, the latest evolution<br/>
        in sports sneakers. Engineered for athletes and<br/> 
        casual wearers alike, this shoe combines<br/>
        cutting-edge design with feather-light support,<br/> 
        ensuring every step feels effortless.<br/><br/>

        The IllFoam Velocity features a revolutionary<br/> 
        dual-density IllFoam™ midsole, offering plush <br/>
        cushioning and responsive energy return for <br/>
        all-day comfort.
        </p>
      </div>

      <div className="absolute sm:left-[8rem] bottom-[5rem] sm:bottom-[20rem]">
        <h3 className="font-semibold text-lg py-5">
          Details
        </h3>
        <ul>
          <li className="listItem sm:text-md text-sm">
            <p>
              Regular fit
            </p>
          </li>
          <li className="listItem sm:text-md text-sm">
            <p>
              Dual-density IllFoam™ midsole
            </p>
          </li>
          <li className="listItem sm:text-md text-sm">
            <p>
              Textile upper
            </p>
          </li>
          <li className="listItem sm:text-md text-sm">
            <p>
              Upper is 50% recycled content
            </p>
          </li>
          <li className="listItem sm:text-md text-sm">
            <p>
              56mph top-speed
            </p>
          </li>
          <li className="listItem sm:text-md text-sm">
            <p>
              Textile lining
            </p>
          </li>
        </ul>
      </div>

      <div className="opacity-0 sm:opacity-100 absolute bottom-2 left-[50%] translate-x-[-50%]">
        <p className="text-md font-light">
          Copyright © 2025 ILLFOAM 
        </p>
      </div>
    </section>
  )
}

export default ShoeInfo