
// localStorage.clear()

const Employees = [
  {
    id: 1,
    firstName: "John",
    email: "john@example.com",
    password: "123",
    tasks: [
      {
        taskNumber: 1,
        title: "Complete Report",
        description: "Prepare the monthly financial report.",
        date: "2024-12-10",
        category: "Finance",
        active: true,
        newTask: true,
        complete: false,
        failed: false,
      },
      {
        taskNumber: 2,
        title: "Team Meeting",
        description: "Attend the weekly team meeting.",
        date: "2024-12-08",
        category: "Meetings",
        active: false,
        newTask: false,
        complete: true,
        failed: false,
      },
      {
        taskNumber: 3,
        title: "Client Follow-Up",
        description: "Call client for project updates.",
        date: "2024-12-07",
        category: "Client Relations",
        active: true,
        newTask: false,
        complete: false,
        failed: false,
      },
    ],
    activeTasks: 2,
    newTasks: 1,
    completeTasks: 1,
    failedTasks: 0,
  },
  {
    id: 2,
    firstName: "Emily",
    email: "emily@example.com",
    password: "123",
    tasks: [
      {
        taskNumber: 1,
        title: "Code Review",
        description: "Review the new code submissions.",
        date: "2024-12-06",
        category: "Development",
        active: false,
        newTask: true,
        complete: false,
        failed: true,
      },
      {
        taskNumber: 2,
        title: "Update Documentation",
        description: "Update project documentation with the latest changes.",
        date: "2024-12-09",
        category: "Documentation",
        active: true,
        newTask: false,
        complete: false,
        failed: false,
      },
    ],
    activeTasks: 1,
    newTasks: 1,
    completeTasks: 0,
    failedTasks: 1,
  },
  {
    id: 3,
    firstName: "Michael",
    email: "michael@example.com",
    password: "123",
    tasks: [
      {
        taskNumber: 1,
        title: "Schedule Meeting",
        description: "Schedule a meeting with the marketing team.",
        date: "2024-12-11",
        category: "Meetings",
        active: true,
        newTask: true,
        complete: false,
        failed: false,
      },
      {
        taskNumber: 2,
        title: "Design Update",
        description: "Work on the design for the homepage update.",
        date: "2024-12-12",
        category: "Design",
        active: true,
        newTask: true,
        complete: false,
        failed: false,
      },
    ],
    activeTasks: 2,
    newTasks: 2,
    completeTasks: 0,
    failedTasks: 0,
  },
  {
    id: 4,
    firstName: "Sophia",
    email: "sophia@example.com",
    password: "123",
    tasks: [
      {
        taskNumber: 1,
        title: "Data Backup",
        description: "Backup all data before migration.",
        date: "2024-12-13",
        category: "IT",
        active: false,
        newTask: false,
        complete: true,
        failed: false,
      },
      {
        taskNumber: 2,
        title: "Employee Training",
        description: "Conduct training for new employees.",
        date: "2024-12-15",
        category: "Training",
        active: true,
        newTask: true,
        complete: false,
        failed: false,
      },
    ],
    activeTasks: 1,
    newTasks: 1,
    completeTasks: 1,
    failedTasks: 0,
  },
  {
    id: 5,
    firstName: "James",
    email: "james@example.com",
    password: "123",
    tasks: [
      {
        taskNumber: 1,
        title: "Bug Fixing",
        description: "Fix critical bugs reported in the app.",
        date: "2024-12-06",
        category: "Development",
        active: true,
        newTask: false,
        complete: true,
        failed: false,
      },
      {
        taskNumber: 2,
        title: "Performance Review",
        description: "Submit performance review forms.",
        date: "2024-12-10",
        category: "HR",
        active: false,
        newTask: false,
        complete: false,
        failed: true,
      },
    ],
    activeTasks: 1,
    newTasks: 0,
    completeTasks: 1,
    failedTasks: 1,
  },
];



const Admin = [
  {
    id: 1,
     firstName: "Anand",
    email: "admin@example.com",
    password: "123"
  }
];

export const SetLoaclStorage = ()=>{
      localStorage.setItem('Employees',JSON.stringify(Employees));
      localStorage.setItem('Admin',JSON.stringify(Admin));
};

export const GetLoaclStorage = ()=>{
 const EmployeesData = JSON.parse(localStorage.getItem('Employees'));
 const AdminData = JSON.parse(localStorage.getItem('Admin'));
  // console.log(EmployeesData , AdminData);

  return {AdminData,EmployeesData}
  

};
