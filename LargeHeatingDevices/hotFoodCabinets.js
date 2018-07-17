public class HotFoodCabinets{

  private static double preIdealRunHoursInput = 10;
  private static double postIdealRunHoursInput = 10;
  private static double preIdleEnergyRateInput = 10;
  private static double postIdleEnergyRateInput = 10;
  private static double cabinetVolumeInput = 10;
  private static double prePowerUseCalc = (cabinetVolumeInput * preIdleEnergyRateInput/1000);
  private static double postPowerUseCalc = (cabinetVolumeInput * postIdleEnergyRateInput/1000);
  private static double energySavings;
  private static boolean timeChange = true;

     public static void main(String []args) {
        System.out.println("Hello World");
        double energyPowerChange = energyPowerChangeCalc();
        double energyTimeChange = energyTimeChangeCalc();
        if (energyPowerChange != 0 && energyTimeChange == 0) {
          energySavings = energyPowerChange;
        } else if (energyPowerChange == 0 && energyTimeChange != 0) {
          energySavings = energyTimeChange;
        } else if (energyPowerChange != 0 && energyTimeChange != 0) {
          energySavings = energyCalcTotal(energyPowerChange, energyTimeChange);
        } else if (energyPowerChange == 0 && energyTimeChange == 0) {
          energySavings = 0;
        }
        System.out.println(energySavings);
     }

 //this is the function that will be called by the platform to determine the energy cost savings. In the main class the value is "powerValue" that is
 //used in the various electricityCosts equations; in this equation there should be a check determining if the powerValue returned is dependent upon
 //the time or not. If it is dependent upon the time, then the powerValue returned will be the preValue. If it is not dependent upon the time, then
 //the power value returned will be the difference between the pre and post values
      public static double powerValueCalc() {
        if (timeChange == false) {
          return (prePowerUseCalc - postPowerUseCalc);
      } else {
        return (prePowerUseCalc);
      }
    }

 //these equations are used to calculate the savings in energy

     public static double energyPowerChangeCalc() {
         return (preIdealRunHoursInput * (prePowerUseCalc - postPowerUseCalc));
     }

     public static double energyTimeChangeCalc() {
         return ((preIdealRunHoursInput- postIdealRunHoursInput) * prePowerUseCalc);
     }

     public static double energyCalcTotal(double energyCalcPowerChange, double energyCalcTimeChange) {
         return  ((preIdealRunHoursInput- postIdealRunHoursInput) * (prePowerUseCalc - postPowerUseCalc));
     }

}
