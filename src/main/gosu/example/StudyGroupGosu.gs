package example

uses java.lang.*
uses java.util.HashMap

public class StudyGroupGosu  {

  private var students : HashMap<Integer, StudentGosu>
  public construct() {
    students = new HashMap<Integer, StudentGosu>()
  }

  public function addStudent(student : StudentGosu) : void {
    var id : int = student.getId()
    students.put(id, student)
  }

  public function getStudent(id : int) : StudentGosu {
    return students.get(id)
  }

  public function removeStudent(id : int) : void {
    students.remove(id)
  }

  public function clear() : void {
    students.clear()
  }

  public function getGroupSize() : int {
    return students.size()
  }

}
