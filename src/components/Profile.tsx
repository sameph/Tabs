import { useState } from "react"
import { FaCamera } from "react-icons/fa"

const Profile = () => {
  const [bannerUrl, setBannerUrl] = useState("https://via.placeholder.com/1500x500")
  const [profileUrl, setProfileUrl] = useState("https://via.placeholder.com/100")
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
    </div>
  )
}

export default Profile