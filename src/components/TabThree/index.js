import React, { useEffect } from 'react'

const TabThree = ({ActArray, isArray, setarrpos}) => {
  var isArray = isArray.sort();
  useEffect(() => {
    return () => {
      setarrpos([])
    };
  }, [])
  return (
    <>
      <button onClick={() => ActArray()}>generate bilangan bulat terkecil</button>
      <table style={{
        marginTop: '10px'
      }}>
        <tr>
          {isArray.length > 0 && <th>{isArray[0]}</th>}
        </tr>
      </table>
    </>
  )
}

export default TabThree