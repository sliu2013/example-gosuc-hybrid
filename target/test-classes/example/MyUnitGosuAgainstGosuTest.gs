package example
/**
 * Created with IntelliJ IDEA.
 * User: sliu
 * Date: 8/12/15
 * Time: 12:53 PM
 * To change this template use File | Settings | File Templates.
 */
uses java.lang.*
uses org.junit.Test
uses org.junit.Assert

public class MyUnitGosuAgainstGosuTest  {

  @Test
  public function testConcatenate() : void {
    var myUnit = new MyUnit()
    var result : String = myUnit.concatenate("one", "two")
    Assert.assertEquals("onetwo", result)
  }

}
