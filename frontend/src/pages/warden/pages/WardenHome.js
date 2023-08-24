import React from 'react'
import styled from "styled-components"
const Image = styled.img`
  height: 100vh;
`
const url = "https://img.jagranjosh.com/images/2022/December/30122022/National-Institute-of-Technology-NIT-Patna-Hostel-1.jpg"
const WardenHome = () => {
  return (
    <div >
        <Image src={url}  />
    </div>
  )
}

export default WardenHome