import { useState } from "react"
import { FaCamera } from "react-icons/fa"
import Tabs from "./Tabs"

const Profile = () => {
  const [bannerUrl, setBannerUrl] = useState("https://via.placeholder.com/1500x500")
  const [profileUrl, setProfileUrl] = useState("https://via.placeholder.com/100X100")

  const handleBannerChange = (event: any) => {
    const file = event.target.files[0]
    if (file) {
      setBannerUrl(URL.createObjectURL(file))
    }
  }
  const handleprofileChange = (event: any) => {
    const file = event.target.files[0]
    if (file) {
      setProfileUrl(URL.createObjectURL(file))
    }
  }
  return (
    <div className="relative w-[94%] ml-[5rem]">
      <div className="relative">
        <img src={bannerUrl} alt="background image" className="w-full h-60 object-cover" />
        <button className="absolute top-2 right-2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-600">
          <label htmlFor="banner-upload" className="cursor-pointer" >
            <FaCamera size={24} />
          </label>
          <input type="file" id="banner-upload" accept="image/*" className="hidden" onChange={handleBannerChange} />
        </button>
      </div>
      {/* Channel Logo */}
      <div className="flex items-center ml-4 mt-[2rem]">
        <img src={profileUrl} alt="Channel Logo" className="w-40 h-40 object-cover rounded-full border-white relative" />
        <button className="absolute ml-[3.6rem] z-10 mt-[9rem] bg-gray-800 text-white p-2 rounded-full hover:bg-gray-600">
          <label htmlFor="profile-upload" className="cursor-pointer" >
            <FaCamera size={24} />
          </label>
          <input type="file" className="hidden" id="profile-upload" accept="image/*"  onChange={handleprofileChange}  />
        </button>
        {/* Channel Details */}
        <div className="ml-4 mt-4">
          <h1 className="text-2xl font-bold ml-[2rem]">Samuel Eph</h1>
          <p className="ml-[2rem]">1M Views</p>
          <p className="mt-2 ml-[2rem]">
            This is a short description of the Youtube channel. It gives an overview of the content and what viewers can expect.
          </p>
          <button className="ml-[4rem] mt-4 bg-red-600 text-white py-2 px-4 rounded hover:bg-red-500">
            Subscribe
          </button>
        </div>
      </div>

      <Tabs />
    </div>
  )
}

export default Profile