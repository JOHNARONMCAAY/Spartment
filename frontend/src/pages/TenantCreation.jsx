import AddTenantModal from "../components/AddTenantModal";

import CredentialDisplay from "../components/CredentialDisplay";

import Loading from "../components/Loading";

import ErrorMessage from "../components/ErrorMessage";

import useTenantCreation from "../hooks/useTenantCreation";



export default function TenantCreation(){


  const {

    credentials,

    tenant,

    loading,

    error,

    createTenant


  } = useTenantCreation();




  if (loading) {

    return <Loading />;

  }




  const displayCredentials = credentials || (

    tenant && {

      email:
        tenant.email,


      password:
        tenant.password ||
        tenant.temporaryPassword,

    }

  );




  return (

    <div>


      <h1>
        Tenant Creation
      </h1>




      {
        error && (

          <ErrorMessage

            message={error}

          />

        )
      }




      <AddTenantModal

        onSubmit={createTenant}

      />




      {
        displayCredentials && (

          <CredentialDisplay

            credentials={displayCredentials}

          />

        )
      }



    </div>

  );

}