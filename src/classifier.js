function classifier(students) {
  const currentYear = 2019;
  const parsedStudents = students.map((student) => {
    const [name, dob, regNo] = student.split(",");
    return { name, dob, regNo };
  });

  const sortedSudents = studentsWithAge.sort((a, b) => a.age - b.age);

  const groups = [];

  sortedSudents.forEach((student) => {
    let addedToGroup = false;
    for (const group of groups) {
      const ageDiff = Math.abs(student.age - group.members[0].age);
      if (group.members.length < 3 && ageDiff <= 5) {
        group.members.push(student);
        addedToGroup = true;
        break;
      }
    }
    if (!addedToGroup) {
      groups.push({
        members: [student],
        oldestAge: student.age,
        regNos: [student.regNo],
      });
    }
  });

  groups.forEach((group, index) => {
    console.log("Group ${index +1}:");
    group.members.forEach((member) => {
      console.log(`Name: ${member.name}`);
      console.log(`DOB: ${member.dob}`);
      console.log(`Reg No: ${member.regNo}`);
      console.log(`Age: ${member.age}`);
    });
    console.log("Oldest Age: ${group.oldestAge}");
    console.log("Sum of Ages: ${group.sumOfAges}");
    console.log("Reg Nos: ${group.regNos.sort().join(", ")}");
    console.log("");
  });
}

export default classifier;
