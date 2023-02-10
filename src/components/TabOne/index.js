import React from 'react'

const TabOne = ({ setValue, setNomer, Nomer }) => {

  const handleSubmit = () => {
    setValue(1);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label style={{ marginRight: '10px' }}>Enter number</label>
      <input
        style={{ width: '200px' }}
        type="number"
        min="1" 
        max="1000"
        required
        placeholder='isi dari 1 sampai 1000'
        value={Nomer}
        onChange={(e) => setNomer(e.target.value)}
      />
      <input type="submit" />
    </form>
  )
}

export default TabOne