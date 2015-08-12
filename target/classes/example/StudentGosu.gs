package example

public class StudentGosu  {
  private var id : int
  private var name : String
  private var score : int
  public construct(id_0 : int, name_0 : String, score_0 : int) {
    this.id = id_0
    this.name = name_0
    this.score = score_0
  }
  public function getId() : int {
    return id
  }
  public function getName() : String {
    return name
  }
  public function getScore() : int {
    return score
  }
}
