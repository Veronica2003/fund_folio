import React from 'react'

const Username = ({params}) => {
  return (
    <>
      {params.username}
      <div className='cover w-full h-1/4 relative'>
        <img className=' w-full h-1/4' src="https://wallpapercave.com/wp/wp44691.jpg"  alt=""/>
      <div className='absolute -bottom-14 right-[46%] border-white border-2 rounded-full'>
        <img className='rounded-full' width={150} height={150} src='https://i.pinimg.com/736x/fc/e3/9e/fce39e59177ee55442d30b641be54ae1.jpg' alt=''/>
      </div>
      </div>
      <div className='info flex justify-center items-center my-24 flex-col gap-2'>
        <div className='font-bold text-lg'>@{params.username}</div>
        <div className='text-slate-400'>Professional Dancer ,  Music Videos</div>
        <div className='text-slate-400'>9,674 members . 82 posts . Rs.1,00,000/release </div>
       
      <div className='payment flex justify-center gap-3 w-[80%] mt-11'>
        <div className='supporters justify-center w-1/2 bg-slate-900 rounded-lg text-white p-10'>
        <h2 className='text-2xl  font-bold my-5'>Supporters</h2>
        <ul >
          <li className='my-4 flex gap-2 item-center'>
            <img width={55} height ={55} src="https://png.pngtree.com/png-clipart/20230927/original/pngtree-man-avatar-image-for-profile-png-image_13001882.png" />
            <span>Rohan donated <span className='font-bold'>Rs.1000</span> with a message "Love your dance bro, waiting for a new video</span></li>
            <li className='my-4 flex gap-2 item-center'>
            <img width={55} height ={55} src="https://png.pngtree.com/png-clipart/20230927/original/pngtree-man-avatar-image-for-profile-png-image_13001882.png" />
            <span>Rohan donated <span className='font-bold'>Rs.1000</span> with a message "Love your dance bro, waiting for a new video</span></li>
            <li className='my-4 flex gap-2 item-center'>
            <img width={55} height ={55} src="https://png.pngtree.com/png-clipart/20230927/original/pngtree-man-avatar-image-for-profile-png-image_13001882.png" />
            <span>Rohan donated <span className='font-bold'>Rs.1000</span> with a message "Love your dance bro, waiting for a new video</span></li>
            <li className='my-4 flex gap-2 item-center'>
            <img width={55} height ={55} src="https://png.pngtree.com/png-clipart/20230927/original/pngtree-man-avatar-image-for-profile-png-image_13001882.png" />
            <span>Rohan donated <span className='font-bold'>Rs.1000</span> with a message "Love your dance bro, waiting for a new video</span></li>
            
            
        </ul>
        </div>
        <div className='makePayment w-1/2 bg-slate-900 rounded-lg text-white p-10'>
        <h2 className='text-2xl font-bold my-5'>Make Payment</h2>
        <div className='flex gap-2 flex-col'>
          <div className='flex justify-between' >
          <input type="text" className=' w-1/2 p-3 rounded-lg bg-slate-500' placeholder='Enter Name'/>
          <input type="text" className=' w-1/2  p-3 rounded-lg bg-slate-500' placeholder='Enter comment'/>
          </div > 
          <input type="text" className='  w-full p-3 rounded-lg bg-slate-500' placeholder='Enter Amount'/>
          <button className='"w-full text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"'>Pay</button>
        </div>
        <div className='flex gap-2 mt-5'>
            <button className='bg-slate-800 p-3 rounded-lg'>Pay Rs.100</button>
            <button className='bg-slate-800 p-3 rounded-lg'>Pay Rs.500</button>
            <button className='bg-slate-800 p-3 rounded-lg'>Pay Rs.1000</button>
        </div>
        </div>
        </div>
      </div>
    </>
  )
}

export default Username
