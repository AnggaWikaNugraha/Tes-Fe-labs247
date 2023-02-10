import React from 'react'

const TabTwo = ({ActArray, isArray}) => {
  console.log(isArray);
  return (
    <>
      <button onClick={() => ActArray()}>generate array from input </button>
      <table style={{
        marginTop: '10px'
      }}>
        <tr>
          {
            isArray.map((e) => {
              return (<th>{e}</th>)
            })
          }
        </tr>
      </table>
    </>
  )
}

export default TabTwo