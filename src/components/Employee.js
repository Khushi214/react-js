import React from 'react';

const EmployeeList = () => {
  const employees = [
    { id: 1, salary: 50000, name: 'Khushi'},
    { id: 2, salary: 50000, name: 'Janvi' },
    { id: 3, salary: 50000, name: 'Prince' },
    { id: 4, salary: 50000, name: 'Dinki' },
  ];

  return (
    <div>
      <h1>List of employees:</h1>
      <ul>
        {employees.map((employee) => (
          <li key={employee.id}>{employee.name}: {employee.salary}</li>
        ))}
      </ul>
    </div>
  );
};

export default EmployeeList;