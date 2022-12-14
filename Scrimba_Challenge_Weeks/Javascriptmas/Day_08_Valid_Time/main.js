function validTime(str) {
  let [hours, minutes] = str.split(":").map(item => parseInt(item));
  if (hours >= 0 && hours <= 23) {
      if (minutes >= 0 && minutes <= 59) return true;
  }
  return false;
}


/**
* Test Suite 
*/
describe('validTime()', () => {
  it('returns true for valid time', () => {
      // arrange
      const str = '13:58';
      
      // act
      const result = validTime(str);

      // log
      console.log("result 1 for 13:58: ", result);
      
      // assert
      expect(result).toBe(true);
  });

  it('returns false when invalid hours', () => {
      // arrange
      const str = '25:51';
      
      // act
      const result = validTime(str);

      // log
      console.log("result 1 for 25:51: ", result);
      
      // assert
      expect(result).toBe(false);
  });

  it('returns false when invalid minutes', () => {
      // arrange
      const str = '02:76';
      
      // act
      const result = validTime(str);

      // log
      console.log("result 1 for 02:76: ", result);
      
      // assert
      expect(result).toBe(false);
  });
});