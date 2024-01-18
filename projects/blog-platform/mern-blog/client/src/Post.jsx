// import React from 'react'

export default function Post() {
  return (
    <div className="main">
    {/* <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Contact' element={<Contact/>}/>
    </Routes> */}

    <div className="post">
      <div>
        <img src="https://cdn.hashnode.com/res/hashnode/image/upload/v1701505655123/2a1b3f79-44fb-4853-af71-f0aa61a79957.png?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp" alt="" className="post-image" />
      </div>
      <div className="texts">
      <h1 className="post-title">Mastering Linear Regression</h1>
      <div className="post-meta">
        <span className="post-author"> Sai Prajoth
        </span>
        <span className="post-time">22:00 21-11-23</span>
      </div>
      <div className="post-description">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis soluta ea minus doloribus aliquam tenetur nobis, velit voluptatibus suscipit sint placeat id dolorum debitis quo, corporis aperiam nostrum at dolorem. Optio, iste porro impedit animi dolore dolores asperiores dignissimos nisi!</div>
      </div>
    </div>
  </div>
  )
}
