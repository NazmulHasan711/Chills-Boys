import React from "react";
import img from "/pyementCart.svg";
import img2 from "/pyementCart2.svg";
import { Button } from "@heroui/react";
import PayModal from "./PayModal";

function MyPyement() {
  const [payment, setPayment] = React.useState([
    {
      id: 1,
      img: img,
      Hading: "The 90s with Dj Neptune",
      date: "Dec 12 2022",
      time: "9:00 PM ",
      price: 5000,
      location: "Quilox Club",
      quantity: 1,
    },
    {
      id: 2,
      img: img2,
      Hading: "Water Sports at Ikoyi Bay ",
      date: "Dec 12 2022",
      time: "9:00 PM ",
      price: 5000,
      location: "Quilox Club",
      quantity: 1,
    },
  ]);

  // const Updatequantity =(id, increment)=>{
  //     setPayment((items)=>(
  //       items.map((item)=>(
  //         item.id ===id
  //         ?{
  //             ...item,
  //             quantity:
  //             Math.max(item.quantity + increment,1),
  //             price:
  //             Math.max(item.quantity + increment ,1) *
  //             item.price / item.quantity
  //         }
  //         :item
  //       ))
  //     ))
  // }

  const UpdateQuantity = (id, increment) => {
    setPayment((items) =>
      items.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: Math.max(item.quantity + increment, 1),
              price:
                (Math.max(item.quantity + increment, 1) * item.price) /
                item.quantity,
            }
          : item,
      ),
    );
  };

  const Close = (id) => {
    setPayment(payment.filter((item) => item.id !== id));
  };

  const AddItem = () => {
    const NewItem = {
      id: payment.length + 1,
      img: img,
      Hading: "The 90s with Dj Neptune",
      date: "Dec 12 2022",
      time: "9:00 PM ",
      price: 5000,
      location: "Quilox Club",
      quantity: 1,
    };
    setPayment([...payment, NewItem]);
  };

  const [Menu, SetMenu] = React.useState(false);


  const Total = payment.reduce((sum, item)=> sum +item.price ,0 )
  const vat = Total*0.05
  const grandTotal = Total + vat

  return (
    <>
      <section className="flex flex-col md:flex-row justify-center  mx-auto gap-5 container px-4">
        {/* left side */}
        <div className="mt-20  mx-auto border-1 border-gray-500 px-5 py-5 rounded-md w-full md:w-1/2">
          {payment.map((item) => (
            <div key={item.id} className="flex gap-5 mb-5 items-center">
              <img src={item.img} alt="" className="w-24 h-24 rounded-xl" />
              <div>
                <h1 className="font-bold text-xl ">{item.Hading}</h1>

                {/* location and date */}
                <div className="flex mt-3 gap-2 text-md text-gray-700 font-semibold ">
                  <div className="flex gap-2 my-auto  items-center">
                    <img className="w-3 h-3" src="/Calendar.svg" alt="" />
                    <p>{item.date}</p>
                  </div>

                  <div className="flex gap-2 my-auto  items-center">
                    <img className="w-3 h-3" src="/Location.svg" alt="" />
                    <p>{item.location}</p>
                  </div>
                </div>

                <div className="flex mt-3 gap-2 text-md text-gray-700 font-semibold my-auto  items-center">
                  <img className="w-4 h-4" src="/Clock.svg" alt="" />
                  <p>{item.time}</p>
                </div>
                {/* pluse and mynus button */}
                <div className=" mt-5 flex gap-3 items-center bg-gray-300 px-4 py-2 rounded-md font-semibold w-20 md:w-30 mx-auto justify-center ">
                  <button
                    onClick={() => UpdateQuantity(item.id, -1)}
                    className="font-bold text-xl text-center"
                  >
                    -
                  </button>

                  <span className="">{item.quantity}</span>

                  <button
                    onClick={() => UpdateQuantity(item.id, 1)}
                    className="font-bold text-xl text-center"
                  >
                    +
                  </button>
                </div>

                <p className=" font-bold text-medium mt-5 border-1 border-gray-500 px-2 py-2 text-center">
                  {" "}
                  ₦ {item.price.toLocaleString()}
                </p>
              </div>
              {/* close button */}
              <button onClick={() => Close(item.id)}>
                <i className="fa-solid fa-x w-5 h-5"></i>
              </button>
            </div>
          ))}
          {/* add button */}
          <Button color="primary" onClick={AddItem}>
            Add More
          </Button>
        </div>

        {/* right side */}
        <div className="mt-20  mx-auto border-1 border-gray-500 px-5 py-5 rounded-md w-full md:w-1/2">
          {/* pyement information */}
          <div>
            <h1 className="font-bold text-xl flex gap-2 items-center">
              <img src="Check.png" alt="" />
              Account information
            </h1>

            <div className="mt-2 flex flex-col gap-1 text-gray-700 font-semibold ms-10">
              <p>Tunde Chukwu</p>
              <p>tundechukwu12@gmail.com</p>
            </div>
          </div>

          <div className="mt-8">
            <h1 className="font-bold text-xl flex gap-2 items-center">
              <img src="Check.png" alt="" />
              Phone number
            </h1>

            <div className="mt-2 flex flex-col gap-1 text-gray-700 font-semibold ms-10">
              <p>+2341123465799</p>
            </div>
          </div>

          {/* show pyement method */}

          <div className="mt-8">
            <h1
              onClick={() => SetMenu(!Menu)}
              className="font-bold text-xl flex gap-2 items-center "
            >
              <img src="Check.png" alt="" />
              Payment
              <img src="DownArro.png" alt="" />
            </h1>

            <div className="mt-2 flex flex-col gap-1 text-gray-700 font-semibold ms-10">
              <p>Account Info</p>
              <img src="visacard.png" alt="" className="w-50 h-10" />
            </div>
          </div>

          {Menu && (
            <div className="mt-2 grid grid-cols-2 gap-2 text-gray-700 font-semibold ms-10">
              <input
                type="text"
                placeholder=" Card Number"
                className="px-2 py-2 mt-2 border-1 border-sky-500 focus:border-1 focus:border-sky-400 cursor-pointer rounded-md"
              />

              <input
                type="datetime-local"
                placeholder=" Expiry Date"
                className="px-2 py-2 mt-2 border-1 border-sky-500 focus:border-1 focus:border-sky-400 cursor-pointer rounded-md"
              />

              <input
                type="text"
                placeholder=" Card Holder Name"
                className="px-2 py-2 mt-2 border-1 border-sky-500 focus:border-1 focus:border-sky-400 cursor-pointer rounded-md"
              />

              <input
                type="text"
                placeholder=" CVV"
                className="px-2 py-2 mt-2 border-1 border-sky-500 focus:border-1 focus:border-sky-400 cursor-pointer rounded-md"
              />
            </div>
          )}

          <div className="mt-8 bg-gray-300 px-5 py-5 rounded-md border-1 border-gray-500">
            {payment.map((item, i) => (
              <ul
                key={i}
                className="mt-5 flex justify-between items-center font-semibold text-sm text-gray-700"
              >
                <li>
                  {item.Hading} {item.quantity}
                </li>
                <li>₦ {item.price.toLocaleString()}</li>
              </ul>
            ))}

            {/* price */}

            {/* <div className="flex justify-between font-bold border-t-2 mt-5">
              <span>Total Price</span>
              <span>
                ₦ :
                {payment
                  .reduce((sum, item) => sum + item.price, 0)
                  .toLocaleString()}
              </span>
            </div> */}

            <div className="flex justify-between font-bold border-t-2 border-gray-500 mt-5">
              <span>Total Price</span>
              <span>
                ₦ :
                {Total.toLocaleString()}
              </span>
            </div> 



            {/* vat 5% */}
            {/* <div className="flex justify-between font-semibold border-t-1 mt-5">
              <span>Vat 5% : </span>
              <span>
                ₦ :{(
                  payment.reduce((sum, item)=> sum +item.price ,0 )* 0.05
                ).toLocaleString()}
              </span>
            </div> */}

            <div className="flex justify-between font-semibold border-t-1 mt-5">
              <span>Vat 5% : </span>
              <span>
                ₦ : {vat.toLocaleString()}
              </span>
            </div> 

            {/* grandTotal */}
            {/* <div className="flex justify-between mt-5 font-bold text-lg border-t-2 border-gray-500">
                <span>Grand Total: </span>
                <span> ₦ :{(
                  payment.reduce((sum, item)=> sum + item.price ,0)* 1.05
                ).toLocaleString()
                }</span>
            </div> */}

            <div className="flex justify-between mt-5 font-bold text-lg border-t-2 ">
                <span>Grand Total: </span>
                <span> ₦ : {grandTotal.toLocaleString()}
                </span>
            </div> 


              <PayModal/>
          </div>
        </div>
      </section>
    </>
  );
}

export default MyPyement;
