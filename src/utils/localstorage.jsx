const Employees = [
  {
    id: 1,
    email: "employee1@example.com",
    password: "123",
    tasks: [
      {
        title: "Complete Report",
        description: "Prepare the monthly financial report.",
        date: "2024-12-10",
        category: "Finance",
        active: true,
        newTask: true,
        complete: false,
        failed: false
      },
      {
        title: "Team Meeting",
        description: "Attend the weekly team meeting.",
        date: "2024-12-08",
        category: "Meetings",
        active: false,
        newTask: false,
        complete: true,
        failed: false
      },
      {
        title: "Client Follow-Up",
        description: "Call client for project updates.",
        date: "2024-12-07",
        category: "Client Relations",
        active: true,
        newTask: false,
        complete: false,
        failed: false
      }
    ]
  },
  {
    id: 2,
    email: "employee2@example.com",
    password: "123",
    tasks: [
      {
        title: "Code Review",
        description: "Review the new code submissions.",
        date: "2024-12-06",
        category: "Development",
        active: false,
        newTask: true,
        complete: false,
        failed: true
      },
      {
        title: "Update Documentation",
        description: "Update project documentation with the latest changes.",
        date: "2024-12-09",
        category: "Documentation",
        active: true,
        newTask: false,
        complete: false,
        failed: false
      }
    ]
  },
  {
    id: 3,
    email: "employee3@example.com",
    password: "123",
    tasks: [
      {
        title: "Schedule Meeting",
        description: "Schedule a meeting with the marketing team.",
        date: "2024-12-11",
        category: "Meetings",
        active: true,
        newTask: true,
        complete: false,
        failed: false
      },
      {
        title: "Design Update",
        description: "Work on the design for the homepage update.",
        date: "2024-12-12",
        category: "Design",
        active: true,
        newTask: true,
        complete: false,
        failed: false
      }
    ]
  },
  {
    id: 4,
    email: "employee4@example.com",
    password: "123",
    tasks: [
      {
        title: "Data Backup",
        description: "Backup all data before migration.",
        date: "2024-12-13",
        category: "IT",
        active: false,
        newTask: false,
        complete: true,
        failed: false
      },
      {
        title: "Employee Training",
        description: "Conduct training for new employees.",
        date: "2024-12-15",
        category: "Training",
        active: true,
        newTask: true,
        complete: false,
        failed: false
      }
    ]
  },
  {
    id: 5,
    email: "employee5@example.com",
    password: "123",
    tasks: [
      {
        title: "Bug Fixing",
        description: "Fix critical bugs reported in the app.",
        date: "2024-12-06",
        category: "Development",
        active: true,
        newTask: false,
        complete: true,
        failed: false
      },
      {
        title: "Performance Review",
        description: "Submit performance review forms.",
        date: "2024-12-10",
        category: "HR",
        active: false,
        newTask: false,
        complete: false,
        failed: true
      }
    ]
  }
];

const Admin = [
  {
    id: 1,
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
