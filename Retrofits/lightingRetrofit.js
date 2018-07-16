public class LightingRetrofit{

    private static double preHoursOnPerYearInput = 10;
    private static double postHoursOnPerYearInput = 5;
    private static double preWattsInput = 10;
    private static double postWattsInput = 10;
    private static double numberOfLampsInput = 10;
    private static double energySavings;
    private static boolean timeChange = true;

     public static void main(String []args){
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
          return (preWattsInput-postWattsInput)/1000 * numberOfLampsInput;
      } else {
        return (preWattsInput/1000 * numberOfLampsInput);
      }
    }

 //these equations are used to calculate the savings in energy
     public static double energyPowerChangeCalc() {
         return ((preWattsInput-postWattsInput)/1000 * numberOfLampsInput * preHoursOnPerYearInput);
     }

     public static double energyTimeChangeCalc() {
       return (preWattsInput/1000 * numberOfLampsInput * (preHoursOnPerYearInput - postHoursOnPerYearInput));
     }

     public static double energyCalcTotal(double energyCalcPowerChange, double energyCalcTimeChange) {
       return ((preWattsInput-postWattsInput)/1000 * numberOfLampsInput * (preHoursOnPerYearInput - postHoursOnPerYearInput));
     }

}
