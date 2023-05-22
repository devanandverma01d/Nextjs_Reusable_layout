import React from 'react'

const getTeacherData= async()=>{
  const res=await fetch('https://jsonplaceholder.typicode.com/users');
  console.log(res)
  return res.json()
}


const  Teacher = async() => {
  const data= await getTeacherData()
  //2.1 Hooks arae
  //2.2 Function definiion area
  //2.3 Return statement
  console.log(data)
  return (
    <div className="col-6 temporary_border">
      <h2>This is Teacher page</h2>
        <ul>
        {
          data.map((cv,idx,arr)=>{
            return (
              <>
                <li>{cv.name}</li>
              </>
            )
          })
        }
        </ul>
    </div>
  )
}

export default Teacher;