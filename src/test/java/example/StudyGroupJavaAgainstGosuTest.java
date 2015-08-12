package example;

/**
 * Created by sliu on 8/12/2015.
 */
import org.junit.Assert;
import org.junit.Test;
import java.util.ArrayList;
import java.util.List;
import example.StudyGroupGosu;
import example.StudentGosu;

public class StudyGroupJavaAgainstGosuTest {
    @Test
    public void testStudyGroupClass1() {
        final List<StudentGosu> testStudents = new ArrayList<StudentGosu>() ;
        testStudents.add(new StudentGosu(1, "Student No.1", 60));
        testStudents.add(new StudentGosu(2, "Student No.2", 70));
        testStudents.add(new StudentGosu(3, "Student No.2", 80));
        final StudyGroupGosu testGroup = new StudyGroupGosu();
        for (StudentGosu student : testStudents) {
            testGroup.addStudent(student);
        }
        Assert.assertEquals(testGroup.getGroupSize(), testStudents.size());
        StudentGosu testStudent = testStudents.get(0);
        StudentGosu returnedStudent = testGroup.getStudent(testStudent.getId());
        Assert.assertSame(returnedStudent, testStudent);
        Assert.assertEquals(returnedStudent.getId(), testStudent.getId());
        Assert.assertEquals(returnedStudent.getName(), testStudent.getName());
        Assert.assertEquals(returnedStudent.getScore(), testStudent.getScore());
        testGroup.removeStudent(testStudent.getId());
        Assert.assertEquals(testGroup.getGroupSize(), testStudents.size() - 1);
        testGroup.clear();
        Assert.assertEquals(testGroup.getGroupSize(), 0);
    }
}