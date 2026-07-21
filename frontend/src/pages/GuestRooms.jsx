import useRooms from "../hooks/useRooms";

import GuestRoomList from "../components/GuestRoomList";

import Loading from "../components/Loading";

import ErrorMessage from "../components/ErrorMessage";



export default function GuestRooms(){


  const {

    rooms = [],

    loading,

    error,


  } = useRooms();



  if(loading){

    return <Loading/>;

  }



  if(error){

    return (

      <ErrorMessage
        message={error}
      />

    );

  }



  return (

    <div>


      <h1>
        Guest Rooms
      </h1>



      <GuestRoomList

        rooms={rooms}

      />


    </div>

  );

}