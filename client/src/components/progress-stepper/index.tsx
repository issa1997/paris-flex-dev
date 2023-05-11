import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import { ReactComponent as Details } from "../../assets/icons/details.svg";
import { ReactComponent as Extras } from "../../assets/icons/extras-step.svg";
import { ReactComponent as ExtrasWhite } from "../../assets/icons/extra-white.svg";
import { ReactComponent as ConfirmWhite } from "../../assets/icons/confirm-white.svg";
import { ReactComponent as Confirm } from "../../assets/icons/confirm.svg";
import "./index.css";
const ProgressStepper: React.FC<{ activeStep: number }> = (props) => {
  return (
    <div className="stepper-class-style">
      <Stepper activeStep={props.activeStep} variant="outlined">
        <Step>
          <StepLabel StepIconComponent={Details}>Details</StepLabel>
        </Step>
        <Step>
          <StepLabel
            StepIconComponent={props.activeStep > 0 ? Extras : ExtrasWhite}
          >
            Extras
          </StepLabel>
        </Step>
        <Step>
          <StepLabel
            StepIconComponent={props.activeStep > 1 ? Confirm : ConfirmWhite}
          >
            Confirm
          </StepLabel>
        </Step>
      </Stepper>
    </div>
  );
};

export default ProgressStepper;
