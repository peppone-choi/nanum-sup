import { students, teachers } from "./data";

function findStudent(studentId: number) {
  return new Promise<{
    id: number;
    name: string;
  }>((resolve, reject) => {
    // setTimeout을 넣어준 이유는 실제 DB에서 조회해오는 상황을 가정학시위해서 조회시간이 1초라고 가정한 것.
    setTimeout(() => {
      console.log("학생 정보를 찾는 중입니다.", studentId);
      const findStudent = students.find((student) => student.id === studentId);
      if (!findStudent) {
        reject("존재하지 않는 학생입니다.");
        return;
      }

      console.log("학생 정보를 찾았습니다.", findStudent);
      resolve(findStudent);
    }, 1000);
  });
}

// 병렬적으로 학생을 조회해온다.
async function findTeacherInfo(teacherId: string) {
  const teacher = teachers.find((teacher) => teacher.id === teacherId);

  if (!teacher) {
    throw new Error("존재하지 않는 선생님입니다.");
  }

  // Promise.all 케이스
  // const students = await Promise.all(
  //   teacher.students.map((studentId) => findStudent(studentId))
  // );

  // Promise.allSettled 케이스
  // const studentsData = await Promise.allSettled([
  //   ...teacher.students.map((studentId) => findStudent(studentId)),
  // ]);

  // const students = studentsData
  //   .filter((studentData) => studentData.status !== "rejected")
  //   .map((studentData) => studentData.value);

  return {
    ...teacher,
    students,
  };
}
// 순차적으로 학생을 조회해온다
async function sequentialFindTeacherInfo(teacherId: string) {
  const teacher = teachers.find((teacher) => teacher.id === teacherId);

  if (!teacher) {
    throw new Error("존재하지 않는 선생님입니다.");
  }

  let students = [];
  for (const studentId of teacher.students) {
    console.log(studentId);
    const student = await findStudent(studentId);
    students.push(student);
  }

  return {
    ...teacher,
    students,
  };
}

(async () => {
  // 병호 선생님의 정보와 학생들의 정보를 불러오자
  const teacher = await findTeacherInfo("a");
  // const teacher = await sequentialFindTeacherInfo("a");
  console.log("result", teacher);
})();
