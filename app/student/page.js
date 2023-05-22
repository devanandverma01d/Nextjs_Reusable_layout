import React from 'react'

const getStudentData= async()=>{
  const res=await fetch('https://gorest.co.in/public/v2/users');
  console.log(res)
  return res.json()
}


const  Student = async() => {
  const data= await getStudentData()
  //2.1 Hooks arae
  //2.2 Function definiion area
  //2.3 Return statement
  console.log(data)
  return (
    <div className="col-6 temporary_border">
      <h2>This is Student page</h2>
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

export default Student;