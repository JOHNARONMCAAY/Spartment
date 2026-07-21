export default function SmartRecommendations({
  recommendations = [],
}) {


  if(
    recommendations.length === 0
  ) {

    return (

      <div>

        <h2>
          Smart Recommendations
        </h2>


        <p>
          No recommendations available.
        </p>

      </div>

    );

  }



  return (

    <div>

      <h2>
        Smart Recommendations
      </h2>


      {
        recommendations.map(
          (recommendation) => (

            <div
              key={
                recommendation.id
              }
            >

              <h3>
                {
                  recommendation.title
                }
              </h3>


              <p>
                {
                  recommendation.message
                }
              </p>


              <p>
                Priority:
                {" "}
                {
                  recommendation.priority
                }
              </p>


              <p>
                Category:
                {" "}
                {
                  recommendation.category
                }
              </p>


            </div>

          )
        )
      }


    </div>

  );

}