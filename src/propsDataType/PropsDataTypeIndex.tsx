import React from 'react'
import StringBoolNumberDataType from './StringBoolNumberDataType'
import ObjectDataType from './ObjectDataType'
import ArrayObjectDataType from './ArrayObjectDataType'
import OptionalDataType from './OptionalDataType'

export default function PropsDataTypeIndex() {
  // const namesObject = {
  //   FirstName:"Emmanuel",
  //   LastName:"Saleem"
  // }
  // const arrayOfObject = [
  //   {
  //       FirstName:"Emmanuel 1",
  //       LastName:"Saleem"
  //   },
  //   {
  //       FirstName:"Emmanuel 2",
  //       LastName:"Saleem"
  //   },
  //   {
  //       FirstName:"Emmanuel 3",
  //       LastName:"Saleem"
  //   },
  //   {
  //       FirstName:"Emmanuel 4",
  //       LastName:"Saleem"
  //   }
  // ];

  return (
    <>
    <div>PropsDataTypeIndex</div>
    {/* <StringBoolNumberDataType name='Emmanuel' isLogin={true} count={123}/> */}
    {/* <ObjectDataType names={namesObject}/> */}
    {/* <ArrayObjectDataType arrayOfObject={arrayOfObject}/> */}
    <OptionalDataType name='emmanuel'/>
    </>
  )
}
