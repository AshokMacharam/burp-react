let AllEmployees = [
  {
    employeeId: 1,
    employeeName: "X",
    role: "Admin",
    projectInfo: {
      projectCode: 1,
      projectName: "X-code",
    },
  },
  {
    employeeId: 2,
    employeeName: "Y",
    role: "Tester",
    projectInfo: {
      projectCode: 2,
      projectName: "Y-code",
    },
  },
  {
    employeeId: 3,
    employeeName: "Z",
    role: "Manager",
    projectInfo: {
      projectCode: 4,
      projectName: "Alpha",
    },
  },
  {
    employeeId: 4,
    employeeName: "A",
    role: "Developer",
    projectInfo: {
      projectCode: 4,
      projectName: "Alpha",
    },
  },
];

let Allprojects = [
  {
    projectCode: 1,
    projectName: "X-code",
  },
  {
    projectCode: 2,
    projectName: "Y-code",
  },
  {
    projectCode: 3,
    projectName: "Z-code",
  },
  {
    projectCode: 4,
    projectName: "Alpha",
  },
  {
    projectCode: 5,
    projectName: "Beta",
  },
];

let AllBugs = [
  {
    bugId: 1,
    bugTitle: "UI Bug",
    description: "Login button not working",
    assignedTo: {
      employeeId: 1,
      employeeName: "X",
      role: "Admin",
      projectInfo: {
        projectCode: 1,
        projectName: "X-code",
      },
    },
    assignedBy: {
      employeeId: 2,
      employeeName: "Y",
      role: "Tester",
      projectInfo: {
        projectCode: 2,
        projectName: "Y-code",
      },
    },
    createdTime: "24 Jan 2025, 09:02:09 pm",
    lastUpdatedTime: "24 Jan 2025, 09:02:09 pm",
    projectInfo: {
      projectCode: 1,
      projectName: "X-code",
    },
    os: "Windows",
    type: "UI",
    browser: "Chrome",
    priority: "High",
    severity: "Critical",
  },
  {
    bugId: 2,
    bugTitle: "Login - welcome message",
    description: "The user must be greeted with a welcome message",
    assignedTo: {
      employeeId: 1,
      employeeName: "X",
      role: "Admin",
      projectInfo: {
        projectCode: 1,
        projectName: "X-code",
      },
    },
    assignedBy: {
      employeeId: 2,
      employeeName: "Y",
      role: "Tester",
      projectInfo: {
        projectCode: 2,
        projectName: "Y-code",
      },
    },
    createdTime: "24 Jan 2025, 11:39:44 pm",
    lastUpdatedTime: "24 Jan 2025, 11:39:44 pm",
    projectInfo: {
      projectCode: 1,
      projectName: "X-code",
    },
    os: "MacOS",
    type: "Functional",
    browser: "Safari",
    priority: "Medium",
    severity: "Medium",
  },
  {
    bugId: 3,
    bugTitle: "Display error ",
    description: "light error ",
    assignedTo: {
      employeeId: 4,
      employeeName: "A",
      role: "Developer",
      projectInfo: {
        projectCode: 4,
        projectName: "Alpha",
      },
    },
    assignedBy: {
      employeeId: 2,
      employeeName: "Y",
      role: "Tester",
      projectInfo: {
        projectCode: 2,
        projectName: "Y-code",
      },
    },
    createdTime: "03 Feb 2025, 10:14:54 pm",
    lastUpdatedTime: "03 Feb 2025, 10:14:54 pm",
    projectInfo: {
      projectCode: 1,
      projectName: "X-code",
    },
    os: "MacOS",
    type: "UI",
    browser: "Chrome",
    priority: "Low",
    severity: "Medium",
  },
  {
    bugId: 4,
    bugTitle: "Login - welcome message",
    description: "The user must be greeted with a welcome message",
    assignedTo: {
      employeeId: 4,
      employeeName: "X",
      role: "Admin",
      projectInfo: {
        projectCode: 1,
        projectName: "X-code",
      },
    },
    assignedBy: {
      employeeId: 2,
      employeeName: "Y",
      role: "Tester",
      projectInfo: {
        projectCode: 2,
        projectName: "Y-code",
      },
    },
    createdTime: "24 Jan 2025, 11:39:44 pm",
    lastUpdatedTime: "24 Jan 2025, 11:39:44 pm",
    projectInfo: {
      projectCode: 3,
      projectName: "X-code",
    },
    os: "Linux",
    type: "Functional",
    browser: "Mozilla Firefox",
    priority: "Severe",
    severity: "Severe",
  },
];

export { AllEmployees, Allprojects, AllBugs };
