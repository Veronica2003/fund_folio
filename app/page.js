import Image from "next/image";

export default function Home() {
  return (
    <>
    <div className="flex justify-center flex-col items-center text-white h-[44vh]">
      <div className="font-bold flex gap-2 text-3xl justify-center items-center">Buy me a Drink<span><img  src="/soda-libre.gif" width={88} height={80}alt=""/></span></div>
      <p>
        A crowdfunding platform for creators and deveopers. Get funded by your followers.
      </p>
      <div>
      <button type="button" class="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Start Now</button>
      <button type="button" class="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Read More</button>
      </div>
    </div>
    <div className="bg-white h-1 opacity-10"></div>
    <div className="text-white container mx-auto pb-32 pt-14">
      <h2 className="text-3xl font-bold text-center mb-14">Your Followers can buy you a Drink</h2>
      <div className="flex gap-5 justify-around">
      <div className="item space-y-3 flex flex-col items-center justufy-center">
          <img className="bg-slate-400 rounded-full p-2" width={88} height={80} src="/Donation-Symbol-PNG-Clipart.png" alt=""/>
          <p className="font-bold">Fund Yourself</p>
          <p className="text-center">Your Followers can help you</p>
        </div>
        <div className="item space-y-3 flex flex-col items-center justufy-center">
          <img className="bg-slate-400 rounded-full p-2" width={88} height={80} src="/Donation-Symbol-PNG-Clipart.png" alt=""/>
          <p className="font-bold">Fund Yourself</p>
          <p className="text-center">Your Followers can help you</p>
        </div>
        <div className="item space-y-3 flex flex-col items-center justufy-center">
          <img className="bg-slate-400 rounded-full p-2" width={88} height={80} src="/Donation-Symbol-PNG-Clipart.png" alt=""/>
          <p className="font-bold">Fund Yourself</p>
          <p className="text-center">Your Followers can help you</p>
        </div>
      </div>
    </div>
    <div className="bg-white h-1 opacity-10"></div>
    <div className="text-white container mx-auto pb-32 pt-14">
      <h2 className="text-3xl font-bold text-center mb-14">Learn more about us</h2>
      <div className="flex gap-5 justify-around">
      <iframe width="560" height="315" src="https://www.youtube.com/embed/QtaorVNAwbI?si=zqFMLddpbTAVS4Ik" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </div>
    </div>
    </>
  );
}
