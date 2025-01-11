import {useState} from 'react'

const Colorways = () => {
  const [ color, setColor ] = useState('original')

  return (
    <div className='absolute top-[15rem] left-[8rem] border border-white-100/[0.5] rounded-lg z-20 bg-black-100 opacity-[80%] backdrop-blur-md backdrop-filter'>
      <div className='border-b-[0.5px] border-white-100/[0.5px]'>
        <h3 className='font-bold text-md px-4 py-4 uppercase text-white-100'>
          Colorways
        </h3>
      </div>
      <div className='flex flex-col items-start justify-center'>
        <div className='w-full px-2 py-2'>
          <div id='original' className='colorway bg-[rgb(21,37,45)] bg-gradient-to-r from-black-100 from-25% via-orange via-50% to-grey to-75%' onClick={ (e) => { setColor(e.target.id) }}>
            <p>Original</p>
          </div>
        </div>
        <div id='red' className='colorway' onClick={ (e) => { setColor(e.target.id) }}>
          <p>
            Red 
          </p>
        </div>
        <div id='blue' className='colorway' onClick={ (e) => { setColor(e.target.id) }}>
          <p>
            Blue 
          </p>
        </div>
        <div id='custom' className='colorway' onClick={ (e) => { setColor(e.target.id) }}>
          <p>
            Create your own
          </p>
        </div>
      </div>
    </div>
  )
}

export default Colorways