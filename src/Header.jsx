import React from 'react'

export  const Header = ({value}) => {
 console.log(value)
    // let name = "Hey there name is sandeep kumar chaurasiya"
  return (

   <>
    <div>Header {value.name}</div>
    <div> {value.age}</div>
    <div> {value.post}</div>
   </>
  )
}


export const Footer = () => {
  return (
    <div>Footer</div>
  )
}


// export  {Header ,Footer}