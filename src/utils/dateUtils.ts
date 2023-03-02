const dateUtils = (() => {
  const months = [ "January", "February", "March", "April",
    "May","June", "July","August", "September", "October",
    "November", "December" ];
  
    const getCurrentMonthAndYear = (): string => {
      const date = new Date();
      const monthIndex = date.getMonth();
      const year = date.getFullYear();
      const monthName = months[monthIndex];
      return `${monthName}, ${year}`;
    }
  
    //--Expose only the public functions--//
    return {
      getCurrentMonthAndYear,
    };
  })();
  
export default dateUtils;