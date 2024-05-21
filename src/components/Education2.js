import React from 'react'

const Education2 = () => {
  return (
    <div className='max-w-screen-2x1 container mx-auto px-4 md:px-20 my-4 '>
        <h1 className='  text-2xl font-bold md:ml-72 md:my-6 underline underline-offset-4'> Education Details-</h1>
    <div className="grid grid-cols-2 gap-4 my-6">
    <div>
    <h1 className='my-2 md:ml-72 md:text-2xl text-red-700'>Master of Computer Application  </h1>
    <p className='md:ml-72 '>Galotias College of Engineering and Technology, Greater Noida</p>
    </div>
    
    <div className='md:ml-72 text-green-700 mt-4 text-xl'>2022-2024</div>
  </div>

    <div className="grid grid-cols-2 gap-4">
    <div>
    <h1 className='my-2 md:ml-72 md:text-2xl text-red-700'>Bachelor of Science </h1>
    <p className='md:ml-72'>Deen Dayal Upadhyaya Gorakhpur University, Gorakhpur</p>
    </div>
    
    <div className='md:ml-72 text-green-700 mt-4 text-xl '>2019-2022</div>
  </div>

  <div className="grid grid-cols-2 gap-4">
    <div>
        <br/>
    <h1 className='my-2 md:ml-72 md:text-2xl text-red-700'>Intermediate</h1>
    <p className='md:ml-72'>Bapu Inter College Salempur, Deoria</p>
    </div>
    
    <div className='md:ml-72 text-green-700 mt-8 text-xl '>2017-2019</div>
  </div>

  <div className="grid grid-cols-2 gap-4">
    <div>
        <br/>
    <h1 className='my-2 md:ml-72 md:text-2xl text-red-700'>HighSchool</h1>
    <p className='md:ml-72'>Nanaji Sahdev Inter College Chakarawa , BahorDas</p>
    </div>
    
    <div className='md:ml-72 text-green-700 mt-8 text-xl'>2015-2017</div>
  </div>
  <br/>
  <br/>
  <hr/>
  </div>
  )
}

export default Education2
