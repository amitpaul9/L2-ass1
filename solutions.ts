const multiplyValue = (value: number, multiplier: number = 2): number => {
  return value * multiplier;
};

const processInput = (value: string | number | boolean): string | number => {
  if (typeof value === "string") {
    return value.trim().toLowerCase();
  } else if (typeof value === "number") {
    return value * 10;
  } else {
    return value ? "Active" : "Inactive";
  }
};

const formatCoordinate = (coordinate: readonly [number, number, string]): string => {
  const [lat, lng, locName] = coordinate;
  return `Location: ${locName} (${lat}, ${lng})`;
};

const concatenateArrays = <T>(...arrays: T[][]): T[] => {
  let combined: T[] = [];
  for (let arr of arrays) {
    combined.push(...arr);
  }
  return combined;
};

interface Course {
  title: string;
  students: number;
  isPublished: boolean;
}

const getPopularCourses = (courses: Course[], minStudents: number): Course[] => {
  let popularList: Course[] = [];
  for (let c of courses) {
    if (c.isPublished && c.students >= minStudents) {
      popularList.push(c);
    }
  }
  return popularList;
};

const pluckValues = <T, K extends keyof T>(items: T[], key: K): T[K][] => {
  let values: T[K][] = [];
  for (let item of items) {
    values.push(item[key]);
  }
  return values;
};

class Employee {
  protected name: string;
  private baseSalary: number;

  constructor(name: string, baseSalary: number) {
    this.name = name;
    this.baseSalary = baseSalary;
  }

  public getDetails = (): string => {
    return `Employee: ${this.name}, Base Salary: ${this.baseSalary}`;
  };
}

class Manager extends Employee {
  private department: string;

  constructor(name: string, baseSalary: number, department: string) {
    super(name, baseSalary);
    this.department = department;
  }

  public getRoleInfo = (): string => {
    return `Manager of ${this.department}: ${this.name}`;
  };
}

const validateAgeAsync = (age: number): Promise<string> => {
  return new Promise((resolve, reject) => {
    if (age < 18) {
      reject(new Error("Access Denied: Must be 18 or older"));
    } else {
      setTimeout(() => {
        resolve("Access Granted");
      }, 1000);
    }
  });
};