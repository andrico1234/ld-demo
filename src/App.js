import { useFlags } from "launchdarkly-react-client-sdk";
import "./App.css";
import { ChangeUserButton } from "./ChangeUserButton";

/**
 *
 * workshopViewPatients - Set as a permanent flag, can turn on/off based on technical failures
 *
 * workshopDeletePatients - Set as a flag for a specific segment. Can be used for RBAC, or beta testers
 *
 * workshopDeleteAccountExperiment - Set as an multi-variant experiment. Can be used for A/B testing
 */

function App() {
  const flags = useFlags();

  const hasViewPatientAccess = flags.workshopViewPatients ?? false;
  const hasDeletePatientAccess = flags.workshopDeletePatients ?? false;
  const deleteAccountCopy = flags.workshopDeleteAccountExperiment;

  return (
    <div className="App">
      <h1>Feature Management Demo</h1>
      <h2>Features</h2>
      <ul>
        <li>Create booking</li>
        {hasViewPatientAccess ? <li>View patient details</li> : null}
        {hasDeletePatientAccess ? <li>Delete patient details</li> : null}
        <li>{deleteAccountCopy} personal account</li>
      </ul>
      <ChangeUserButton />
    </div>
  );
}

export default App;
