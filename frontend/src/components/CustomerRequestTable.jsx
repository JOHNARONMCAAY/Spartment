export default function CustomerRequestTable({
  requests = [],
  onApprove,
  onReject,
}) {


  return (

    <table className="w-full border">


      <thead>

        <tr>

          <th>Name</th>
          <th>Email</th>
          <th>Contact</th>
          <th>Room</th>
          <th>Message</th>
          <th>Status</th>
          <th>Action</th>

        </tr>

      </thead>



      <tbody>


        {
          requests.map((request)=>(


            <tr key={request.id}>


              <td>

                {
                  request.guestName ||
                  request.fullName ||
                  request.name
                }

              </td>



              <td>
                {request.email}
              </td>



              <td>
                {request.contact}
              </td>



              <td>

                {
                  request.requestedRoom ||
                  request.room ||
                  request.preferredRoom
                }

              </td>



              <td>
                {request.message}
              </td>



              <td>

                {
                  request.status ||
                  "Pending"
                }

              </td>



              <td>


                <button

                  onClick={() =>
                    onApprove &&
                    onApprove(request.id)
                  }

                >

                  Approve

                </button>



                <button

                  onClick={() =>
                    onReject &&
                    onReject(request.id)
                  }

                >

                  Reject

                </button>


              </td>


            </tr>


          ))
        }


      </tbody>


    </table>

  );

}