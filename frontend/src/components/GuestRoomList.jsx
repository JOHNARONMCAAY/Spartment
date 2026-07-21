export default function GuestRoomList({
  rooms = [],
}) {


  return (

    <section>


      <h2>
        Available Rooms
      </h2>




      <div>


        {
          rooms.map((room)=>(


            <div

              key={
                room.roomId ||
                room.id
              }

            >



              <h3>

                {room.roomNumber}

              </h3>




              <p>

                {room.status}

              </p>




              <p>

                ₱{room.price}

              </p>




              <button>

                Inquiry

              </button>




            </div>


          ))
        }



      </div>


    </section>

  );

}