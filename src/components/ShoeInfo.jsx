const ShoeInfo = () => {
  return (
    <section className='flex flex-col justify-between items-center w-full h-full absolute top-0 left-0'>
      <div className='flex flex-col justify-start items-center pt-[10rem] w-fit'>
        <div className='flex justify-between w-full'>
          <p className='font-bold text-sm text-black-100'>
            [ 0.01 ]
          </p>
          <p className='font-bold text-sm text-black-100'>
            [ 2024 ]
          </p>
        </div>
        <h1 className='text-7xl font-bold uppercase text-black-100 pb-3'>
          Illfoam <span className='text-orange'>Velocity</span>
        </h1>
        <p className='self-start w-fit text-sm italic'>
          Hitting the gym, running errands, or chasing new records? the Velocity adapts to your every move.
        </p>
      </div>
      <div className='w-fit absolute bottom-[10rem] right-[8rem]'>
        <h2 className='font-semibold text-lg py-3 italic'>
          The iconic shoe that put <span className='font-bold text-orange'>Illfoam</span> on the map.
        </h2>
        <p className='text-md '>
        Step into unparalleled comfort and performance<br/>
        with the Illfoam Velocity, the latest evolution<br/>
        in sports sneakers. Engineered for athletes and<br/> 
        casual wearers alike, this shoe combines<br/>
        cutting-edge design with feather-light support,<br/> 
        ensuring every step feels effortless.<br/><br/>

        The Illfoam Velocity features a revolutionary<br/> 
        dual-density Illfoam™ midsole, offering plush <br/>
        cushioning and responsive energy return for <br/>
        all-day comfort.
        </p>
      </div>
    </section>
  )
}

export default ShoeInfo