import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center h-[100vh] gap-5">
        Please use the following buttons to naviagte to Question 2 and Question 3
        <Link href="/que2"><button className="px-4 py-2 bg-green-600 shadow-sm rounded-full text-white">Question 2</button></Link>
        <Link href="/que3"><button className="px-4 py-2 bg-green-600 shadow-sm rounded-full text-white">Question 3</button></Link>

        <div>
            <div>You can find the follwoing ans here:</div>
            <div>Question 1 - /que1.js - you can run this using command `node que1.js`</div>
            <div>Question 2 - /app/que2/page.jsx</div>
            <div>Question 3 - /app/que3/page.jsx</div>

            <div>Before starting run the following commands : </div>
            <div>- npm i</div>
            <div>- npm run build</div>
            <div>- npm run start</div>
            <div>or refer to readme file</div>
        </div>
    </div>
  );
}
