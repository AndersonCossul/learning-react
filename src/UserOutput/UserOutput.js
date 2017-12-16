import React from 'react'
import './UserOutput.css'

const userOutput = (props) => {
  return (
    <div className="UserOutput">
      <p>Username: <strong>{props.username}</strong></p>
      <p>
        This is inside UserOutput and is the <strong>second</strong> paragraph.
        Cupidatat culpa cillum dolor do excepteur amet officia incididunt duis veniam veniam ea laborum. Aliquip non irure laborum minim adipisicing anim pariatur elit. Voluptate sit qui eu eu do in sunt elit. Incididunt laboris eu veniam laborum excepteur quis labore nostrud officia ex veniam aute occaecat enim. Sit ipsum enim aliquip pariatur minim eiusmod voluptate consectetur voluptate dolore proident.</p>
    </div>
  )
}

export default userOutput