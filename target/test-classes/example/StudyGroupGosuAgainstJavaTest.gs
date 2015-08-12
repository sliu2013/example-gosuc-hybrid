package example

uses org.junit.Assert
uses org.junit.Test
uses java.util.ArrayList
uses java.util.List

class StudyGroupGosuAgainstJavaTest {
  @Test
  public function testStudyGroupClass() : void {
    final var testStudents : List<Student> = new ArrayList<Student>()
    testStudents.add(new Student(1, "Student No.1", 60))
    testStudents.add(new Student(2, "Student No.2", 70))
    testStudents.add(new Student(3, "Student No.2", 80))
    final var testGroup = new StudyGroup()
    for (student in testStudents) {
      testGroup.addStudent(student)
    }
    Assert.assertEquals(testGroup.getGroupSize(), testStudents.size())
    var testStudent : Student = testStudents.get(0)
    var returnedStudent : Student = testGroup.getStudent(testStudent.getId())
    Assert.assertSame(returnedStudent, testStudent)
    Assert.assertEquals(returnedStudent.getId(), testStudent.getId())
    Assert.assertEquals(returnedStudent.getName(), testStudent.getName())
    Assert.assertEquals(returnedStudent.getScore(), testStudent.getScore())
    testGroup.removeStudent(testStudent.getId())
    Assert.assertEquals(testGroup.getGroupSize(), testStudents.size() - 1)
    testGroup.clear()
    Assert.assertEquals(testGroup.getGroupSize(), 0)
  }


}