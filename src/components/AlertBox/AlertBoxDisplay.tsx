import { AlertBox } from "./AlertBox";

function AlertBoxDisplay() {
    return(
        <section>
            <h2>Success Component</h2>
            <AlertBox
              type="success"
              message="Your profile has been updated successfully!"
              onClose={() => alert("Alert closed")}
            >
              <p className="text-sm">
                You can now continue using the application.
              </p>
            </AlertBox>

            <h2>Error Component</h2>
            <AlertBox
              type="error"
              message="Your profile has been updated successfully!"
              onClose={() => alert("Alert closed")}
            >
              <p className="text-sm">
                You can now continue using the application.
              </p>
            </AlertBox>

            <h3>Warning Component</h3>
            <AlertBox
              type="warning"
              message="Your profile has been updated successfully!"
              onClose={() => alert("Alert closed")}
            >
              <p className="text-sm">
                You can now continue using the application.
              </p>
            </AlertBox>

            <h3>Info Component</h3>
            <AlertBox
              type="info"
              message="Your profile has been updated successfully!"
              onClose={() => alert("Alert closed")}
            >
              <p className="text-sm">
                You can now continue using the application.
              </p>
            </AlertBox>
        </section>
    )
}


export default AlertBoxDisplay;