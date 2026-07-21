import useCustomerRequests from "../hooks/useCustomerRequests";

import CustomerRequestTable from "../components/CustomerRequestTable";

import Loading from "../components/Loading";

import ErrorMessage from "../components/ErrorMessage";



export default function CustomerRequests(){


  const {

    requests = [],

    loading,

    error,

    approveRequest,

    rejectRequest,

    approve,

    reject,


  } = useCustomerRequests();



  const handleApprove =
    approveRequest ||
    approve;



  const handleReject =
    rejectRequest ||
    reject;



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
        Customer Requests
      </h1>



      <CustomerRequestTable


        requests={requests}


        onApprove={handleApprove}


        onReject={handleReject}


      />


    </div>

  );

}