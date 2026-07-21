export default function CredentialDisplay({
  credentials,
}) {


  if (!credentials) {
    return null;
  }


  return (

    <div>


      <h2>
        Tenant Credentials
      </h2>



      <p>

        Email:
        {" "}

        <span>
          {credentials.email}
        </span>

      </p>




      <p>

        Temporary Password:
        {" "}

        <span>
          {credentials.password}
        </span>

      </p>



    </div>

  );

}