import React, { useState } from "react";
import img1 from "../images/ahmadfridi.jpg";
import { DiCodeigniter } from "react-icons/di";
import { SiProtonmail } from "react-icons/si";
import { MdDeveloperMode } from "react-icons/md";
import { FaSchool, FaUniversity } from "react-icons/fa";
import { PiStudentFill } from "react-icons/pi";
import Head from "../components/Head";
import Foter from "../components/Foter";

export default function AboutMe() {
  const [modalImg, setModalImg] = useState(null);

  const openModal = (imgUrl) => {
    setModalImg(imgUrl);
  };

  const closeModal = () => {
    setModalImg(null);
  };

  return (
    <>
      <div className="mt-16">
        <Head />
      </div>

      <div className="min-h-screen bg-gradient-to-br from-green-100 via-emerald-200 to-green-100 p-5">
        <div className="max-w-5xl mx-auto bg-white/90 rounded-2xl shadow-lg p-6 lg:flex items-center gap-10">
          <img
            src={img1}
            alt="Muhammad Ahmad Fridi"
            className="w-full max-w-sm rounded-lg shadow-lg object-cover"
          />
          <div className="mt-6 lg:mt-0 space-y-4">
            <h1 className="text-3xl font-bold text-green-800">
              Muhammad Ahmad Fridi
            </h1>
            <p className="text-gray-600">
              🏠 <strong>Address:</strong> 7/1A.L Akhtarabad, Okara, Punjab, Pakistan
            </p>
            <p className="text-green-700 font-medium">
              💼 I am an expert in <strong>Web Development</strong>. I build
              responsive, user-friendly websites with clean UI
              and strong performance.
            </p>
            <p className="text-gray-700 text-lg font-medium">🇵🇰 Pakistan</p>

            <div className="space-y-6 mt-8">
              <div className="flex items-center gap-6">
                <div className="flex-1 flex items-center gap-2">
                  <FaSchool className="text-green-700 text-xl" />
                  <p className="text-gray-600 font-semibold">
                    Matric: Govt High School 7/1A.L <br /> Marks: 902/1100
                  </p>
                </div>
                <img
                  src="https://scontent.fisb22-1.fna.fbcdn.net/v/t39.30808-6/307331254_482457180563285_7413769522948618636_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=MpvytpiW2UoQ7kNvwGH4JOg&_nc_oc=Adk-eCm4vdpLiLzBHlAHnMIQ31tUZjoWNht9bw9SY1lBBvLFAP6SHb7KHzLfuBx2h5Y&_nc_zt=23&_nc_ht=scontent.fisb22-1.fna&_nc_gid=PakyhaDuQv9kGOrw3evG8w&oh=00_AfR4a5Q1STGu2jnjGhHzHYRAYpdbetU_y7LH0Drc1VepqQ&oe=688FA766"
                  alt="Govt High School"
                  className="w-40 rounded shadow cursor-pointer"
                  onClick={() => openModal("https://scontent.fisb22-1.fna.fbcdn.net/v/t39.30808-6/307331254_482457180563285_7413769522948618636_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=MpvytpiW2UoQ7kNvwGH4JOg&_nc_oc=Adk-eCm4vdpLiLzBHlAHnMIQ31tUZjoWNht9bw9SY1lBBvLFAP6SHb7KHzLfuBx2h5Y&_nc_zt=23&_nc_ht=scontent.fisb22-1.fna&_nc_gid=PakyhaDuQv9kGOrw3evG8w&oh=00_AfR4a5Q1STGu2jnjGhHzHYRAYpdbetU_y7LH0Drc1VepqQ&oe=688FA766")}
                />
              </div>

              <div className="flex items-center gap-6">
                <div className="flex-1 flex items-center gap-2">
                  <FaUniversity className="text-green-700 text-xl" />
                  <p className="text-gray-600 font-semibold">
                    FSc: Aspire College, Renala Khurd <br /> Marks: 770/1100
                  </p>
                </div>
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8Unlhafq1h7CNZ8_Zk10P_C8kylwXgs6caw&s"
                  alt="Aspire College"
                  className="w-40 rounded shadow cursor-pointer"
                  onClick={() =>
                    openModal("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8Unlhafq1h7CNZ8_Zk10P_C8kylwXgs6caw&s")
                  }
                />
              </div>

              <div className="flex items-center gap-6">
                <div className="flex-1 flex items-center gap-2">
                  <PiStudentFill className="text-green-700 text-xl" />
                  <p className="text-gray-600 font-semibold">
                    Graduation: ADP in Software Engineering from UMT Lahore <br /> CGPA: 3.14/4.00
                  </p>
                </div>
                <img
                  src="https://humenglish.com/wp-content/uploads/2024/02/UMT-Lahore.jpg"
                  alt="UMT Lahore"
                  className="w-40 rounded shadow cursor-pointer"
                  onClick={() =>
                    openModal("https://humenglish.com/wp-content/uploads/2024/02/UMT-Lahore.jpg")
                  }
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-24">
          <h2 className="text-2xl text-center font-bold lg:text-3xl text-green-900">
            My Creative Process
          </h2>

          <div className="mt-10 lg:grid lg:grid-cols-3 lg:gap-8">
            <div className="flex flex-col items-start lg:items-center">
              <div className="flex items-center gap-3 lg:flex-col">
                <DiCodeigniter className="text-2xl lg:text-3xl text-red-600" />
                <h3 className="font-semibold text-lg">Inspiration & Research</h3>
              </div>
              <p className="mt-3 text-gray-700 lg:text-center">
                ɪ ꜱᴛᴀʀᴛ ʙʏ ᴜɴᴅᴇʀꜱᴛᴀɴᴅɪɴɢ ᴛʜᴇ ᴄʟɪᴇɴᴛ’ꜱ ɢᴏᴀʟꜱ ᴀɴᴅ ᴛᴀʀɢᴇᴛ ᴜꜱᴇʀꜱ...
              </p>
            </div>

            <div className="flex flex-col items-start mt-8 lg:items-center lg:mt-0">
              <div className="flex items-center gap-3 lg:flex-col">
                <SiProtonmail className="text-2xl lg:text-3xl text-green-700" />
                <h3 className="font-semibold text-lg">Design & Prototyping</h3>
              </div>
              <p className="mt-3 text-gray-700 lg:text-center">
                ɪ ᴄʀᴇᴀᴛᴇ ᴡɪʀᴇꜰʀᴀᴍᴇꜱ ᴀɴᴅ ᴘʀᴏᴛᴏᴛʏᴘᴇꜱ...
              </p>
            </div>

            <div className="flex flex-col items-start mt-8 lg:items-center lg:mt-0">
              <div className="flex items-center gap-3 lg:flex-col">
                <MdDeveloperMode className="text-2xl lg:text-3xl text-cyan-400" />
                <h3 className="font-semibold text-lg">Development & Testing</h3>
              </div>
              <p className="mt-3 text-gray-700 lg:text-center">
                ɪ ʙʀɪɴɢ ᴛʜᴇ ɪᴅᴇᴀꜱ ᴛᴏ ʟɪꜰᴇ ᴜꜱɪɴɢ ʜᴛᴍʟ, ᴄꜱꜱ, ᴊᴀᴠᴀꜱᴄʀɪᴘᴛ...
              </p>
            </div>
          </div>
        </div>
      </div>

      {modalImg && (
        <div
          onClick={closeModal}
          className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50 cursor-pointer"
        >
          <img
            src={modalImg}
            alt="Full View"
            className="max-h-[90vh] max-w-[90vw] rounded shadow-lg"
          />
        </div>
      )}

      <div className="mt-24">
        <Foter />
      </div>
    </>
  );
}
