import React from 'react'

const Reservation = () => {
  return (
    <div className='my-[120px] bg-white text-black'>
        <div className="pat-container ">
      <div
        className="bg-cover bg-center h-[1300px] md:h-[1000px] xl:h-[744px] rounded-xl relative"
        style={{ backgroundImage: "url('/image1.png')" }}
      >
        <div className="absolute bg-black opacity-50 inset-0 rounded-[20px]"></div>

        <div className="flex flex-col xl:flex-row w-full justify-center xl:justify-between items-center sm:px-10 py-[78px] xl:gap-[65px]">
          <div className="bg-white opacity-95 rounded-[20px] w-11/12 sm:w-[534px]">
            <div className="">
              <h1 className="text-black text-[28px] font-bold font-laila text-center pt-[60px]">
                Online reservation
              </h1>
              <hr className=" text-[#D9D9D9] border mt-6 mb-10" />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 px-6">
                <div>
                  <div className="flex text-lg font-semibold font-lora mb-4">
                    <span>
                      <img src="/Frame.png" alt="" />
                    </span>
                    <span>Pate Type</span>
                  </div>
                  <select
                    className="w-full p-5 border border-[#D9D9D9] rounded-sm text-base font-normal font-lora"
                  >
                    <option value="Select Pet Type" className='text-base font-normal font-lora'>Select Pet Type</option>
                    <option value="saab">Saab</option>
                    <option value="opel">Opel</option>
                    <option value="audi">Audi</option>
                  </select>
                </div>
                <div>
                  <div className="flex text-lg font-semibold font-lora mb-4">
                    <span>
                      <img src="/Capa_1.png" alt="" />
                    </span>
                    <span>Pate Type</span>
                  </div>
                  <select
                    className="w-full p-5 border border-[#D9D9D9] rounded-sm text-base font-normal font-lora"
                  >
                    <option value="Select Pet Type" className='text-base font-normal font-lora'>Select Pet Type</option>
                    <option value="saab">Saab</option>
                    <option value="opel">Opel</option>
                    <option value="audi">Audi</option>
                  </select>
                </div>
                <div>
                  <div className="flex text-lg font-semibold font-lora mb-4">
                    <span>
                      <img src="/Frame1.png" alt="" />
                    </span>
                    <span>Check In</span>
                  </div>
                  <select
                    className="w-full p-5 border border-[#D9D9D9] rounded-sm text-base font-normal font-lora"
                  >
                    <option value="Select Pet Type" className='text-base font-normal font-lora'>Select Pet Type</option>
                    <option value="saab">Saab</option>
                    <option value="opel">Opel</option>
                    <option value="audi">Audi</option>
                  </select>
                </div>
                <div>
                  <div className="flex text-lg font-semibold font-lora mb-4">
                    <span>
                    <img src="/Frame1.png" alt="" />
                    </span>
                    <span>Check Out</span>
                  </div>
                  <select
                    className="w-full p-5 border border-[#D9D9D9] rounded-sm text-base font-normal font-lora"
                  >
                    <option value="Select Pet Type" className='text-base font-normal font-lora'>Select Pet Type</option>
                    <option value="saab">Saab</option>
                    <option value="opel">Opel</option>
                    <option value="audi">Audi</option>
                  </select>
                </div>
              </div>
              <div className="flex justify-center mb-[72px] mt-[50px]">
                <button className="bg-[#FF6F3F] text-white text-lg font-lora font-semibold rounded-[20px] py-3 sm:py-4 px-[50px] sm:px-[134px]">
                  Check Availability
                </button>
              </div>
            </div>
          </div>

          <div className="w-11/12 md:w-[641px] text-white opacity-95 pt-20 xl:pt-0">
            <h1 className="text-4xl sm:text-5xl font-laila font-bold mb-6">Pet’s day care</h1>
            <p className="text-lg font-lora font-semibold">
              A petstick pet day care offers a safe, fun place where pets get
              care, play, and attention while their owners are away, keeping
              them happy and stress-free.
            </p>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Reservation