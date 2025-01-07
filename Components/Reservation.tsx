import React from 'react'

const Reservation = () => {
  return (
    <div>
        <div className="w-full sm:w-11/12 lg:w-[80%] mx-auto mt-20 relative">
      <div
        className="bg-cover bg-center h-[700px] md:h-[550px] lg:h-[700px] rounded-xl"
        style={{ backgroundImage: "url('/image1.png')" }}
      >
        <div className="absolute bg-black opacity-50 inset-0 rounded-xl"></div>

        <div className="absolute top-0 flex flex-col-reverse md:flex-row gap-5 p-5">
          <div className=" w-[98%] sm:w-11/12 justify-center  mx-auto md:justify-start md:w-[55%] lg:w-[45%] flex items-center md:mt-16 lg:mt-[140px]">
            <div className="bg-white rounded-md p-4 py-8 w-full sm:w-11/12 md:w-auto">
              <h1 className="text-3xl font-bold font-laila text-center">
                Online reservation
              </h1>
              <hr className="my-3" />

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="flex text-lg font-medium font-lora gap-2 my-2">
                    <span>
                      <img src="/Frame.png" alt="" />
                    </span>
                    <span>Pate Type</span>
                  </div>
                  <select
                    className="border p-3 font-normal text-base rounded-md focus:border-black w-full"
                  >
                    <option value="Select Pet Type">Select Pet Type</option>
                    <option value="saab">Saab</option>
                    <option value="opel">Opel</option>
                    <option value="audi">Audi</option>
                  </select>
                </div>
                <div>
                  <div className="flex text-lg font-medium font-lora gap-2 my-2">
                    <span>
                      <img src="/Capa_1.png" alt="" />
                    </span>
                    <span>Pate Type</span>
                  </div>
                  <select
                    className="border p-3 font-normal text-base rounded-md focus:border-black w-full"
                  >
                    <option value="Select Pet Type">1 Pets</option>
                    <option value="saab">Saab</option>
                    <option value="opel">Opel</option>
                    <option value="audi">Audi</option>
                  </select>
                </div>
                <div>
                  <div className="flex text-lg font-medium font-lora gap-2 my-2">
                    <span>
                      <img src="/Frame1.png" alt="" />
                    </span>
                    <span>Check In</span>
                  </div>
                  <select
                    className="border p-3 font-normal text-base rounded-md focus:border-black w-full"
                  >
                    <option value="Select Pet Type">DD-MM-YY</option>
                    <option value="saab">Saab</option>
                    <option value="opel">Opel</option>
                    <option value="audi">Audi</option>
                  </select>
                </div>
                <div>
                  <div className="flex text-lg font-medium font-lora gap-2 my-2">
                    <span>
                    <img src="/Frame1.png" alt="" />
                    </span>
                    <span>Check Out</span>
                  </div>
                  <select
                    className=" border p-3 font-normal text-base rounded-md focus:border-black w-full"
                  >
                    <option value="Select Pet Type">DD-MM-YY</option>
                    <option value="saab">Saab</option>
                    <option value="opel">Opel</option>
                    <option value="audi">Audi</option>
                  </select>
                </div>
              </div>
              <div className="flex justify-center">
                <button className="bg-[#FF6F3F] text-white pt-1 pb-[6px] px-5 text-lg font-normal font-lora rounded-3xl mt-4">
                  Check Availability
                </button>
              </div>
            </div>
          </div>

          <div className="text-white text-center  md:text-start w-11/12 mx-auto md:w-[45%] lg:w-[55%] mt-10 md:mt-32 lg:mt-[267px]">
            <h1 className="text-5xl font-laila font-bold mb-3">Pet’s day care</h1>
            <p className="font-normal text-base mb-10 md:mb-0">
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