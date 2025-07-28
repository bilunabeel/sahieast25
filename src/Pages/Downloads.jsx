import React from 'react'

const Downloads = () => {

  const docs = [{name:"Brochure",file:"BROCHURE FESTIVAL OF HOPE.pdf"},{name:"Schedule Day 01",file:"Day 01.pdf"},{name:"Schedule Day 02",file:"Day 02.pdf"},{name:"Schedule Day 03",file:"Day 03.pdf"},]
  return (
    <div className='bg-primary_black'>
    <section className="mt-16 padding-y padding-x max-container">
      <h1 className="mb-8 text-left font-ppneue text-8xl text-aquamarine">
        Downloads
      </h1>
      <div className="font-grotesk font-medium text-center flex gap-10 max-md:flex-col">
        {docs.map((doc)=>(
          <div className='flex flex-col gap-6 border rounded-3xl text-white border-theme_black p-6'>
          <h1>{doc.name}</h1>
          <a href={doc.file} download><button className='p-2 rounded-md w-full bg-celestial_blue hover:bg-grape'>Download</button></a>
      </div>
        ))}
        
      </div>
      
    </section></div>
  )
}

export default Downloads