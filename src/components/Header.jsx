const Header = () => {
  return (
    <header className='absolute top-0 left-0 w-full h-[5rem] flex justify-center items-center z-20'> 
      <div className='w-[5rem] h-full pt-5'>
        <figure className='h-[5rem] w-full'>
          <img 
            className='h-full w-full object-cover'
            src='./src/assets/logo.png'
            alt='logo'
          /> 
        </figure>
      </div>
    </header>
  )
}

export default Header