import { makeStyles, MobileStepper } from "@material-ui/core";

interface SliderStepperProps {
  maxSteps: number;
  activeStep: number;
}

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        justifyContent: 'center',
        backgroundColor: 'transparent'
    },
    dot: {
        width: 12,
        height: 12,
        backgroundColor: 'rgba(255,255,255,0.4)'
    },
    doActive: {
        backgroundColor: theme.palette.common.white
    }
}));
const SliderStepper: React.FunctionComponent<SliderStepperProps> = (props) => {
  const { maxSteps, activeStep } = props;
  const classes = useStyles();
  return (
    <MobileStepper classes={{root: classes.root, dot: classes.dot, dotActive: classes.doActive}}
      steps={maxSteps}
      activeStep={activeStep}
      position="static"
      variant="dots"
      backButton={null}
      nextButton={null}
    />
  );
};

export default SliderStepper;
