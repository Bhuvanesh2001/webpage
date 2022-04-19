import React from "react";
import "./UniversitiesOfUsa.css";
import img1 from "../../assets/images/azhar_1.jpg";
import img2 from "../../assets/images/balaji_1.jpg";
import img3 from "../../assets/images/faiyaz_1.jpg";
import img4 from "../../assets/images/boy_success_1.jpg";
import img5 from "../../assets/images/girl_success_1.jpg";
import img6 from "../../assets/images/keerthi_1.jpg";
import img7 from "../../assets/images/naga_1.jpg";
import img8 from "../../assets/images/nihal_1.jpg";
import img9 from "../../assets/images/pavan_1.jpg";
import img10 from "../../assets/images/venkata_1.jpg";

export default function UniversitiesOfUsa() {
  return (
    <div className="flex flex-row w-3/4  gap-3 px-10 py-10 text-center justify-center  ">
      <div class="max-w-sm bg-white rounded shadow-md border-2 ">
        <div className="max-h-90">
          <div className="start-Card flex justify-between">
            <div className="block py-2 px-4 bg-orange-600 text-left border rounded-full hover:shadow-lg">
              Spring 2022
            </div>
            <div className="block py-2 px-4  bg-amber-500 text-black text-right border rounded-full hover:shadow-lg">
              USA
            </div>
          </div>
          <img class="rounded-t-lg " src={img1} alt=""></img>
        </div>

        <div className="text-center">
          <div class="p-1">Venkata Nagasai</div>
          <div class="p-1 text-orange-500 ">Wichita State University</div>
          <div class="p-3">Master in Computer Science</div>
          <div class="p-1 text-orange-500">GRE:299 | ILETS :7</div>
          <div class="p-1">GPA :7.18</div>
        </div>
      </div>

      <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md ">
        <div className="max-h-90">
        <div className="start-Card flex justify-between">
            <div className="block py-2 px-4 bg-orange-600 text-left border rounded-full hover:shadow-lg">
              Spring 2022
            </div>
            <div className="block py-2 px-4  bg-amber-500 text-black text-right border rounded-full hover:shadow-lg">
              USA
            </div>
          </div>
          <img class="rounded-t-lg " src={img2} alt=""></img>
        </div>

        <div className="text-center">
          <div class="p-1">Venkata Nagasai</div>
          <div class="p-1 text-orange-500 ">Wichita State University</div>
          <div class="p-3">Master in Computer Science</div>
          <div class="p-1 text-orange-500">GRE:299 | ILETS :7</div>
          <div class="p-1">GPA :7.18</div>
        </div>
      </div>

      <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md ">
        <div className="max-h-90">
        <div className="start-Card flex justify-between">
            <div className="block py-2 px-4 bg-orange-600 text-left border rounded-full hover:shadow-lg">
              Spring 2022
            </div>
            <div className="block py-2 px-4  bg-amber-500 text-black text-right border rounded-full hover:shadow-lg">
              USA
            </div>
          </div>
          <img class="rounded-t-lg " src={img3} alt=""></img>
        </div>

        <div className="text-center">
          <div class="p-1">Venkata Nagasai</div>
          <div class="p-1 text-orange-500 ">Wichita State University</div>
          <div class="p-3">Master in Computer Science</div>
          <div class="p-1 text-orange-500">GRE:299 | ILETS :7</div>
          <div class="p-1">GPA :7.18</div>
        </div>
      </div>

      <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md ">
        <div className="max-h-90">
        <div className="start-Card flex justify-between">
            <div className="block py-2 px-4 bg-orange-600 text-left border rounded-full hover:shadow-lg">
              Spring 2022
            </div>
            <div className="block py-2 px-4  bg-amber-500 text-black text-right border rounded-full hover:shadow-lg">
              USA
            </div>
          </div>
          <img class="rounded-t-lg " src={img4} alt=""></img>
        </div>

        <div className="text-center">
          <div class="p-1">Venkata Nagasai</div>
          <div class="p-1 text-orange-500 ">Wichita State University</div>
          <div class="p-3">Master in Computer Science</div>
          <div class="p-1 text-orange-500">GRE:299 | ILETS :7</div>
          <div class="p-1">GPA :7.18</div>
        </div>
      </div>

      {/* div 2 */}
    </div>
  );
}
